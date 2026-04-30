import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./UpcomingCourse.css";

// Firebase Imports
import { db } from "../../../../firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

const UpcomingCourse = () => {
  const navigate = useNavigate();

  const [courses, setCourses] = useState([]);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        setLoading(true);
        const contentRef = collection(db, "upcoming_content");

        const qCourses = query(
          contentRef,
          where("sectionType", "==", "upcomingCourses"),
        );
        const snapCourses = await getDocs(qCourses);
        const coursesList = snapCourses.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setCourses(coursesList);

        const qEvents = query(
          contentRef,
          where("sectionType", "==", "upcomingEvents"),
        );
        const snapEvents = await getDocs(qEvents);
        const eventsList = snapEvents.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setEvents(eventsList);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, []);

  const scrollerCourses = [...courses, ...courses];
  const scrollerEvents = [...events, ...events];

  if (loading) {
    return (
      <div style={{ textAlign: "center", padding: "50px" }}>
        Loading Content...
      </div>
    );
  }

  return (
    <div className="courses-wrapper" style={{ background: "#001f3f" }}>
      <div
        className="about-content-wrapper"
        style={{ maxWidth: "1300px", margin: "0 auto", padding: "40px 20px" }}
      >
        <div className="upcoming-main-container">
          {/* LEFT: COURSES SECTION */}
          <div className="upcoming-column">
            <div style={{ textAlign: "center", marginBottom: "40px" }}>
              {/* SEO FIX: Section ka main title H2 hona chahiye */}
              <h2
                className="section-title"
                style={{
                  fontSize: "1.8rem",
                  textAlign: "center",
                  marginBottom: "20px",
                  fontWeight: '900'
                  
                }}
              >
                <span style={{ color: "#fff" }}>Upcoming </span>
                <span>Courses</span>
              </h2>
            </div>

            <div className="scroll-wrapper-box">
              <div className="scroll-container">
                <div className="scroll-content">
                  {scrollerCourses.length > 0 ? (
                    scrollerCourses.map((item, index) => (
                      <div key={index} className="horizontal-info-card">
                        <div className="info-img-box">
                          <span className="type-tag course-tag">COURSE</span>
                          <img
                            src={item.image}
                            alt={item.title}
                            className="small-thumb"
                          />
                        </div>
                        <div className="info-text">
                          {/* SEO FIX: Changed h4 to h3 */}
                          <h3 style={{ fontSize: "1.2rem", color: "#0a1d37", marginBottom: '5px', fontWeight: '600' }} >
                            {item.title}
                          </h3>
                          <span className="info-date" style={{ color: "gray" }}>
                            <i className="far fa-clock"></i>{" "}
                            {item.features?.duration || "Flexible"}
                          </span>
                          <p style={{  margin: '6px 0', color: '#444', display: 'flex', alignItems: 'flex-start' }}>{item.desc}</p>
                          <Link
                            to={`/read/${item.id}`}
                            className="read-more-link"
                          >
                            Read More →
                          </Link>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p style={{ padding: "20px", color: "#666" }}>
                      No Courses Available
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: EVENTS SECTION */}
          <div className="upcoming-column">
            <div style={{ textAlign: "center", marginBottom: "40px" }}>
              {/* SEO FIX: Section ka main title H2 hona chahiye */}
              <h2
                className="section-title"
                style={{
                  fontSize: "1.8rem",
                  textAlign: "center",
                  marginBottom: "20px",
                  fontWeight: '900'
                }}
              >
                <span style={{ color: "#fff" }}>Upcoming </span>
                <span>Events</span>
              </h2>
            </div>

            <div className="scroll-wrapper-box">
              <div className="scroll-container">
                <div className="scroll-content">
                  {scrollerEvents.length > 0 ? (
                    scrollerEvents.map((item, index) => (
                      <div key={index} className="horizontal-info-card">
                        <div className="info-img-box">
                          <span className="type-tag event-tag">EVENT</span>
                          <img
                            src={item.image}
                            alt={item.title}
                            className="small-thumb"
                          />
                        </div>
                        <div className="info-text">
                          {/* SEO FIX: Changed h4 to h3 */}
                          <h3
                            style={{
                              color: "#001f3f",
                              fontSize: "1.1rem",
                              margin: "0 0 5px 0",
                            }}
                          >
                            {item.title}
                          </h3>
                          <span className="info-date" style={{ color: "gray" }}>
                            <i className="far fa-clock"></i>{" "}
                            {item.features?.duration || "Upcoming"}
                          </span>
                          <p style={{ color: "#111111" }}>{item.desc}</p>
                          <Link
                            to={`/read/${item.id}`}
                            className="read-more-link"
                          >
                            Read More →
                          </Link>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p style={{ padding: "20px", color: "#666" }}>
                      No Events Available
                    </p>
                  )}
                </div>
              </div>
            </div>
            <div className="view-all-container-fixed">
              <button
                className="view-all-btn"
                onClick={() => navigate("/view-all")}
              >
                VIEW ALL
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingCourse;
