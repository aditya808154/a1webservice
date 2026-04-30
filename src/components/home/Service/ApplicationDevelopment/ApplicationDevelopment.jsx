import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

// Firebase Import
import { db } from "../../../../firebase"; 
import { collection, getDocs, query } from "firebase/firestore";

// Swiper Styles
import 'swiper/css';
import 'swiper/css/pagination';

const ApplicationDevelopment = () => {
  const [softwareSolutions, setSoftwareSolutions] = useState([]);
  const [loading, setLoading] = useState(true);

  const whatsappNumber = "917289040680";
  const orangeFilter = "invert(58%) sepia(91%) saturate(2200%) hue-rotate(350deg) brightness(101%) contrast(101%)";

  useEffect(() => {
    const fetchSoftwareData = async () => {
      try {
        const q = query(collection(db, "software_solutions"));
        const querySnapshot = await getDocs(q);
        const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

        const sortedData = data.sort((a, b) => {
          return (a.createdAt?.seconds || 0) - (b.createdAt?.seconds || 0);
        });

        setSoftwareSolutions(sortedData);
      } catch (err) {
        console.error("Error fetching software data:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchSoftwareData();
  }, []);

  const cardStyle = {
    border: '1px solid #eee',
    padding: '25px',
    borderRadius: '15px',
    textAlign: 'center',
    background: '#fff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%', 
    minHeight: '450px',
    boxSizing: 'border-box',
    boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
  };

  if (loading) return <div className="loading-text" style={{ textAlign: 'center', padding: '50px' }}>Loading Software Solutions...</div>;

  return (
    <div className="courses-wrapper" style={{ background: "#001f3f" }}>
      <div className="about-content-wrapper" style={{ maxWidth: '1300px', margin: '0 auto', padding: '60px 20px'}}>
        <section className="course-main-section" style={{ marginBottom: '30px' }}>
          
          {/* SEO FIX: Is heading ko h2 kiya gaya hai taaki H1 -> H2 ka sequence bana rahe */}
          <h2 className="section-title" style={{ fontSize: "1.8rem", textAlign: 'center', marginBottom: '20px', fontWeight: '900' }}>
            <span style={{color:"#fff"}}>Custom Software</span> <span style={{color:"#e67e22"}}>Solutions</span>
          </h2>

          <div className="course-slider-container">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={25}
              slidesPerView={1}
              loop={softwareSolutions.length > 3}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="course-swiper"
            >
              {softwareSolutions.map((item, index) => (
                <SwiperSlide key={item.id || index} style={{ height: 'auto' }}>
                  <div className="standard-card" style={cardStyle}>
                    <div>
                      <div className="card-icon-box">
                        <img
                          src={item.image || "https://www.svgrepo.com/show/226720/collaboration.svg"}
                          alt={item.title}
                          style={{ filter: orangeFilter, width: '55px', height: '55px', objectFit: 'contain', marginBottom: '15px' }}
                        />
                      </div>
                      
                      {/* SEO FIX: Card titles ko h3 rakha hai jo h2 ke andar logical flow banta hai */}
                      <h3 style={{ fontSize: "1.2rem", color: "#0a1d37", marginBottom: '5px', fontWeight: '600' }}>
                        {item.title}
                      </h3>
                      
                      <div className="features-container" style={{ textAlign: "left", marginTop: '15px' }}>
                        {item.features && 
                          item.features
                            .split(/[\n,]+/)
                            .filter(f => f.trim() !== "")
                            .map((feature, i) => (
                              <p key={i} style={{margin: '6px 0', color: '#444', display: 'flex', alignItems: 'flex-start' }}>
                                <span style={{ color: '#e67e22', marginRight: '10px', fontWeight: 'bold' }}>✓</span>
                                {feature.trim()}
                              </p>
                            ))
                        }
                      </div>
                    </div>

                    <div className="card-footer" style={{ marginTop: '20px', borderTop: '1px solid #f5f5f5', paddingTop: '15px' }}>
                      <a
                        href={`https://wa.me/${whatsappNumber}?text=Hi A1webservice,%0A%0AI am interested in: ${item.title} %0A%0APlease share seat availability and details.%0A%0A My Details: %0A- Name: %0A- Qualification: %0A- Location:`}
                        target="_blank"
                        rel="noreferrer"
                        style={{ textDecoration: 'none' }}
                      >
                        <button className="contact-btn-full" style={{
                          cursor: 'pointer',
                          background: '#001f3f',
                          color: '#fff',
                          border: 'none',
                          padding: '12px 20px',
                          borderRadius: '8px',
                          width: '100%',
                          fontWeight: '600'
                        }}>
                          Ask For Expert &rarr;
                        </button>
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ApplicationDevelopment;