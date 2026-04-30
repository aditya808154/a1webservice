import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'; 
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

// Firebase Imports
import { db } from "../../../../firebase"; 
import { collection, getDocs } from "firebase/firestore";

// Swiper styles
import 'swiper/css';
import './Testimonials.css';

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "testimonials_data"));
        const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        
        // Sorting Logic: Latest First
        const sortedData = data.sort((a, b) => (b.createdAt?.seconds || 0) - (a.createdAt?.seconds || 0));
        
        setReviews(sortedData);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  if (loading) return null;

  return (
    <div className="courses-wrapper" style={{background:"#001f3f"}}>
      
        {/* SEO FIX: Section Header changed to H2 to maintain hierarchy flow */}
        <div style={{ textAlign: 'center', marginBottom: '30px', paddingTop: '40px' }}>
          <h2 className="section-title" style={{ fontSize: "1.8rem", textAlign: 'center', marginBottom: '20px', fontWeight: '900' }}>
            <span style={{color:"#ffffff"}}>What Our</span> <span>Students Say</span>
          </h2>
        </div>

        <div className="testi-container" style={{ width: '90%', margin: '0 auto' }}>
          {reviews.length > 0 && (
            <Swiper
              modules={[Autoplay]}
              spaceBetween={20} 
              slidesPerView={1}
              loop={reviews.length > 3}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              breakpoints={{
                768: { slidesPerView: 2, spaceBetween: 30 },
                1024: { slidesPerView: 3, spaceBetween: 30 },
              }}
              className="mySwiper"
              style={{ paddingBottom: '30px' }} 
            >
              {reviews.map((review) => (
                <SwiperSlide key={review.id} className="testi-slide">
                  <div className="testi-card" style={{ height: '100%', minHeight: '300px' }}>
                    
                    <div className="testi-top-info" style={{ 
                        display: 'flex', 
                        flexWrap: 'wrap', 
                        gap: '10px' 
                    }}>
                      <div className="student-profile" style={{ flex: '1' }}>
                        <img 
                          src={review.image || "https://www.svgrepo.com/show/513320/man.svg"} 
                          alt={review.name} 
                          className="testi-avatar" 
                        />
                        <div className="name-box">
                          {/* SEO FIX: Student Name changed to H3 (Sequence: H2 -> H3) */}
                          <h3 style={{ fontSize: '1rem', margin: '0', color: 'white' }}>{review.name}</h3>
                          <span style={{ fontSize: '0.8rem' }}>{review.course}</span>
                        </div>
                      </div>
                      <div className="stars" style={{ flexShrink: 0 }}>
                        {[...Array(Number(review.rating) || 5)].map((_, i) => <FaStar key={i} />)}
                      </div>
                    </div>

                    <div className="testi-bottom-content">
                      <FaQuoteLeft className="quote-icon" />
                      <p className="testi-text" style={{ 
                        textAlign: 'left' 
                      }}>
                        {review.text}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
    </div>
  );
};

export default Testimonials;