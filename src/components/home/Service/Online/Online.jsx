import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Firebase Import
import { db } from "../../../../firebase";
import { collection, getDocs } from "firebase/firestore";

// Swiper Styles
import "swiper/css";
import "swiper/css/pagination";

const Online = () => {
  const [coursesData, setCoursesData] = useState([]);
  const [loading, setLoading] = useState(true);

  const whatsappNumber = "917289040680";
  const orangeFilter =
    "invert(58%) sepia(91%) saturate(2200%) hue-rotate(350deg) brightness(101%) contrast(101%)";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const q = collection(db, "courses_data");
        const querySnapshot = await getDocs(q);
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        const sortedData = data.sort((a, b) => {
          const timeA = a.createdAt?.seconds || 0;
          const timeB = b.createdAt?.seconds || 0;
          return timeB - timeA;
        });

        setCoursesData(sortedData);
      } catch (err) {
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const courses = coursesData.filter((item) => item.sectionType === "courses");
  const services = coursesData.filter((item) => item.sectionType === "courses2");

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

  const renderSwiperGrid = (data) => (
    <div className="course-slider-container">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={25}
        slidesPerView={1}
        loop={data.length > 3}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="course-swiper"
        
      >
        {data.map((item, index) => (
          <SwiperSlide key={item.id || index} style={{ height: 'auto' }}>
            <div className="standard-card" style={cardStyle}>
              <div>
                <div className="card-icon-box">
                  <img
                    src={item.image || "https://www.svgrepo.com/show/479214/seo-3.svg"}
                    alt={item.title}
                    style={{ filter: orangeFilter, width: '55px', height: '55px', objectFit: 'contain', marginBottom: '15px' }}
                  />
                </div>
                {/* SEO FIX: Card titles are now H4 to maintain proper hierarchy H1 > H2 > H3 > H4 */}
                <h4 style={{ fontSize: "1.1rem", color: "#0a1d37", marginBottom: '5px' }}>{item.title}</h4>
                <p style={{ fontSize: "0.8rem", color: '#666', marginBottom: '15px', fontWeight: '500' }}>{item.duration}</p>

                <div className="features-container" style={{ textAlign: "left", marginTop: '10px' }}>
                  {item.features && item.features.split(",").map((feature, i) => (
                    <p key={i} style={{  margin: '6px 0', color: '#444', display: 'flex', alignItems: 'flex-start' }}>
                      <span style={{ color: '#e67e22', marginRight: '10px', fontWeight: 'bold' }}>✓</span>
                      {feature.trim()}
                    </p>
                  ))}
                </div>
              </div>

              <div className="card-footer" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px', borderTop: '1px solid #f5f5f5', paddingTop: '15px' }}>
                <span className="price-badge" style={{color: '#fff', fontSize: '1rem' }}>₹ {item.price}</span>
                <a
                  href={`https://wa.me/${whatsappNumber}?text=Hi A1webservice,%0A%0AI am interested in: ${item.title} %0A%0APlease share seat availability and details.%0A%0A My Details: %0A- Name: %0A- Qualification: %0A- Location:`}
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: 'none' }}
                >
                  <button className="contact-btn-small" style={{ 
                    cursor: 'pointer', 
                    background: '#001f3f', 
                    color: '#fff', 
                    border: 'none', 
                    padding: '7px 9px', 
                    borderRadius: '8px',
                    fontSize:"1rem"
                  }}>
                    Demo &rarr;
                  </button>
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );

  if (loading) return <div className="loading-text" style={{ textAlign: 'center', padding: '50px' }}>Loading...</div>;

  return (
    <div className="about-content-wrapper" style={{ maxWidth: '1300px', margin: '0 auto', padding: '60px 20px'}}>
      
      {/* SECTION HEADER: Is page ka sabse bada heading H2 hona chahiye (kyunki H1 Hero mein hai) */}
      <section className="section-header">
          <h2 style={{ marginTop: "20px", fontSize: "1.8rem" }}>
            A1webservice-Best <span>Digital Marketing Agency </span>in Lucknow
          </h2>
          <p style={{  margin: '6px 0', color: '#444', display: 'flex', alignItems: 'flex-start' }}>
            A1webservice is a team of experienced IT professionals, delivering
            complete digital marketing and IT solutions in Lucknow and Delhi
            since 2015. We specialize in SEO, SMM, SMO, Google Ads (PPC), Email
            Marketing, web development, Software Development, Application
            Development and more—tailored to your unique business needs. With a
            strong focus on quality, innovation, and results, we’ve helped
            countless brands grow their online presence. Trust our dedicated
            team to take your digital journey forward with smart, effective
            strategies.
          </p>
        </section>
      
      {/* SECTION 1: Digital Marketing Courses - Using H3 */}
      <section className="course-main-section" style={{ marginBottom: '30px', marginTop: '40px' }}>
        <h2 className="section-title" style={{ fontSize: "1.8rem", textAlign: 'center', marginBottom: '20px', fontWeight: '900' }}>
          Digital Marketing <span>Course</span>
        </h2>
        {courses.length > 0 ? renderSwiperGrid(courses) : <p style={{ textAlign: 'center' }}>No courses available.</p>}
      </section>

      {/* SECTION 2: Digital Marketing Services - Using H3 */}
      <section className="services-section" style={{ marginTop: '40px' }}>
        <h2 className="section-title" style={{ fontSize: "1.8rem", textAlign: 'center', marginBottom: '20px', fontWeight: '900' }}>
          Digital Marketing <span>Services</span>
        </h2>
        {services.length > 0 ? renderSwiperGrid(services) : <p style={{ textAlign: 'center' }}>No services available.</p>}
      </section>

    </div>
  );
};

export default Online;