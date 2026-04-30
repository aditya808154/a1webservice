import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ViewAll.css";

// Firebase Imports
import { db } from "../../../../firebase"; 
import { collection, getDocs } from "firebase/firestore";

const ViewAll = () => {
  // --- Firebase Data States ---
  const [allItems, setAllItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        setLoading(true);
        const querySnapshot = await getDocs(collection(db, "upcoming_content"));
        const data = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        
        setAllItems(data.sort((a, b) => (b.createdAt?.seconds || 0) - (a.createdAt?.seconds || 0)));
      } catch (error) {
        console.error("Error fetching all items:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllData();
  }, []);

  if (loading) {
    return (
      <div style={{ textAlign: 'center', padding: '100px 20px', minHeight: '60vh' }}>
        <div className="loader">Loading Content...</div>
      </div>
    );
  }

  return (
    <div className="about-page-container">
      <div className="about-hero">
        {/* SEO FIX: H1 ko H2 kiya kyunki index.html/Hero mein pehle se H1 hai */}
        <h2 style={{ fontSize: "2.5rem", fontWeight: "800", color: "#fff" }}>
          Upcoming <span style={{color: "#ff8c00"}}>Courses & </span>Workshops
        </h2>
        <p>Master high-demand digital skills like SEO, Web Design, and Ads with our expert-led upcoming training sessions at A1Webservice.</p>
      </div>
      
      <div
        className="about-content-wrapper"
        style={{
          maxWidth: "1300px",
          margin: "0 auto",
          padding: "60px 20px",
        }}
      >
        
        <div className="title-section-wrapper">
          {/* SEO FIX: Section title ko H3 rakha hai hierarchy ke liye */}
          <h3 className="main-page-title">All Courses <span style={{color:"#ff8c00"}}>& Events</span></h3>
          <div className="title-accent-line"></div>
        </div>

        <div className="items-grid-container">
          {allItems.length > 0 ? (
            allItems.map((item) => (
              <div key={item.id} className="course-event-card">
                
                {/* Image Box with Dynamic Tag */}
                <div className="card-image-box" style={{ position: 'relative' }}>
                  <img src={item.image} alt={item.title} />
                  
                  <span style={{
                    position: 'absolute',
                    top: '15px',
                    left: '15px',
                    background: '#001f3f',
                    color: '#fff',
                    padding: '5px 12px',
                    borderRadius: '5px',
                    fontSize: '0.75rem',
                    fontWeight: 'bold',
                    textTransform: 'uppercase',
                    boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
                  }}>
                    {item.sectionType === "upcomingCourses" ? "Course" : "Event"}
                  </span>
                </div>

                <div className="card-info-box">
                  <div className="status-tag">
                    <i className="fas fa-calendar-check"></i> UPCOMING
                  </div>

                  {/* SEO FIX: Card title ko h3 ya h4 rakhein */}
                  <h4 className="card-main-title" style={{ fontSize: "1.2rem", color: "#0a1d37", marginBottom: '5px', fontWeight: '600' }}>
                    {item.title}
                  </h4>

                  <div className="card-quick-meta">
                    <span>
                      <i className="far fa-clock"></i>{" "}
                      {item.features?.duration || "8 Weeks"}
                    </span>
                    <span>
                      <i className="fas fa-map-marker-alt"></i> Online
                    </span>
                  </div>

                  <p style={{  margin: '6px 0', color: '#fff', display: 'flex', alignItems: 'flex-start' }}>
                    {item.desc || "Good news for A1Webservice Students, who want to improve their skills."}
                  </p>

                  <Link to={`/read/${item.id}`} className="card-read-more">
                    READ MORE →
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <div style={{ textAlign: 'center', width: '100%', padding: '50px' }}>
               <p>Abhi koi course ya event available nahi hai.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ViewAll;