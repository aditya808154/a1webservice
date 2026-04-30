import React, { useState, useEffect } from "react";
import "./OnlineCourses.css";
import { motion } from "framer-motion";

// Firebase Imports
import { db } from "../../firebase";
import { collection, getDocs, query, orderBy } from "firebase/firestore";

const OnlineCourses = () => {
  const [pricingPlans, setPricingPlans] = useState([]);
  const [schedules, setSchedules] = useState([]);
  const [modules, setModules] = useState([]);
  const [loading, setLoading] = useState(true);

  const orangeFilter =
    "invert(58%) sepia(91%) saturate(2200%) hue-rotate(350deg) brightness(101%) contrast(101%)";
  const whatsappNumber = "917289040680";

  useEffect(() => {
    const fetchAllData = async () => {
      setLoading(true);
      try {
        const pricingSnap = await getDocs(
          query(collection(db, "course_pricing"), orderBy("createdAt", "asc")),
        );
        setPricingPlans(
          pricingSnap.docs.map((doc) => ({ id: doc.id, ...doc.data() })),
        );

        const scheduleSnap = await getDocs(
          query(
            collection(db, "course_schedules"),
            orderBy("createdAt", "asc"),
          ),
        );
        setSchedules(
          scheduleSnap.docs.map((doc) => ({ id: doc.id, ...doc.data() })),
        );

        const moduleSnap = await getDocs(collection(db, "course_modules"));
        const moduleData = moduleSnap.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setModules(
          moduleData.sort(
            (a, b) => parseInt(a.moduleId) - parseInt(b.moduleId),
          ),
        );
      } catch (error) {
        console.error("Error fetching course data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchAllData();
  }, []);

  if (loading) {
    return <div className="loading-spinner">Loading Course Details...</div>;
  }

  return (
    <div className="about-page-container">
      {/* 1. Hero Section - SEO H1 Optimized */}
      <div className="about-hero">
        <h1 style={{ fontSize: "2.5rem" }}>
          Top Digital  <span>Marketing Course Institute </span>in Lucknow
        </h1>
        <p>
          A1webservice offers expert digital solutions and industry-leading
          training.
        </p>
      </div>

      <div className="about-content-wrapper">
        {/* 2. Agency Intro Section - SEO H2 Optimized */}
        <section className="section-header">
          <h2 style={{ marginTop: "20px", fontSize: "2rem" }}>
            Learn Digital Marketing from <span>Basics to Advanced</span>
          </h2>
          <p style={{  margin: '6px 0', color: '#444', alignItems: 'flex-start' }}>
            Learn Digital Marketing from Basics to Advanced, covering SEO, SEM,
            Social Media Marketing, Content Marketing, Email Marketing, PPC,
            Affiliate Marketing, and Web Analytics. Gain hands-on knowledge of
            tools like Google Ads, Google Analytics, Search Console, and
            marketing automation platforms. Build real-world strategies to grow
            traffic, generate leads, and scale brands online.
          </p>
        </section>

        {/* 3. Pricing Section - SEO H3 Optimized */}
        <section className="course-main-section">
          <h3 className="section-title" style={{ fontSize: "1.8rem", fontWeight: '900' }}>
            Course <span>Curriculum</span>
          </h3>
          <div className="card-grid-1x4">
            {pricingPlans.map((plan, index) => (
              <div key={plan.id || index} className="course-card">
                <div className="card-top-icon">
                  <img
                    src={plan.image}
                    alt={plan.duration}
                    style={{ filter: orangeFilter }}
                  />
                </div>
                {/* SEO FIX: Card headings changed to h4 for better hierarchy flow */}
                <h4 style={{ fontSize: "1rem", color: "#0a1d37", margin: "10px 0" }}>{plan.duration}</h4>
                <div className="feature-list">
                  {plan.features?.map((f, i) => (
                    <p key={i} style={{  margin: '6px 0', color: '#444', alignItems: 'flex-start' }}>• {f}.</p>
                  ))}
                </div>
                <div className="card-action-row">
                  <span className="price-badge" style={{color: '#fff', fontSize: '1rem' }}>₹ {plan.price}</span>
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=Hi A1webservice,%0A%0AI am interested in: ${plan.duration} Plan %0A%0APlease share seat availability and details.%0A%0A My Details: %0A- Name: %0A- Qualification: %0A- Location:`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="contact-btn-small" style={{ 
                    cursor: 'pointer', 
                    background: '#001f3f', 
                    color: '#fff', 
                    border: 'none', 
                    padding: '7px 9px', 
                    borderRadius: '8px',
                    fontSize:"1rem"
                  }}>Demo &rarr;</button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Schedule Section */}
        <section className="course-main-section" style={{ marginTop: "60px" }}>
          <h3 className="section-title" style={{ fontSize: "1.8rem", fontWeight: '900' }}>
            Learning <span>Schedule</span>
          </h3>
          <div className="card-grid-1x4">
            {schedules.map((sch, index) => (
              <div key={sch.id || index} className="course-card schedule-card">
                <div className="card-top-icon">
                  <img
                    src={sch.image}
                    alt={sch.title}
                    style={{ filter: orangeFilter }}
                  />
                </div>
                {/* SEO FIX: Hierarchy correction */}
                <h4 style={{ fontSize: "1rem", color: "#0a1d37", margin: "10px 0" }}>{sch.title}</h4>
                <p className="small-note" >{sch.note}</p>
                <div className="feature-list">
                  {sch.points?.map((p, i) => (
                    <p key={i} style={{  margin: '6px 0', color: '#444', alignItems: 'flex-start' }}>• {p}</p>
                  ))}
                </div>
                <a
                  href={`https://wa.me/${whatsappNumber}?text=Hi A1webservice,%0A%0AI am interested in: ${sch.title} Plan and Service:- ,%0A%0APlease share seat availability and details.%0A%0A My Details: %0A- Name: %0A- Qualification: %0A- Location:`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="contact-btn-full">
                    Check Availability
                  </button>
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Modules Section */}
        <section className="course-main-section" style={{ marginTop: "60px" }}>
          <h3 className="section-title" style={{ fontSize: "1.8rem", fontWeight: '900' }}>
            Course <span>Modules</span>
          </h3>
          <div className="card-grid-1x3">
            {modules.map((mod, index) => (
              <div key={mod.id || index} className="course-card module-card">
                <div className="card-top-icon">
                  <img
                    src={mod.image}
                    alt={mod.title}
                    style={{ filter: orangeFilter }}
                  />
                </div>
                {/* SEO FIX: Hierarchy correction */}
                <h4 style={{ fontSize: "1rem", color: "#0a1d37", margin: "10px 0" }}>{mod.title}</h4>
                <div className="feature-list">
                  {mod.points?.map((p, i) => (
                    <p key={i} style={{  margin: '6px 0', color: '#444', alignItems: 'flex-start' }}>• {p}</p>
                  ))}
                </div>
                <div className="module-footer" style={{
                          width: "100%",
                          cursor: "pointer",
                          background: "#ff8c00",
                          color: "#fff",
                          border: "none",
                          padding: "7px 9px",
                          borderRadius: "8px",
                          fontSize: "1rem",
                        }}>
                  Module - {mod.moduleId || index + 1}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default OnlineCourses;