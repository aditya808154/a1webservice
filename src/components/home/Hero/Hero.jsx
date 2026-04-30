import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import "./Hero.css";
import { Link } from "react-router-dom";

// Firebase Imports
import { db } from "../../../firebase"; 
import { collection, getDocs, query } from "firebase/firestore";

// Counter Component
const Counter = ({ targetValue, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [start, setStart] = useState(false);
  const countRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStart(true);
      },
      { threshold: 0.1 }
    );
    if (countRef.current) observer.observe(countRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!start) return;
    const target = parseFloat(targetValue);
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const currentCount = progress * target;
      setCount(target % 1 !== 0 ? currentCount.toFixed(1) : Math.floor(currentCount));
      if (progress < 1) window.requestAnimationFrame(step);
    };
    window.requestAnimationFrame(step);
  }, [start, targetValue, duration]);

  return <span ref={countRef}>{count}{targetValue.replace(/[0-9.]/g, '')}</span>;
};

const Hero = () => {
  const [heroSlides, setHeroSlides] = useState([]);
  const [stats, setStats] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "hero_home_data"));
        const allData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

        // 1. Hero Slides Filter & Sort (Oldest First - Jo pehle aaya o pehle dikhega)
        const slides = allData
          .filter(item => item.sectionType === "hero_slides")
          .sort((a, b) => (a.createdAt?.seconds || 0) - (b.createdAt?.seconds || 0));
        setHeroSlides(slides);

        // 2. Stats Filter & Sort (Oldest First)
        const statItems = allData
          .filter(item => item.sectionType === "hero_stats")
          .sort((a, b) => (a.createdAt?.seconds || 0) - (b.createdAt?.seconds || 0));
        setStats(statItems);

      } catch (error) {
        console.error("Error fetching hero data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        loop={heroSlides.length > 1}
        autoplay={{ delay: 10000, disableOnInteraction: false }}
        className="hero-swiper"
      >
        {heroSlides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <section className="hero-container">
              <div className="hero-content">
                <h2 className="hero-subtitle">{slide.subtitle}</h2>
                <h2 id="h4" className="hero-title" style={{ fontSize: "1.8rem", textAlign: "left" }}>
                  {slide.title} <span className="highlight">{slide.highlight}</span>
                </h2>
                <p className="hero-description">{slide.description}</p>
                <div className="hero-btns">
                  <a href="https://wa.me/917289040680" target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}>
                    <button className="btn-primary">Get Started</button>
                  </a>
                  <Link to="/online-courses">
                    <button className="btn-secondary">Our Services</button>
                  </Link>
                </div>
              </div>

              <div className="hero-video-container">
                {slide.video ? (
                  <video key={slide.video} autoPlay muted loop playsInline className="hero-video">
                    <source src={slide.video} type="video/mp4" />
                  </video>
                ) : slide.image ? (
                  <img src={slide.image} alt="Hero" className="hero-video" style={{objectFit: 'cover'}} />
                ) : null}
              </div>
            </section>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* --- STATS SECTION --- */}
      <div className="stats-container">
        {stats.map((item) => (
          <div key={item.id} className="stat-item">
            <h3 style={{fontSize:"1.8rem", color:"#ff8c00"}}>
              <Counter targetValue={item.value} />
            </h3>
            <p id="p" style={{fontSize:"1rem", textTransform:"none"}}>{item.label}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Hero;