import React, { useState, useEffect } from "react";
import "./WebsiteAudit.css";
import { FaWhatsapp } from "react-icons/fa";
import web1 from "../../../../assets/image/web/web1.webp";
import web2 from "../../../../assets/image/web/web2.webp";
import web3 from "../../../../assets/image/web/web3.webp";
import { motion } from "framer-motion";

// Firebase Imports
import { db } from "../../../../firebase";
import { collection, getDocs, query, orderBy } from "firebase/firestore";

const WebsiteAudit = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  // Filter for orange icons
  const orangeFilter =
    "invert(58%) sepia(91%) saturate(2200%) hue-rotate(350deg) brightness(101%) contrast(101%)";

  useEffect(() => {
    const fetchAuditServices = async () => {
      try {
        const q = query(
          collection(db, "website_audit_services"),
          orderBy("createdAt", "asc"),
        );
        const querySnapshot = await getDocs(q);
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setServices(data);
      } catch (error) {
        console.error("Error fetching audit services:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAuditServices();
  }, []);

  return (
    <div className="audit-page">
      {/* 1. Hero Section - Changed H1 to H2 for SEO Hierarchy */}
      <div className="about-hero">
        <h2 style={{ fontSize: "2.5rem", fontWeight: "800", color: "#fff" }}>
          Website Audit <span style={{ color: "#ff8c00" }}>- Check Your Website </span>SEO Health | SEO Audit
        </h2>
        <p>
          Evaluate your website’s SEO health to identify issues and boost your
          search engine visibility.
        </p>
      </div>

      <div className="about-content-wrapper">
        {/* 2. Intro Section */}
        <section className="section-header">
          <h2 style={{ marginTop: "20px", fontSize: "2rem" }}>
            Hire SEO Experts in Lucknow to Check Your <span>Website's
            Health - Website Audit</span>
          </h2>
          <p style={{  margin: '6px 0', color: '#444',alignItems: 'flex-start' }}>
            Hire experienced SEO experts in Lucknow to assess and improve your
            website SEO health with SEO audit. We analyze on-page, off-page, and
            technical SEO factors to ensure your site performs at its best. Fix
            critical issues, enhance visibility, and boost your rankings on
            search engines. Get a detailed SEO audit and tailored strategies to
            grow your online presence effectively.
          </p>
        </section>

        {/* 3. Services Grid - 4x2 styled like Digital Marketing */}
        <section className="course-main-section">
          <h3 className="section-title" style={{ fontSize: "1.8rem" }}>
            Our <span>Services</span>
          </h3>
          <div className="card-grid-1x4">
            {loading ? (
              <p style={{ textAlign: "center", gridColumn: "1/-1" }}>
                Loading Audit Points...
              </p>
            ) : (
              services.map((s, i) => (
                <div className="course-card" key={s.id || i}>
                  <div className="card-top-icon">
                    <img
                      src={s.icon}
                      alt={`SEO Audit Service - ${s.title}`}
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

        {/* 4. Split Sections (Flex row) */}
        <section className="audit-flex-section">
          <div className="audit-flex">
            <div className="audit-text">
              <h3 className="section-title" style={{ fontSize: "1.8rem" }}>
                Boost Your Online Presence with a Professional{" "}
                <span>Website Audit in Lucknow</span>
              </h3>
              <p style={{  margin: '6px 0', color: '#444',alignItems: 'flex-start' }}>
                Struggling to get the traffic or leads you deserve? Our
                comprehensive website SEO audit service in Lucknow uncovers
                hidden issues affecting your site’s performance. From SEO errors
                to slow load times, we analyze every aspect to help you rank
                higher and convert better. Whether you're a startup or an
                established business, we tailor insights to your goals. Let us
                help you create a smarter, faster, and more effective online
                presence.
              </p>
              <a
                href="https://wa.me/917289040680?text=Hi A1webservice,%0A%0AI am interested in Website Audit Service."
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
              <img src={web1} alt="Comprehensive Website SEO Audit Lucknow" />
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
                Identify & Fix Website Issues – Expert Audit{" "}
                <span>Services for Lucknow Businesses</span>
              </h3>
              <p style={{  margin: '6px 0', color: '#444',alignItems: 'flex-start' }}>
                A poorly optimized website can cost you customers. Our expert
                team in Lucknow offers in-depth website audits to identify
                design flaws, SEO gaps, content weaknesses, and technical
                issues. We provide clear, actionable recommendations to fix
                problems and improve performance. It's not just about finding
                what's wrong – it's about making it right. Partner with us to
                get your website back on track.
              </p>
              <a
                href="https://wa.me/917289040680?text=Hi A1webservice,%0A%0AI am interested in fixing my website issues."
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
              <img src={web2} alt="Expert Web Audit and Fix Services" />
            </div>
          </div>
        </section>

        {/* 6. Another Split Section */}
        <section className="audit-flex-section">
          <div className="audit-flex">
            <div className="audit-text">
              <h3 className="section-title" style={{ fontSize: "1.8rem" }}>
                Get a Free Website Health Check – Local Audit{" "}
                <span>Services in Lucknow</span>
              </h3>
              <p style={{  margin: '6px 0', color: '#444',alignItems: 'flex-start' }}>
                Want to know how your website is really performing? Our free
                website health check service in Lucknow gives you a quick
                snapshot of your site's strengths and weaknesses. We assess
                speed, mobile-friendliness, SEO readiness, and more. It's the
                perfect first step toward boosting your site's effectiveness. No
                commitment – just clear insights from your local digital
                experts.
              </p>
              <a
                href="https://wa.me/917289040680?text=Hi A1webservice,%0A%0AI want a Free Website Health Check."
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
              <img src={web3} alt="Free Website Health Check Analysis" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default WebsiteAudit;