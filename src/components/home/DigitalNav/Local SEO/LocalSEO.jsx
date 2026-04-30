import React, { useState, useEffect } from "react";
import "./LocalSEO.css";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

import lc1 from "../../../../assets/image/lc/lc1.webp";
import lc2 from "../../../../assets/image/lc/lc2.webp";
import lc3 from "../../../../assets/image/lc/lc3.webp";

// Firebase Imports
import { db } from "../../../../firebase";
import { collection, getDocs, query, orderBy } from "firebase/firestore";

const LocalSEO = () => {
  const [services, setServices] = useState([]);
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);

  const orangeFilter =
    "invert(58%) sepia(91%) saturate(2200%) hue-rotate(350deg) brightness(101%) contrast(101%)";

  useEffect(() => {
    const fetchLocalSEOData = async () => {
      try {
        const sQuery = query(
          collection(db, "local_seo_services"),
          orderBy("createdAt", "asc"),
        );
        const sSnap = await getDocs(sQuery);
        setServices(sSnap.docs.map((doc) => ({ id: doc.id, ...doc.data() })));

        const fQuery = query(
          collection(db, "local_seo_faqs"),
          orderBy("createdAt", "asc"),
        );
        const fSnap = await getDocs(fQuery);
        setFaqs(fSnap.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      } catch (error) {
        console.error("Error fetching Local SEO data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchLocalSEOData();
  }, []);

  return (
    <div className="local-seo-page">
      {/* 1. Hero Section */}
      <div className="about-hero">
        <h1 style={{ fontSize: "2.5rem", fontWeight:"bold" }}>
          Local SEO Experts <span>| GMB SEO Services |</span> Hyper Local SEO
        </h1>
        <p>
          Boost your local visibility with expert GMB SEO services and
          hyper-local SEO strategies for top localized rankings in Lucknow,
          Delhi, and across India.
        </p>
      </div>

      <div className="about-content-wrapper">
        {/* 2. Intro Section */}
        <section className="section-header">
          <h2 style={{ marginTop: "20px", fontSize: "2rem" }}>
            Hire Local SEO<span> Experts in Lucknow</span>
          </h2>
          <p style={{  margin: '6px 0', color: '#444',alignItems: 'flex-start' }}>
            Enhance your business presence with our Local SEO expertise,
            tailored for high-impact visibility in Lucknow, Delhi, and across
            India. We specialize in Google My Business (GMB) SEO services,
            ensuring your brand stands out in local searches. Our hyper-local
            SEO strategies drive foot traffic, calls, and leads from nearby
            customers. Dominate localized rankings and grow your business where
            it matters most.
          </p>
        </section>

        {/* 3. Services Grid */}
        <section className="course-main-section">
          <h3 className="section-title" style={{ fontSize: "1.8rem" }}>
            Local SEO <span>Elements</span>
          </h3>
          <div className="card-grid-1x4">
            {loading ? (
              <p style={{ textAlign: "center", gridColumn: "1/-1" }}>
                Loading Local SEO Elements...
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
                  <p style={{  margin: '6px 0', color: '#444',alignItems: 'flex-start' }}>
                    {s.desc}
                  </p>
                </div>
              ))
            )}
          </div>
        </section>

        {/* 4. Dominate Local Search Section */}
        <section className="audit-flex-section">
          <div className="audit-flex">
            <div className="audit-text">
              <h3 className="section-title" style={{ fontSize: "1.8rem" }}>
                Dominate Local Search with <span>Expert Local SEO Services</span>
                
              </h3>
              <p style={{  margin: '6px 0', color: '#444',alignItems: 'flex-start' }}>
                Boost your visibility, attract nearby customers, and grow your
                business with our proven local SEO strategies tailored for
                businesses in Delhi and Lucknow.
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
              <img src={lc1} alt="Local Growth" />
            </div>
          </div>
        </section>

        {/* 5. Why Your Business Needs Local SEO (Reverse) */}
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
                Why Your Business <span>Needs Local SEO</span>
              </h3>
              <p style={{  margin: '6px 0', color: '#444',alignItems: 'flex-start' }}>
                88% of consumers who do a local search on their smartphone visit
                or call a business within 24 hours. If your business doesn’t
                show up in Google’s local results, you're missing out on
                valuable leads.
              </p>
              <ul style={{  margin: '6px 0', color: '#444',alignItems: 'flex-start'}}>
                <li style={{fontSize:"1rem"}}>✅ Rank in the “Local Pack” (top 3 map listings).</li>
                <li style={{fontSize:"1rem"}}>✅ Drive more phone calls, visits, and leads.</li>
                <li style={{fontSize:"1rem"}}>✅ Build trust through reviews and visibility.</li>
                <li style={{fontSize:"1rem"}}>✅ Outrank competitors in your service area.</li>
              </ul>
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
              <img src={lc2} alt="Sales Optimization" />
            </div>
          </div>
        </section>

        {/* 6. Why Choose Us Section */}
        <section className="audit-flex-section">
          <div className="audit-flex">
            <div className="audit-text">
              <h3 className="section-title" style={{ fontSize: "1.8rem" }}>
                Why <span>Choose Us</span> 
              </h3>
              <p style={{  margin: '6px 0', color: '#444',alignItems: 'flex-start' }}>
                We’ve helped cafes, realtors, clinics, and educational
                institutions in Delhi and Lucknow climb to the top of Google
                Maps and local results.
              </p>
              {/*  className="step-list" */}
              <ul style={{  margin: '6px 0', color: '#444',alignItems: 'flex-start' }}>
                <li style={{fontSize:"1rem"}}>✅ Proven success with local clients across industries</li>
                <li style={{fontSize:"1rem"}}>✅ Transparent reporting with monthly ranking updates</li>
                <li style={{fontSize:"1rem"}}>✅ Dedicated account manager</li>
                <li style={{fontSize:"1rem"}}>✅ In-depth competitor analysis</li>
                <li style={{fontSize:"1rem"}}>✅ Affordable pricing for small businesses</li>
              </ul>

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
              <img src={lc3} alt="SEO Comparison" />
            </div>
          </div>
        </section>

        {/* 7. FAQ Section */}
        <section className="faq-section" style={{ marginTop: "60px" }}>
          <h3 className="section-title" style={{ fontSize: "1.8rem" }}>
            Common <span>FAQs</span>
          </h3>
          <div className="faq-list">
            {loading ? (
              <p style={{ textAlign: "center" }}>Loading FAQs...</p>
            ) : (
              faqs.map((faq, index) => (
                <details key={faq.id || index} className="faq-item">
                  <summary>
                    <h3 style={{ fontSize: "0.8rem" }}>{faq.question}</h3>{" "}
                    <span>{"+"}</span>
                  </summary>
                  <div className="faq-answer">
                    <p style={{  margin: '6px 0', color: '#444',alignItems: 'flex-start' }}>{faq.answer}</p>
                  </div>
                </details>
              ))
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default LocalSEO;
