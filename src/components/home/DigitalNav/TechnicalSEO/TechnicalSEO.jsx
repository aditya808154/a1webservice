import React, { useState, useEffect } from "react";
import "./TechnicalSEO.css";
import { FaWhatsapp } from "react-icons/fa";
import tec1 from "../../../../assets/image/tec/tec1.webp";
import tec2 from "../../../../assets/image/tec/tec2.webp";
import tec3 from "../../../../assets/image/tec/tec3.webp";
import { motion } from "framer-motion";

// Firebase Imports
import { db } from "../../../../firebase";
import { collection, getDocs, query, orderBy } from "firebase/firestore";

const TechnicalSEO = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  const orangeFilter =
    "invert(58%) sepia(91%) saturate(2200%) hue-rotate(350deg) brightness(101%) contrast(101%)";

  useEffect(() => {
    const fetchTechnicalServices = async () => {
      try {
        const q = query(
          collection(db, "technical_seo_services"),
          orderBy("createdAt", "asc"),
        );
        const querySnapshot = await getDocs(q);
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setServices(data);
      } catch (error) {
        console.error("Error fetching technical SEO services:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchTechnicalServices();
  }, []);

  return (
    <div className="audit-page">
      {/* 1. Hero Section - Changed H1 to H2 for SEO Hierarchy */}
      <div className="about-hero">
        <h2 style={{ fontSize: "2.5rem", fontWeight: "800" }}>
          Technical SEO For{" "}
          <span style={{ color: "#ff8c00" }}>
            Ecommerce | Freelance 
          </span> Technical SEO
        </h2>
        <p>
          Boost your ecommerce site’s visibility and performance with expert
          technical SEO that improves speed, indexing, and structured data. As a
          freelance technical SEO specialist, I deliver tailored solutions
          without agency overhead—ideal for scalable, search-friendly online
          stores.
        </p>
      </div>

      <div className="about-content-wrapper">
        {/* 2. Intro Section */}
        <section className="section-header">
          <h2 style={{ marginTop: "20px", fontSize: "2rem" }}>
            Best Technical SEO<span> Agency in Lucknow</span>
          </h2>
          <p style={{  margin: '6px 0', color: '#444',alignItems: 'flex-start' }}>
            A1webservice is recognized as the best technical SEO agency in
            Lucknow, offering expert solutions that improve your website’s
            crawlability, speed, and search engine performance. Our team
            specializes in fixing backend issues, optimizing site architecture,
            and implementing structured data to boost your online visibility.
            Whether you're a local business or a large ecommerce platform, we
            ensure your website is search-engine friendly and technically sound.
            Trust A1webservice to elevate your SEO game with precision and
            proven results.
          </p>
        </section>

        {/* 3. Components Grid */}
        <section className="course-main-section">
          <h3 className="section-title" style={{ fontSize: "1.8rem" }}>
            Components of <span>Technical SEO</span>
          </h3>
          <div className="card-grid-1x4">
            {loading ? (
              <p style={{ textAlign: "center", gridColumn: "1/-1" }}>
                Loading Technical SEO Components...
              </p>
            ) : (
              services.map((s, i) => (
                <div className="course-card" key={s.id || i}>
                  <div className="card-top-icon">
                    <img
                      src={s.icon}
                      alt={`Technical SEO Service - ${s.title}`}
                      style={{ filter: orangeFilter }}
                    />
                  </div>
                  {/* Cards title kept as H3 or changed to H4 if needed, but H3 is fine here */}
                  <h3 style={{ fontSize: "1rem" }}>{s.title}</h3>
                  <p style={{  margin: '6px 0', color: '#444',alignItems: 'flex-start' }}>{s.desc}</p>
                </div>
              ))
            )}
          </div>
        </section>

        {/* 4. Split Sections */}
        <section className="audit-flex-section">
          <div className="audit-flex">
            <div className="audit-text">
              <h3 className="section-title" style={{ fontSize: "1.8rem" }}>
                Why is Technical SEO<span> Important for Your Website?</span> 
              </h3>
              <p style={{  margin: '6px 0', color: '#444',alignItems: 'flex-start' }}>
                Technical SEO lays the foundation for how well your website
                performs in search engines. It ensures your site is accessible,
                fast, secure, and easy for Google to understand. Without it,
                even the best content may never rank. For business owners, this
                means fewer leads and lost online visibility.
              </p>
              {/* SEO FIX: Inner small headings should be H4 or strong tags */}
              <h4 style={{ fontSize: "1rem", margin: "10px 0", color: "#333" }}>
                Who Can Do This?
              </h4>
              <p style={{  margin: '6px 0', color: '#444',alignItems: 'flex-start' }}>
                Skilled SEO professionals or agencies with technical expertise
                handle these tasks. It requires tools, analysis, and backend
                knowledge—something beyond basic SEO know-how.
              </p>
              <a
                href="https://wa.me/917289040680?text=Hi A1webservice..."
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
                <FaWhatsapp /> 7289040680
              </a>
            </div>
            <div className="audit-checklist-img">
              <img src={tec1} alt="A1Webservice Technical SEO Pyramid" />
            </div>
          </div>
        </section>

        {/* 5. Reverse Split Section */}
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
                How Does Technical SEO<span> Prevent Revenue Loss?</span>
              </h3>
              <p style={{  margin: '6px 0', color: '#444',alignItems: 'flex-start' }}>
                If your site has broken links, indexing issues, or security
                flaws, it can lose traffic and sales without you even realizing
                it. Search engines may skip or de-rank your pages, and users may
                exit immediately if they don’t trust the site.
              </p>
              <h4 style={{ fontSize: "1rem", margin: "10px 0", color: "#333" }}>
                Who Should You Trust?
              </h4>
              <p style={{  margin: '6px 0', color: '#444',alignItems: 'flex-start' }}>
                A dedicated technical SEO expert or agency regularly audits your
                site, fixes hidden issues, and protects your visibility—saving
                you from silent revenue losses.
              </p>
              <a
                href="https://wa.me/917289040680?text=Hi A1webservice..."
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
                <FaWhatsapp /> 7289040680
              </a>
            </div>
            <div className="audit-checklist-img">
              <img src={tec2} alt="Technical SEO Speed Optimization" />
            </div>
          </div>
        </section>

        {/* 6. Third Split Section */}
        <section className="audit-flex-section">
          <div className="audit-flex">
            <div className="audit-text">
              <h3 className="section-title" style={{ fontSize: "1.8rem" }}>
                Can You Do It Yourself or<span> Hire an Expert?</span>
              </h3>
              <p style={{  margin: '6px 0', color: '#444',alignItems: 'flex-start' }}>
                While basic SEO tasks can be learned, technical SEO is complex
                and time-consuming. Business owners are better off focusing on
                growth while a professional ensures their site meets the latest
                SEO standards and keeps up with Google’s algorithm updates.
              </p>
              <h3 style={{ fontSize: "1rem" }}>Who Can You Rely On?</h3>
              <p style={{  margin: '6px 0', color: '#444',alignItems: 'flex-start' }}>
                Agencies like A1webservice offer specialized technical SEO
                services. With the right tools, experience, and local
                understanding, they handle everything from backend fixes to
                performance optimization—so you can focus on running your
                business.
              </p>
              <a
                href="https://wa.me/917289040680?text=Hi A1webservice..."
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
                <FaWhatsapp /> 7289040680
              </a>
            </div>
            <div className="audit-checklist-img">
              <img src={tec3} alt="A1Webservice Technical Security Audit" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TechnicalSEO;
