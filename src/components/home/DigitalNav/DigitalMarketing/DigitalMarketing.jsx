import React, { useState, useEffect } from "react";
import "./DigitalMarketing.css";
import { FaWhatsapp } from "react-icons/fa";
import dig1 from "../../../../assets/image/dig/dig1.webp";
import dig2 from "../../../../assets/image/dig/dig2.webp";
import dig3 from "../../../../assets/image/dig/dig3.webp";
import dig4 from "../../../../assets/image/dig/dig4.webp";
import { motion } from "framer-motion";

// Firebase Imports
import { db } from "../../../../firebase";
import { collection, getDocs, query, orderBy } from "firebase/firestore";

const DigitalMarketing = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [services, setServices] = useState([]);
  const [faqData, setFaqData] = useState([]);
  const [testimonialData, setTestimonialData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Style Constant
  const orangeFilter =
    "invert(58%) sepia(91%) saturate(2200%) hue-rotate(350deg) brightness(101%) contrast(101%)";

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // --- Fetch Data from Firebase ---
  useEffect(() => {
    const fetchAllData = async () => {
      setLoading(true);
      try {
        // 1. Fetch Services
        const qServices = query(
          collection(db, "dm_services"),
          orderBy("createdAt", "asc"),
        );
        const snapServices = await getDocs(qServices);
        setServices(
          snapServices.docs.map((doc) => ({ id: doc.id, ...doc.data() })),
        );

        // 2. Fetch FAQs
        const qFaqs = query(
          collection(db, "dm_faqs"),
          orderBy("createdAt", "asc"),
        );
        const snapFaqs = await getDocs(qFaqs);
        setFaqData(snapFaqs.docs.map((doc) => ({ id: doc.id, ...doc.data() })));

        // 3. Fetch Testimonials
        const qTestimonials = query(
          collection(db, "dm_testimonials"),
          orderBy("createdAt", "asc"),
        );
        const snapTestimonials = await getDocs(qTestimonials);
        setTestimonialData(
          snapTestimonials.docs.map((doc) => ({ id: doc.id, ...doc.data() })),
        );
      } catch (error) {
        console.error("Error loading Digital Marketing data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllData();
  }, []);

  if (loading) {
    return (
      <div className="loading-spinner">
        Loading Digital Marketing Content...
      </div>
    );
  }

  return (
    <div className="about-page-container">
      {/* 1. Hero Section - SEO Optimized H1 */}
      <div className="about-hero">
        <h1 style={{ fontSize: "2.5rem" }}>
          Digital SEO <span>Agency in Lucknow | Custom </span>Web Design
        </h1>
        <p>
          A Digital Marketing Agency in Lucknow crafts data-driven strategies to
          skyrocket brands online.
        </p>
      </div>

      <div className="about-content-wrapper">
        {/* 2. Intro Section - Heading H2 */}
        <section className="section-header">
          <h2 style={{ marginTop: "20px", fontSize: "2rem" }}>
            Top SEO Agency<span> in Lucknow</span>
          </h2>
          <p style={{  margin: '6px 0', color: '#444',alignItems: 'flex-start' }}>
            A Digital Marketing Agency in Lucknow provides online marketing
            services such as SEO, social media marketing, PPC, and website
            development to help businesses grow their digital presence. These
            agencies cater to local and national clients, leveraging digital
            strategies to boost brand visibility and sales.
          </p>
        </section>

        {/* 3. Services Grid - Heading H2 and H3 for items */}
        <section className="course-main-section">
          <h2
            className="section-title"
            style={{ fontSize: "1.8rem", textAlign: "center" }}
          >
            Our Digital Marketing <span>Services</span>
          </h2>
          <div className="card-grid-1x4">
            {services.map((item, index) => (
              <div className="course-card" key={item.id || index}>
                <div className="card-top-icon">
                  <img
                    src={item.img}
                    alt={item.title}
                    style={{
                      filter: orangeFilter,
                      width: "55px",
                      height: "55px",
                    }}
                  />
                </div>
                {/* SEO Fix: Service titles as H3 */}
                <h3 style={{ fontSize: "1rem" }}>{item.title}</h3>
                <p style={{  margin: '6px 0', color: '#444',alignItems: 'flex-start' }}>{item.desc}</p>
                <div
                  className="card-action-row"
                  style={{ marginTop: "auto", paddingTop: "15px" }}
                ></div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Website Audit Section - Heading H2 */}
        <section className="audit-flex-section">
          <div className="audit-flex">
            <div className="audit-text">
              <h2 className="section-title" style={{ fontSize: "1.8rem" }}>
                Website <span>Audit Services</span> 
              </h2>
              <p style={{  margin: '6px 0', color: '#444',alignItems: 'flex-start' }}>
                We are offering a comprehensive Website Audit service that
                covers all critical areas to ensure your site performs at its
                best. This includes checking for HTTPS security, fast load
                speed, and mobile responsiveness. We audit for clean URLs,
                detect broken links, and optimize your titles and meta
                descriptions. Our team ensures proper use of headings (H1–H6),
                effective keyword integration, and strong internal linking. We
                verify that all images have alt tags and that your site has
                intuitive navigation with clear calls-to-action (CTAs). We also
                assess the freshness and uniqueness of content, check for secure
                forms, confirm that Google Analytics is working correctly.
              </p>
              <a
                href="https://wa.me/917289040680?text=Hi A1webservice,%0A%0AI am interested in Website Audit Service..."
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
                <FaWhatsapp /> +91 7289040680
              </a>
            </div>
            <div className="audit-checklist-img">
              <img src={dig1} alt="Website SEO Audit Checklist" />
            </div>
          </div>
        </section>

        {/* 5. Local SEO Section - Heading H2 */}
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
              <h2 className="section-title" style={{ fontSize: "1.8rem" }}>
                Local <span>SEO Optimization</span> 
              </h2>
              <p style={{  margin: '6px 0', color: '#444',alignItems: 'flex-start' }}>
                We also offer a specialized Local SEO audit and optimization
                service to help your business stand out in local search results.
                This includes optimizing your Google Business Profile, ensuring
                NAP consistency (Name, Address, Phone) across all directories,
                and enhancing your presence in local citations. We target
                location-based keywords, optimize content for your service
                areas, and help you gather and manage customer reviews.
                Additionally, we ensure your website includes local schema
                markup and is properly linked to maps and directions, making it
                easier for local customers to find and trust your business.
              </p>
              <a
                href="https://wa.me/917289040680?text=Hi A1webservice,%0A%0AI am interested in Local SEO..."
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
              <img src={dig2} alt="Local SEO Marketing Strategies" />
            </div>
          </div>
        </section>

        {/* 6. On-Page SEO Section - Heading H2 */}
        <section className="audit-flex-section">
          <div className="audit-flex">
            <div className="audit-text">
              <h2 className="section-title" style={{ fontSize: "1.8rem" }}>
                On-Page <span>SEO Services​</span>
              </h2>
              <p style={{  margin: '6px 0', color: '#444',alignItems: 'flex-start' }}>
                We provide expert Off-Page SEO services to boost your website’s
                authority, visibility, and search engine rankings. Our approach
                includes building a strong backlink profile with high-quality,
                relevant, and authoritative links. We perform a detailed
                backlink audit to remove or disavow toxic links that may harm
                your rankings. Our team also focuses on strategic guest posting,
                brand mentions, and content promotion to increase online
                presence. Additionally, we ensure a natural and diverse anchor
                text distribution and monitor your referring domains regularly
                to maintain SEO health and long-term growth.
              </p>
              <a
                href="https://wa.me/917289040680?text=Hi A1webservice,%0A%0AI am interested in On-Page SEO..."
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
              <img src={dig3} alt="On-Page SEO Optimization Lucknow" />
            </div>
          </div>
        </section>

        {/* 7. Off-Page SEO Section - Heading H2 */}
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
              <h2 className="section-title" style={{ fontSize: "1.8rem" }}>
                Off-Page SEO and<span> Link Building</span>
              </h2>
              <p style={{  margin: '6px 0', color: '#444',alignItems: 'flex-start' }}>
                We provide expert Off-Page SEO services to boost your website’s
                authority, visibility, and search engine rankings. Our approach
                includes building a strong backlink profile with high-quality,
                relevant, and authoritative links.
              </p>
              <a
                href="https://wa.me/917289040680?text=Hi A1webservice,%0A%0AI am interested in Off-Page SEO..."
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
              <img src={dig4} alt="Off-Page SEO Authority Building" />
            </div>
          </div>
        </section>

        {/* FAQs - Heading H2 and Question H3 */}
        <section className="faq-section-wrapper" style={{ marginTop: "20px" }}>
          <h2
            className="section-title"
            style={{ fontSize: "1.8rem", textAlign: "center" }}
          >
            Digital Marketing <span>FAQs</span>
          </h2>
          <div className="faq-list">
            {faqData.map((item, i) => (
              <div
                className={`faq-item ${activeIndex === i ? "active" : ""}`}
                key={item.id || i}
                onClick={() => toggleFAQ(i)}
              >
                <div className="faq-question">
                  <h3 style={{ fontSize: "0.9rem" }}>
                    {activeIndex === i ? "−" : "+"} {item.q}
                  </h3>
                </div>
                {activeIndex === i && (
                  <div className="faq-answer">
                    <p style={{  margin: '6px 0', color: '#444',alignItems: 'flex-start' }}>{item.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default DigitalMarketing;
