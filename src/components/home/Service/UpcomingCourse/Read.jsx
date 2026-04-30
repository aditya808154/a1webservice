import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Read.css";

// Firebase Imports
import { db } from "../../../../firebase"; 
import { doc, getDoc } from "firebase/firestore";

const Read = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSingleData = async () => {
      try {
        setLoading(true);
        const docRef = doc(db, "upcoming_content", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setData(docSnap.data());
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching document:", error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchSingleData();
    }
  }, [id]);

  if (loading) {
    return (
      <div style={{ textAlign: 'center', padding: '150px 20px' }}>
        <div className="loader">Loading...</div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="not-found" style={{ textAlign: 'center', padding: '150px 20px' }}>
        <h2 style={{color: '#001f3f'}}>Data Not Found!</h2>
        <p>Bhai, lagta hai galat link par aa gaye ho.</p>
      </div>
    );
  }

  return (
    <div className="read-main-wrapper">
      <div className="read-container">
        
        {/* Left Side: Main Content Card */}
        <div className="read-content-card">
          
          <div className="read-hero-section">
            {/* SEO FIX: Descriptive Alt Tag */}
            <img src={data.image} alt={`A1 Web Service - ${data.title}`} className="read-hero-image" />
          </div>

          <span className="read-cat-tag">
            {data.sectionType === "upcomingCourses" ? "LangNation Course" : "LangNation Event"}
          </span>
          
          {/* Main Page Heading */}
          <h1 className="read-title">{data.title}</h1>

          {/* SEO FIX: Changed p to h2 for better heading hierarchy & flow */}
          {data.desc && (
            <h2 className="read-short-desc" style={{ 
              fontSize: '1.2rem', 
              color: '#64748b', 
              fontStyle: 'italic', 
              marginBottom: '20px',
              lineHeight: '1.5',
              borderLeft: '4px solid #ff8c00',
              paddingLeft: '15px',
              fontWeight: 'normal'
            }}>
              {data.desc}
            </h2>
          )}

          <div className="read-meta-row">
            <span><i className="fas fa-signal"></i> {data.features.level}</span>
            <span><i className="fas fa-globe"></i> {data.features.language}</span>
            <span><i className="fas fa-certificate"></i> {data.features.award}</span>
          </div>

          <div className="read-text-body">
            {/* Hierarchy Level 3 */}
            <h3>Course Overview & Details</h3>
            <p className="read-desc" style={{  margin: '6px 0', color: '#444', display: 'flex', alignItems: 'flex-start' }}>{data.fullDescription}</p>

            <div className="info-notes-container" style={{display: 'flex', flexDirection: 'column', gap: '15px', margin: '30px 0'}}>
              {data.certificateNote && (
                <div className="info-note-box" style={{background: '#fff4e6', borderLeft: '5px solid #ff8c00', padding: '20px', borderRadius: '8px'}}>
                  {/* Hierarchy Level 4 */}
                  <h4 style={{margin: '0 0 10px 0', color: '#e67e22'}}><i className="fas fa-award"></i> Certification Note</h4>
                  <p style={{margin: 0, fontSize: '0.95rem', color: '#555'}}>{data.certificateNote}</p>
                </div>
              )}
              
              {data.levelNote && (
                <div className="info-note-box" style={{background: '#eef2ff', borderLeft: '5px solid #4f46e5', padding: '20px', borderRadius: '8px'}}>
                  <h4 style={{margin: '0 0 10px 0', color: '#4338ca'}}><i className="fas fa-info-circle"></i> Proficiency Level</h4>
                  <p style={{margin: 0, fontSize: '0.95rem', color: '#555'}}>{data.levelNote}</p>
                </div>
              )}
            </div>

            {data.atAGlance && data.atAGlance.length > 0 && (
              <div className="glance-box" style={{background: '#f8fafc', padding: '25px', borderRadius: '15px', border: '1px solid #e2e8f0'}}>
                <h3 style={{marginTop: 0}}>At a Glance</h3>
                <ul style={{listStyle: 'none', padding: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '10px'}}>
                  {data.atAGlance.map((point, index) => (
                    <li key={index} style={{color: '#475569', fontSize: '0.95rem'}}>
                      <i className="fas fa-check-circle" style={{color: '#001f3f', marginRight: '10px'}}></i> {point}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {data.classActivities && data.classActivities.length > 0 && (
              <div className="activities-block" style={{marginTop: "40px"}}>
                <h3>Learning Activities</h3>
                <div className="activities-grid" style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
                  {data.classActivities.map((act, i) => (
                    <div key={i} className="activity-item">
                      {/* Changed h5 to h4 for better flow */}
                      <h4 style={{margin: '0 0 5px 0', fontSize: '1.1rem', color: '#001f3f'}}>{act.title}</h4>
                      <p style={{margin: 0, color: '#64748b', fontSize: '0.95rem'}}>{act.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Side: Sidebar */}
        <div className="read-sidebar">
          <div className="sidebar-box">
            {/* Sidebar title as H4 to avoid conflict with main body */}
            <h4 style={{fontSize: '1.2rem', marginBottom: '15px'}}>Course Features</h4>
            <div className="feature-item-row">
              <span><i className="far fa-clock"></i> Duration</span> <strong>{data.features.duration}</strong>
            </div>
            <div className="feature-item-row">
              <span><i className="far fa-file-alt"></i> Lessons</span> <strong>{data.features.lessons}</strong>
            </div>
            <div className="feature-item-row">
              <span><i className="fas fa-tasks"></i> Quiz</span> <strong>{data.features.quiz}</strong>
            </div>
            <div className="feature-item-row">
              <span><i className="fas fa-language"></i> Language</span> <strong>{data.features.language}</strong>
            </div>

            <div className="price-box-sidebar">
               <span style={{display: 'block', fontSize: '0.8rem', color: '#666', marginBottom: '5px'}}>Total Fee</span>
               <span className="price-text">₹ {data.features.price}</span>
            </div>
            
            <a 
              href={`https://wa.me/917289040680?text=Hi, I am interested in ${data.title}`} 
              target="_blank" 
              rel="noreferrer"
              style={{textDecoration: 'none'}}
            >
              <button className="contact-btn-full">ENROLL NOW</button>
            </a>
          </div>

          <div className="sidebar-box">
            <h4>Need Help?</h4>
            <p style={{fontSize: "0.9rem", color: "#666", lineHeight: '1.5'}}>Questions about batch timings or curriculum?</p>
            <div style={{marginTop: "15px", fontWeight: "700", color: "#111111", fontSize: '1.1rem'}}>
              <i className="fab fa-whatsapp"></i> +91 7289040680
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Read;