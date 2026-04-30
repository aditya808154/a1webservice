import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Software.css";

// Firebase Imports
import { db } from "../../firebase";
import { collection, getDocs, query, orderBy } from "firebase/firestore";

const Software = () => {
  const [softwareData, setSoftwareData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Orange filter for SVGs
  const orangeFilter =
    "invert(58%) sepia(91%) saturate(2200%) hue-rotate(350deg) brightness(101%) contrast(101%)";
  const whatsappNumber = "917289040680";

  // Fetch Data from Firebase
  useEffect(() => {
    const fetchSoftware = async () => {
      setLoading(true);
      try {
        const q = query(
          collection(db, "software_services"),
          orderBy("createdAt", "asc"),
        );
        const querySnapshot = await getDocs(q);
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setSoftwareData(data);
      } catch (error) {
        console.error("Error fetching software data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSoftware();
  }, []);

  if (loading) {
    return <div className="loading-spinner">Loading Software Solutions...</div>;
  }

  return (
    <div className="about-page-container">
      {/* SEO FIX: h1 changed to h2 kyunki index.html mein main h1 maujood hai */}
      <div className="about-hero">
        <h2 style={{ fontSize: "2.5rem", fontWeight: "bold", color: "#fff" }}>
          Business  <span style={{color:"#ff851b"}}>Management Software </span>Solutions
        </h2>
        <p>
          These are specialized software solutions designed to manage various
          aspects of business operations, from customer relationships to billing
          and enterprise-wide processes.
        </p>
      </div>

      <div className="about-content-wrapper">
        {/* 2. Intro Section */}
        <section className="section-header">
          {/* SEO FIX: Hierarchy check - h2 as section header */}
          <h2 style={{ marginTop: "20px", fontSize: "2rem" }}>
            Overview of Key Business <span>Software Categories</span>
          </h2>
          <p style={{  margin: '6px 0', color: '#444', alignItems: 'flex-start' }}>
            This section highlights major categories of business software: ERP,
            CRM, Billing, and MLM systems. Each serves a specific
            purpose—ranging from managing internal operations and customer
            relationships to handling billing processes and supporting
            network-based marketing models.
          </p>
        </section>

        {/* 3. Software Grid Section */}
        <section className="course-main-section">
          {/* SEO FIX: Hierarchy check - h3 for sub-title */}
          <h3 className="section-title" style={{ fontSize: "1.8rem", fontWeight: '900' }}>
            Business Process Automation <span>and Management Tools</span>
          </h3>

          <div className="card-grid-1x2">
            {softwareData.map((item) => (
              <motion.div
                key={item.id}
                className="course-card"
                whileHover={{ y: -10 }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <div className="card-top-icon">
                  <img
                    src={item.icon}
                    alt={item.title}
                    style={{
                      filter: orangeFilter,
                      width: "65px",
                      height: "65px",
                    }}
                  />
                </div>
                {/* SEO FIX: Card titles should always be h3 or lower */}
                <h3 className="section-title" style={{ fontSize: "1rem", margin: "10px 0" }}>{item.title}</h3>

                <div className="feature-list" style={{ marginBottom: "20px" }}>
                  <p style={{  margin: '6px 0', color: '#444', alignItems: 'flex-start' }}>
                    {item.desc}
                  </p>
                  <br />
                  <p style={{ color: "#555" }}>
                    <strong>Key Features:</strong> {item.features}
                  </p>
                </div>

                <div className="card-action-row" style={{ marginTop: "auto" }}>
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=Hi, I would like to request a Demo for ${item.title}.`}
                    target="_blank"
                    rel="noreferrer"
                    style={{ textDecoration: "none", width: "100%" }}
                  >
                    <button className="contact-btn-full">Ask for Demo</button>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Software;