import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Firebase Import - Using your WebHome config
import { db } from "../../../../firebase";
import { collection, getDocs, query } from "firebase/firestore";

// Swiper Styles
import "swiper/css";
import "swiper/css/pagination";

const SoftwareDevelopment = () => {
  const [packagesData, setPackagesData] = useState([]);
  const [loading, setLoading] = useState(true);

  const whatsappNumber = "917289040680";
  const orangeFilter =
    "invert(58%) sepia(91%) saturate(2200%) hue-rotate(350deg) brightness(101%) contrast(101%)";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const q = query(collection(db, "web_design_packages"));
        const querySnapshot = await getDocs(q);
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        const sortedData = data.sort((a, b) => {
          return (a.createdAt?.seconds || 0) - (b.createdAt?.seconds || 0);
        });

        setPackagesData(sortedData);
      } catch (err) {
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

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
          <SwiperSlide key={item.id || index} style={{ height: "auto" }}>
            <div className="standard-card" style={cardStyle}>
              <div>
                <div className="card-icon-box">
                  <img
                    src={item.image || "https://www.svgrepo.com/show/479214/seo-3.svg"}
                    alt={item.title}
                    style={{
                      filter: orangeFilter,
                      width: "55px",
                      height: "55px",
                      objectFit: "contain",
                      marginBottom: "15px",
                    }}
                  />
                </div>
                {/* SEO FIX: Card titles should be H3 (since Section is H2) */}
                <h3
                  style={{
                    fontSize: "1.1rem",
                    color: "#0a1d37",
                    marginBottom: "5px",
                    fontWeight: "600"
                  }}
                >
                  {item.title}
                </h3>
                {/* SEO FIX: Use 'p' or 'span' for meta info like duration, not H tags */}
                <p
                  style={{
                    fontSize: "0.8rem",
                    color: "#666",
                    marginBottom: "15px",
                    fontWeight: "500",
                  }}
                >
                  {item.duration}
                </p>

                <div
                  className="features-container"
                  style={{ textAlign: "left", marginTop: "10px" }}
                >
                  {item.features &&
                    item.features
                      .split(/[\n,]+/)
                      .filter((feature) => feature.trim() !== "")
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
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: "20px",
                  borderTop: "1px solid #f5f5f5",
                  paddingTop: "15px",
                }}
              >
                <span
                  className="price-badge"
                  style={{
                    color: "#ffffff",
                    fontSize: "1rem",
                  }}
                >
                  ₹ {item.price}
                </span>
                <a
                  href={`https://wa.me/${whatsappNumber}?text=Hi A1webservice,%0A%0AI am interested in: ${item.title}`}
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <button
                    className="contact-btn-small"
                    style={{
                      cursor: "pointer",
                      background: "#001f3f",
                      color: "#fff",
                      border: "none",
                      padding: "7px 9px",
                      borderRadius: "8px",
                      fontSize: "1rem",
                    }}
                  >
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

  if (loading)
    return (
      <div className="loading-text" style={{ textAlign: "center", padding: "50px" }}>
        Loading...
      </div>
    );

  return (
    <div
      className="about-content-wrapper"
      style={{ maxWidth: "1300px", margin: "0 auto", padding: "60px 20px" }}
    >
      <section className="course-main-section" style={{ marginBottom: "30px" }}>
        {/* SEO FIX: Section headings should be H2 */}
        <h2 className="section-title" style={{ fontSize: "1.8rem", textAlign: 'center', marginBottom: '20px', fontWeight: '900' }} >
          Web Design <span>Packages</span>
        </h2>
        {packagesData.length > 0 ? (
          renderSwiperGrid(packagesData)
        ) : (
          <p style={{ textAlign: "center" }}>No packages available.</p>
        )}
      </section>
    </div>
  );
};

export default SoftwareDevelopment;