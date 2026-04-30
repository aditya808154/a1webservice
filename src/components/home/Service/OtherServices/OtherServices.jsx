import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Firebase Import
import { db } from "../../../../firebase";
import { collection, getDocs, query } from "firebase/firestore";

// Swiper Styles
import "swiper/css";
import "swiper/css/pagination";

const OtherServices = () => {
  const [mainServices, setMainServices] = useState([]);
  const [loading, setLoading] = useState(true);

  const whatsappNumber = "917289040680";
  const orangeFilter =
    "invert(58%) sepia(91%) saturate(2200%) hue-rotate(350deg) brightness(101%) contrast(101%)";

  useEffect(() => {
    const fetchServicesData = async () => {
      try {
        const q = query(collection(db, "main_services"));
        const querySnapshot = await getDocs(q);
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        const sortedData = data.sort((a, b) => {
          return (a.createdAt?.seconds || 0) - (b.createdAt?.seconds || 0);
        });

        setMainServices(sortedData);
      } catch (err) {
        console.error("Error fetching main services:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchServicesData();
  }, []);

  // Shared Style from SoftwareDevelopment
  const cardStyle = {
    border: "1px solid #eee",
    padding: "25px",
    borderRadius: "15px",
    textAlign: "center",
    background: "#fff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
    minHeight: "450px",
    boxSizing: "border-box",
    boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
  };

  if (loading)
    return (
      <div
        className="loading-text"
        style={{ textAlign: "center", padding: "50px" }}
      >
        Loading Services...
      </div>
    );

  return (
    <div className="courses-wrapper" style={{ background: "#001f3f" }}>
      <div
        className="about-content-wrapper"
        style={{ maxWidth: "1300px", margin: "0 auto", padding: "60px 20px" }}
      >
        <section className="course-main-section" style={{ marginBottom: "30px" }}>
          {/* SEO FIX: Section title changed from h3 to h2 for correct hierarchy */}
          <h2 className="section-title" style={{ fontSize: "1.8rem", textAlign: 'center', marginBottom: '20px', fontWeight: '900' }}>
            <span style={{ color: "#fff" }}>Our Core </span>
            <span>Services</span>
          </h2>

          <div className="course-slider-container">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={25}
              slidesPerView={1}
              loop={mainServices.length > 3}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="course-swiper"
            >
              {mainServices.map((service, index) => (
                <SwiperSlide key={service.id || index} style={{ height: "auto" }}>
                  <div className="standard-card" style={cardStyle}>
                    <div>
                      <div className="card-icon-box">
                        <img
                          src={
                            service.image ||
                            "https://www.svgrepo.com/show/77406/internet.svg"
                          }
                          alt={service.title}
                          style={{
                            filter: orangeFilter,
                            width: "55px",
                            height: "55px",
                            objectFit: "contain",
                            marginBottom: "15px",
                          }}
                        />
                      </div>
                      {/* SEO OK: h3 is correct here as it's inside h2 section */}
                      <h3 style={{ fontSize: "1.2rem", color: "#0a1d37", marginBottom: '5px', fontWeight: '600' }}>
                        {service.title}
                      </h3>

                      <div
                        className="features-container"
                        style={{ textAlign: "left", marginTop: "15px" }}
                      >
                        {(service.features || service.desc || "")
                          .split(/[\n,]+/)
                          .filter((f) => f.trim() !== "")
                          .map((feature, i) => (
                            <p
                              key={i}
                              style={{
                                margin: "6px 0",
                                color: "#444",
                                display: "flex",
                                alignItems: "flex-start",
                              }}
                            >
                              <span
                                style={{
                                  color: "#e67e22",
                                  marginRight: "10px",
                                  fontWeight: "bold",
                                }}
                              >
                                ✓
                              </span>
                              {feature.trim()}
                            </p>
                          ))}
                      </div>
                    </div>

                    <div
                      className="card-footer"
                      style={{
                        marginTop: "20px",
                        borderTop: "1px solid #f5f5f5",
                        paddingTop: "15px",
                      }}
                    >
                      <a
                        href={`https://wa.me/${whatsappNumber}?text=Hi A1webservice,%0A%0AI am interested in: ${service.title} %0A%0APlease share seat availability and details.%0A%0A My Details: %0A- Name: %0A- Qualification: %0A- Location:`}
                        target="_blank"
                        rel="noreferrer"
                        style={{ textDecoration: "none" }}
                      >
                        <button className="contact-btn-full">
                          Ask For Price &rarr;
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

export default OtherServices;