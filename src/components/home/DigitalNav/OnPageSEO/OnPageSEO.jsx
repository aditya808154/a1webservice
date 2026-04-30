import React, { useState, useEffect } from "react";
import "./OnPageSEO.css";
import { FaWhatsapp } from "react-icons/fa";
import on1 from "../../../../assets/image/on/on1.webp";
import on2 from "../../../../assets/image/on/on2.webp";
import on3 from "../../../../assets/image/on/on3.webp";
import { motion } from "framer-motion";

// Firebase Imports
import { db } from "../../../../firebase";
import { collection, getDocs, query, orderBy } from "firebase/firestore";

const OnPageSEO = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  const orangeFilter =
    "invert(58%) sepia(91%) saturate(2200%) hue-rotate(350deg) brightness(101%) contrast(101%)";

  useEffect(() => {
    const fetchOnPageServices = async () => {
      try {
        const q = query(
          collection(db, "on_page_seo_services"),
          orderBy("createdAt", "asc"),
        );
        const querySnapshot = await getDocs(q);
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setServices(data);
      } catch (error) {
        console.error("Error fetching On-Page SEO services:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchOnPageServices();
  }, []);

  return (
    <div className="onpage-page">
      {/* 1. Hero Section */}
      <div className="about-hero">
        <h1 style={{ fontSize: "2.5rem", fontWeight:"bold" }}>
          On Page SEO <span>Optimisation | SEO Agency</span> in Lucknow
        </h1>
        <p>
          Boost your website's search rankings with expert On-Page SEO
          Optimization from a trusted SEO Agency in Lucknow. We optimize every
          element—from content to code—for maximum visibility and performance.
        </p>
      </div>

      <div className="about-content-wrapper">
        {/* 2. Intro Section */}
        <section className="section-header">
          <h2 style={{ marginTop: "20px", fontSize: "2rem" }}>
            Hire <span>On Page SEO Expert </span>in Lucknow
          </h2>
          <p style={{  margin: '6px 0', color: '#444',alignItems: 'flex-start' }}>
            Looking to improve your website’s visibility and search engine
            rankings? Hire an experienced On-Page SEO Expert in Lucknow to
            optimize your site’s structure, content, and technical elements.
            From keyword placement to meta tags and internal linking, every
            detail is fine-tuned for better performance. Get customized SEO
            solutions that drive real, measurable results.
          </p>
        </section>

        {/* 3. Services Grid */}
        <section className="course-main-section">
          <h3 className="section-title" style={{ fontSize: "1.8rem" }}>
            On Page <span>SEO Elements</span>
          </h3>
          <div className="card-grid-1x4">
            {loading ? (
              <p style={{ textAlign: "center", gridColumn: "1/-1" }}>
                Loading SEO Elements...
              </p>
            ) : (
              services.map((s, i) => (
                <div className="course-card" key={s.id || i}>
                  <div className="card-top-icon">
                    <img
                      src={s.icon}
                      alt={s.title}
                      style={{ filter: orangeFilter }}
                    />
                  </div>
                  <h3 style={{ fontSize: "1rem" }}>{s.title}</h3>
                  <p style={{  margin: '6px 0', color: '#444',alignItems: 'flex-start' }}>{s.desc}</p>
                </div>
              ))
            )}
          </div>
        </section>

        {/* 4. Split Sections */}
        <section className="audit-flex-section">
          <div className="audit-flex">
            <div className="audit-text">
              <h3 className="section-title" style={{ fontSize: "1.8rem" }}>
                Start Ranking Higher with Professional<span> On-Page SEO</span>
              </h3>
              <p style={{  margin: '6px 0', color: '#444',alignItems: 'flex-start' }}>
                On-page SEO isn't a one-time task—it's an ongoing process. With
                our local expertise in Lucknow and technical know-how, we
                provide consistent optimization that drives long-term results.
                From blog posts to product pages, every element of your site
                gets optimized for search engines and users alike. Let us help
                you convert traffic into sales with smart, scalable SEO
                solutions.
              </p>
              <a
                href="https://wa.me/917289040680?text=Hi A1webservice,%0A%0AI am interested Service:- ,%0A%0APlease share seat availability and details.%0A%0A My Details: %0A- Name: %0A- Qualification: %0A- Location:"
                className="contact-btn-full"
                style={{
                  display: "inline-block",
                  width: "auto",
                  padding: "12px 25px",
                  textDecoration: "none",
                }}
                target="_blank"
                rel="noreferrer"
              >
                <FaWhatsapp />7289040680
              </a>
            </div>
            <div className="audit-checklist-img">
              <img src={on1} alt="On-Page Strategy" />
            </div>
          </div>
        </section>

        {/* 5. Reverse Split Section */}
        <section
          className="audit-flex-section"
          style={{
            background: "#f9f9f9",
            padding: "40px 20px",
            borderRadius: "15px",
          }}
        >
          <div className="audit-flex reverse-flex">
            <div className="audit-text">
              <h3 className="section-title" style={{ fontSize: "1.8rem" }}>
                Our SEO Agency<span> in Lucknow Can Help</span> 
              </h3>
              <p style={{  margin: '6px 0', color: '#444',alignItems: 'flex-start' }}>
                At our Lucknow-based SEO agency, we specialize in customized
                on-page SEO strategies tailored to your industry. We conduct
                thorough audits, optimize content, enhance site speed, and
                implement schema markup where needed. Our team stays updated
                with the latest Google algorithm changes to keep your site
                competitive. Whether you're a startup or an established brand,
                we help you climb search rankings effectively.
              </p>
              <a
                href="https://wa.me/917289040680?text=Hi A1webservice,%0A%0AI am interested Service:- ,%0A%0APlease share seat availability and details.%0A%0A My Details: %0A- Name: %0A- Qualification: %0A- Location:"
                className="contact-btn-full"
                style={{
                  display: "inline-block",
                  width: "auto",
                  padding: "12px 25px",
                  textDecoration: "none",
                }}
                target="_blank"
                rel="noreferrer"
              >
                <FaWhatsapp />7289040680
              </a>
            </div>
            <div className="audit-checklist-img">
              <img src={on2} alt="Revenue Growth" />
            </div>
          </div>
        </section>

        {/* 6. Key Elements Section */}
        <section className="audit-flex-section">
          <div className="audit-flex">
            <div className="audit-text">
              <h3 className="section-title" style={{ fontSize: "1.8rem" }}>
                Key Elements of Effective<span> On-Page SEO</span> 
              </h3>
              <p style={{  margin: '6px 0', color: '#444',alignItems: 'flex-start' }}>
                Successful on-page SEO relies on several core elements: keyword
                optimization, title and meta tags, header usage (H1, H2),
                internal linking, and mobile-friendliness. High-quality content
                that answers user intent is essential. Search engines favor
                well-structured pages with fast loading speeds and clean code. A
                professional SEO agency in Lucknow ensures all these boxes are
                checked for better ranking.
              </p>
              <a
                href="https://wa.me/917289040680?text=Hi A1webservice,%0A%0AI am interested Service:- ,%0A%0APlease share seat availability and details.%0A%0A My Details: %0A- Name: %0A- Qualification: %0A- Location:"
                className="contact-btn-full"
                style={{
                  display: "inline-block",
                  width: "auto",
                  padding: "12px 25px",
                  textDecoration: "none",
                }}
                target="_blank"
                rel="noreferrer"
              >
                <FaWhatsapp />7289040680
              </a>
            </div>
            <div className="audit-checklist-img">
              <img src={on3} alt="SEO Comparison" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default OnPageSEO;
