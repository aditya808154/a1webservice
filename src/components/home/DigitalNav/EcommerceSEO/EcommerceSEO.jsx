import React, { useState, useEffect } from "react";
import "./EcommerceSEO.css";
import { FaWhatsapp } from "react-icons/fa";
import ec1 from "../../../../assets/image/ec/ec1.webp";
import ec2 from "../../../../assets/image/ec/ec2.webp";
import ec3 from "../../../../assets/image/ec/ec3.webp";
import { motion } from "framer-motion";

// Firebase Imports
import { db } from "../../../../firebase";
import { collection, getDocs, query, orderBy } from "firebase/firestore";

const EcommerceSEO = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  const orangeFilter =
    "invert(58%) sepia(91%) saturate(2200%) hue-rotate(350deg) brightness(101%) contrast(101%)";

  useEffect(() => {
    const fetchEcommerceServices = async () => {
      try {
        const q = query(
          collection(db, "ecommerce_seo_services"),
          orderBy("createdAt", "asc"),
        );
        const querySnapshot = await getDocs(q);
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setServices(data);
      } catch (error) {
        console.error("Error fetching Ecommerce SEO services:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchEcommerceServices();
  }, []);

  return (
    <div className="ecommerce-page">
      {/* 1. Hero Section */}
      <div className="about-hero">
        <h1 style={{ fontSize: "2.5rem" }}>
          Ecommerce SEO Agency <span>| SEO Consultant | </span>SEO Specialist
        </h1>
        <p>
          Result-driven Ecommerce SEO Agency, Consultant, and Specialist – Boost
          traffic, rankings, and online sales with expert strategies.
        </p>
      </div>

      <div className="about-content-wrapper">
        {/* 2. Intro Section */}
        <section className="section-header">
          <h2 style={{ marginTop: "20px", fontSize: "2rem" }}>
            Hire Ecommerce SEO<span> Specialist in Lucknow</span>
          </h2>
          <p style={{  margin: '6px 0', color: '#444',alignItems: 'flex-start' }}>
            Boost your online sales with a dedicated eCommerce SEO specialist in
            Lucknow. Our experts optimize your product listings, enhance search
            rankings, and drive high-intent traffic to your store. Whether
            you're on Shopify, Magento, or WooCommerce, we tailor strategies
            that convert. Hire now to stay ahead in the digital marketplace!
          </p>
        </section>

        {/* 3. Services Grid */}
        <section className="course-main-section">
          <h3 className="section-title" style={{ fontSize: "1.8rem" }}>
            Key Points to Follow in <span>eCommerce SEO</span>
          </h3>
          <div className="card-grid-1x4">
            {loading ? (
              <p style={{ textAlign: "center", gridColumn: "1/-1" }}>
                Loading eCommerce SEO Strategies...
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

        {/* 4. First Split Section */}
        <section className="audit-flex-section">
          <div className="audit-flex">
            <div className="audit-text">
              <h3 className="section-title" style={{ fontSize: "1.8rem" }}>
                Drive More Sales with <span>Expert eCommerce SEO Services</span>
              </h3>
              <p style={{  margin: '6px 0', color: '#444',alignItems: 'flex-start' }}>
                Unlock the full potential of your online store with our
                results-focused eCommerce SEO services. We optimize your product
                pages, category structure, and site architecture to drive
                qualified traffic. From keyword targeting to content
                optimization, every strategy is tailored to increase visibility
                and conversions. Partner with us to turn browsers into buyers
                and grow your revenue consistently.
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
              <img src={ec1} alt="Ecommerce Growth" />
            </div>
          </div>
        </section>

        {/* 5. Second Split Section (Reverse) */}
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
                Your Trusted eCommerce<span> SEO Consultant for Online Growth</span> 
                
              </h3>
              <p style={{  margin: '6px 0', color: '#444',alignItems: 'flex-start' }}>
                As your dedicated eCommerce SEO consultant, we bring deep
                industry insights and data-driven strategies to scale your
                online business. Whether you're just starting out or looking to
                dominate your niche, we’ll guide your SEO roadmap with
                precision. From audits to implementation, we help you overcome
                ranking challenges and stay ahead of competitors. Let’s build
                sustainable search visibility together.
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
              <img src={ec2} alt="Sales Optimization" />
            </div>
          </div>
        </section>

        {/* 6. Third Split Section */}
        <section className="audit-flex-section">
          <div className="audit-flex">
            <div className="audit-text">
              <h3 className="section-title" style={{ fontSize: "1.8rem" }}>
                Hire a Dedicated eCommerce<span> SEO Specialist Today</span>
              </h3>
              <p style={{  margin: '6px 0', color: '#444',alignItems: 'flex-start' }}>
                Ready to take your online store to the next level? Our
                experienced eCommerce SEO specialists focus on what
                matters—ranking your products, attracting high-intent traffic,
                and increasing sales. We handle everything from technical fixes
                to content improvements. You get measurable results and ongoing
                support tailored to your store's platform and goals.
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
              <img src={ec3} alt="SEO Comparison" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default EcommerceSEO;
