import React, { useState, useEffect } from "react";
import "./OffPageSEO.css";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

import of1 from "../../../../assets/image/of/of1.webp";
import of2 from "../../../../assets/image/of/of2.webp";
import of3 from "../../../../assets/image/of/of3.webp";

// Firebase Imports
import { db } from "../../../../firebase";
import { collection, getDocs, query, orderBy } from "firebase/firestore";

const OffPageSEO = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  const orangeFilter =
    "invert(58%) sepia(91%) saturate(2200%) hue-rotate(350deg) brightness(101%) contrast(101%)";

  useEffect(() => {
    const fetchOffPageData = async () => {
      try {
        const q = query(
          collection(db, "off_page_seo_services"),
          orderBy("createdAt", "asc"),
        );
        const querySnapshot = await getDocs(q);
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setServices(data);
      } catch (error) {
        console.error("Error fetching Off-Page SEO services:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchOffPageData();
  }, []);

  return (
    <div className="offpage-page">
      {/* 1. Hero Section */}
      <div className="about-hero">
        <h1 style={{ fontSize: "2.5rem", fontWeight:"bold" }}>
          International SEO Agency <span>| SEO Consultant |</span> SEO Services
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
            Off Page <span>SEO Elements</span>
          </h3>
          <div className="card-grid-1x4">
            {loading ? (
              <p style={{ textAlign: "center", gridColumn: "1/-1" }}>
                Loading Off-Page SEO Elements...
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
                Comprehensive Off-Page SEO<span> Techniques and
                Optimization Methods</span>
              </h3>
              <p style={{  margin: '6px 0', color: '#444',alignItems: 'flex-start' }}>
                Off-Page SEO techniques like link building, social bookmarking,
                blog commenting, and guest posting are essential for improving a
                website’s authority. These off-page SEO methods help search
                engines evaluate your website’s trustworthiness and relevance.
                Activities such as directory submissions, forum participation,
                and influencer outreach further enhance visibility. For
                eCommerce websites, product reviews, affiliate links, and brand
                mentions are powerful off-SEO techniques. Using the right
                off-page SEO optimization techniques ensures long-term organic
                growth and traffic.
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
              <img src={of1} alt="Off-Page Strategy" />
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
                Building an Effective Off-Page SEO<span> Strategy and
                Checklist</span>
              </h3>
              <p style={{  margin: '6px 0', color: '#444',alignItems: 'flex-start' }}>
                Creating a strong off-page SEO strategy involves identifying
                high-authority backlink opportunities, engaging in niche
                communities, and leveraging social media. A detailed off-page
                SEO checklist should include directory submissions, quality link
                building, content outreach, and press releases. Monitoring
                off-page difficulty—how hard it is to rank based on competitor
                authority—is crucial in setting realistic goals. For maximum
                impact, partner with an off-page SEO services company to execute
                a consistent and scalable link-building plan.
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
              <img src={of2} alt="SEO Checklist" />
            </div>
          </div>
        </section>

        {/* 6. Split Section 3 */}
        <section className="audit-flex-section">
          <div className="audit-flex">
            <div className="audit-text">
              <h3 className="section-title" style={{ fontSize: "1.8rem" }}>
                Add SEO to HTML and Leverage<span> AMP for Enhanced
                Off-Page Impact</span>
              </h3>
              <p style={{  margin: '6px 0', color: '#444',alignItems: 'flex-start' }}>
                While off-page SEO focuses on external efforts, adding SEO to
                HTML—such as proper use of meta tags, alt attributes, and
                structured data—lays a solid on-page foundation. AMP
                (Accelerated Mobile Pages) SEO helps deliver faster-loading
                mobile content, improving user experience and reducing bounce
                rates, indirectly benefiting off-page rankings. When used
                together, AMP pages and strong off-page SEO practices, like
                social sharing and quality backlinks, help boost both visibility
                and ranking across all devices.
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
              <img src={of3} alt="Off-Page Strategy" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default OffPageSEO;
