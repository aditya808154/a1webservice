import React, { useState, useEffect } from "react";
import "../../../home/DigitalNav/DigitalMarketing/DigitalMarketing.css";
import { FaWhatsapp } from "react-icons/fa";
import dig1 from "../../../../assets/image/dig/dig1.webp";
import dig2 from "../../../../assets/image/dig/dig2.webp";
import { motion } from "framer-motion";

// Firebase Imports
import { db } from "../../../../firebase";
import { collection, getDocs, query, orderBy } from "firebase/firestore";

const FAQ = () => {
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

        // 2. UPDATED: Fetch FAQs from the 'faqs' collection (matching FAQHome API)
        const qFaqs = query(
          collection(db, "faqs"), // Changed from "dm_faqs" to "faqs"
          orderBy("createdAt", "asc"),
        );
        const snapFaqs = await getDocs(qFaqs);
        const faqs = snapFaqs.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        // Sorting logic matching your Admin Panel
        const sortedFaqs = faqs.sort((a, b) => {
          return (a.createdAt?.seconds || 0) - (b.createdAt?.seconds || 0);
        });
        setFaqData(sortedFaqs);

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
    <div className="about-content-wrapper" style={{ maxWidth: '1300px', margin: '0 auto', padding: '60px 20px'}}>
        
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          {/* SEO FIX: Section ka main title H2 hona chahiye */}
          <h2 className="section-title" style={{ fontSize: "1.8rem", textAlign: 'center', marginBottom: '20px', fontWeight: '900' }}>
            <span style={{color:"#111111"}}>FAQ's </span><span>Questions</span>
          </h2>
          {/* <p style={{ color: '#444'}}>
            Global certification to validate your professional skills.
          </p> */}
        </div>
        
        <section className="faq-section-wrapper" style={{ marginTop: "20px" }}>
          <div className="faq-list">
            {faqData.map((item, i) => (
              <div
                className={`faq-item ${activeIndex === i ? "active" : ""}`}
                key={item.id || i}
                onClick={() => toggleFAQ(i)}
              >
                <div className="faq-question">
                  <h3 style={{ fontSize: "1rem" }}>
                    {activeIndex === i ? "−" : "+"} {item.q}
                  </h3>
                </div>
                {activeIndex === i && (
                  <div className="faq-answer">
                    <p style={{  margin: '6px 0', color: '#444', display: 'flex', alignItems: 'flex-start' }}>{item.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
   
  );
};

export default FAQ;
