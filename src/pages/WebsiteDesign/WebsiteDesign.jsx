import React, { useState, useEffect } from "react";
import "./WebsiteDesign.css";
import { motion } from "framer-motion";

// Firebase Imports
import { db } from "../../firebase";
import { collection, getDocs, query, orderBy } from "firebase/firestore";

const WebsiteDesign = () => {
  const [webDesignCards, setWebDesignCards] = useState([]);
  const [loading, setLoading] = useState(true);

  // Orange Filter for SVGs
  const orangeFilter =
    "invert(58%) sepia(91%) saturate(2200%) hue-rotate(350deg) brightness(101%) contrast(101%)";

  // Fetch Data from Firebase
  useEffect(() => {
    const fetchDesigns = async () => {
      setLoading(true);
      try {
        const q = query(
          collection(db, "web_design_cards"),
          orderBy("createdAt", "asc"),
        );
        const querySnapshot = await getDocs(q);
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setWebDesignCards(data);
      } catch (error) {
        console.error("Error fetching web designs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDesigns();
  }, []);

  if (loading) {
    return <div className="loading-spinner">Loading Creative Designs...</div>;
  }

  return (
    <div className="about-page-container">
      {/* 1. Hero Section - SEO optimized heading hierarchy */}
      <div className="about-hero">
        {/* Changed to h2 because index.html already has h1 */}
        <h2 style={{ fontSize: "2.5rem", fontWeight: "bold" }}>
          Professional  <span style={{color:"#ff851b"}}>Website Designer| Custom </span> Web Design
        </h2>
        <p>
          Professional Website Designer | Custom Web Design tailored to elevate
          your brand and drive results.
        </p>
      </div>

      <div className="about-content-wrapper">
        {/* 2. Agency Intro Section */}
        <section className="section-header">
          <h3 style={{ marginTop: "20px", fontSize: "2rem",color:"#0a1d37" }}>
            Hire Website Designer for <span>Custom & Cool Web Design</span> in
            Lucknow
          </h3>
          <p style={{  margin: '6px 0', color: '#444', alignItems: 'flex-start' }}>
            Looking to build a standout online presence? Hire a professional
            website designer in Lucknow for custom and cool web designs that
            reflect your brand perfectly. At A1webservice, we blend creativity
            with functionality to deliver websites that impress and convert.
          </p>
        </section>

        {/* 3. Design Grid Section */}
        <section className="course-main-section">
          {/* Changed to h3 for proper nesting under the intro section */}
          <h3 className="section-title" style={{ fontSize: "1.8rem", fontWeight: '900' }}>
            List of Different<span> Website Design @ A1webservice</span> 
          </h3>

          <div className="card-grid-1x2">
            {webDesignCards.map((item, index) => (
              <div
                key={item.id || index}
                className="course-card design-wide-card"
              >
                <div className="card-top-icon">
                  <img
                    src={item.img}
                    /* SEO Fix: Descriptive Alt tag for Google Image Search */
                    alt={`${item.title} - A1 Web Service Design`}
                    style={{
                      filter: orangeFilter,
                      width: "65px",
                      height: "65px",
                    }}
                  />
                </div>
                {/* SEO Fix: Card titles changed to h4 to avoid hierarchy gaps */}
                <h4 className="section-title" style={{ fontSize: "1.1rem", marginBottom: "10px" }}>
                  {item.title}
                </h4>
                <div className="feature-list">
                  <p style={{  margin: '6px 0', color: '#444', alignItems: 'flex-start' }}>{item.desc}</p>
                </div>
                <div className="card-action-row" style={{ marginTop: "auto" }}>
                  <a
                    href={`https://wa.me/917289040680?text=Hi, I am interested in ${item.title}.`}
                    target="_blank"
                    rel="noreferrer"
                    style={{ textDecoration: "none", width: "100%" }}
                  >
                    <button className="contact-btn-full">
                      Tap Here to Ask for Prices!
                    </button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default WebsiteDesign;