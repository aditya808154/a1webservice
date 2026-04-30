import React, { useState, useEffect } from "react";
import "./InternationalSEO.css";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

import ic1 from "../../../../assets/image/ic/ic1.webp";
import ic2 from "../../../../assets/image/ic/ic2.webp";
import ic3 from "../../../../assets/image/ic/ic3.webp";

// Firebase Imports
import { db } from "../../../../firebase";
import { collection, getDocs, query, orderBy } from "firebase/firestore";

const InternationalSEO = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  const orangeFilter =
    "invert(58%) sepia(91%) saturate(2200%) hue-rotate(350deg) brightness(101%) contrast(101%)";

  useEffect(() => {
    const fetchInternationalServices = async () => {
      try {
        const q = query(
          collection(db, "international_seo_services"),
          orderBy("createdAt", "asc"),
        );
        const querySnapshot = await getDocs(q);
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setServices(data);
      } catch (error) {
        console.error("Error fetching International SEO services:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchInternationalServices();
  }, []);

  return (
    <div className="international-page">
      {/* 1. Hero Section */}
      <div className="about-hero">
        <h1 style={{ fontSize: "2.5rem", fontWeight:"bold" }}>
          International SEO Agency <span>| SEO Consultant | </span>SEO Services
        </h1>
        <p>
          Boost your global visibility with our International SEO Agency,
          trusted SEO Consultant services, & results-driven SEO strategies
          tailored for worldwide success.
        </p>
      </div>

      <div className="about-content-wrapper">
        {/* 2. Intro Section */}
        <section className="section-header">
          <h2 style={{ marginTop: "20px", fontSize: "2rem" }}>
            Hire International<span> SEO Consultant in Lucknow</span>
          </h2>
          <p style={{  margin: '6px 0', color: '#444',alignItems: 'flex-start' }}>
            Looking to expand your business globally? Hire an experienced
            International SEO Consultant in Lucknow to optimize your website for
            international markets. From multilingual SEO to geo-targeted
            strategies, get expert guidance tailored to your global growth
            goals. Reach new audiences and drive organic traffic across borders
            with proven SEO solutions.
          </p>
        </section>

        {/* 3. Services Grid */}
        <section className="course-main-section">
          <h3 className="section-title" style={{ fontSize: "1.8rem" }}>
            Key Points of <span>Consider in International SEO</span> 
          </h3>
          <div className="card-grid-1x4">
            {loading ? (
              <p style={{ textAlign: "center", gridColumn: "1/-1" }}>
                Loading Global Strategies...
              </p>
            ) : (
              services.map((s, i) => (
                <div className="course-card" key={s.id || i}>
                  <div className="card-top-icon">
                    <img
                      src={s.icon}
                      alt={s.title}
                      style={{ filter: orangeFilter }}
                    />
                  </div>
                  <h3 style={{ fontSize: "1rem" }}>{s.title}</h3>
                  <p style={{  margin: '6px 0', color: '#444',alignItems: 'flex-start' }}>{s.desc}</p>
                </div>
              ))
            )}
          </div>
        </section>

        {/* 4. Split Section 1 */}
        <section className="audit-flex-section">
          <div className="audit-flex">
            <div className="audit-text">
              <h3 className="section-title" style={{ fontSize: "1.8rem" }}>
                Proven Expertise in<span> International SEO</span>
              </h3>
              <p style={{  margin: '6px 0', color: '#444',alignItems: 'flex-start' }}>
                With years of hands-on experience in optimizing websites for
                global markets, I specialize in creating SEO strategies that
                drive measurable results across countries. From hreflang
                implementation to country-specific keyword targeting, I ensure
                your brand ranks where it matters most.
              </p>
              <a
                href="https://wa.me/917289040680?text=Hi A1webservice,%0A%0AI am interested Service:- ,%0A%0APlease share seat availability and details.%0A%0A My Details: %0A- Name: %0A- Qualification: %0A- Location:"
                className="contact-btn-full"
                style={{
                  display: "inline-block",
                  width: "auto",
                  padding: "12px 25px",
                  textDecoration: "none",
                }}
                target="_blank"
                rel="noreferrer"
              >
                <FaWhatsapp />7289040680
              </a>
            </div>
            <div className="audit-checklist-img">
              <img src={ic1} alt="Global Expansion" />
            </div>
          </div>
        </section>

        {/* 5. Reverse Split Section 2 */}
        <section
          className="audit-flex-section"
          style={{
            background: "#f9f9f9",
            padding: "40px 20px",
            borderRadius: "15px",
          }}
        >
          <div className="audit-flex reverse-flex">
            <div className="audit-text">
              <h3 className="section-title" style={{ fontSize: "1.8rem" }}>
                Customized <span>Strategies for Growth</span> 
              </h3>
              <p style={{  margin: '6px 0', color: '#444',alignItems: 'flex-start' }}>
                I don’t believe in one-size-fits-all solutions. Every business
                is unique, and I develop tailored SEO plans that align with your
                industry, goals, and target regions—maximizing visibility and
                ROI in international markets.
              </p>
              <a
                href="https://wa.me/917289040680?text=Hi A1webservice,%0A%0AI am interested Service:- ,%0A%0APlease share seat availability and details.%0A%0A My Details: %0A- Name: %0A- Qualification: %0A- Location:"
                className="contact-btn-full"
                style={{
                  display: "inline-block",
                  width: "auto",
                  padding: "12px 25px",
                  textDecoration: "none",
                }}
                target="_blank"
                rel="noreferrer"
              >
                <FaWhatsapp />7289040680
              </a>
            </div>
            <div className="audit-checklist-img">
              <img src={ic2} alt="International Reach" />
            </div>
          </div>
        </section>

        {/* 6. Split Section 3 */}
        <section className="audit-flex-section">
          <div className="audit-flex">
            <div className="audit-text">
              <h3 className="section-title" style={{ fontSize: "1.8rem" }}>
                Transparent <span>Reporting & Results</span> 
              </h3>
              <p style={{  margin: '6px 0', color: '#444',alignItems: 'flex-start' }}>
                You’ll get clear, actionable reports that track rankings,
                traffic, and conversions. My focus is not just short-term gains,
                but sustainable growth that helps your brand dominate in global
                search over time.
              </p>
              <a
                href="https://wa.me/917289040680?text=Hi A1webservice,%0A%0AI am interested Service:- ,%0A%0APlease share seat availability and details.%0A%0A My Details: %0A- Name: %0A- Qualification: %0A- Location:"
                className="contact-btn-full"
                style={{
                  display: "inline-block",
                  width: "auto",
                  padding: "12px 25px",
                  textDecoration: "none",
                }}
                target="_blank"
                rel="noreferrer"
              >
                <FaWhatsapp />7289040680
              </a>
            </div>
            <div className="audit-checklist-img">
              <img src={ic3} alt="Results" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default InternationalSEO;
