import React, { useState, useEffect } from "react";
import "./AboutSection.css";
import { motion } from "framer-motion";

// Images (Purani hi rahengi)
import aboutImg1 from "../../assets/image/about/about1.webp";
import aboutImg2 from "../../assets/image/about/about2.webp";
import aboutImg3 from "../../assets/image/about/about3.webp";

// Firebase Imports (Pura logic same hai)
import { db } from "../../firebase";
import { collection, getDocs, query, orderBy } from "firebase/firestore";

const AboutSection = () => {
  const [activeOffer, setActiveOffer] = useState(0);
  const [activeChoice, setActiveChoice] = useState(0);

  const [offers, setOffers] = useState([]);
  const [choices, setChoices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchAboutData = async () => {
      try {
        const qOffers = query(
          collection(db, "about_offers"),
          orderBy("createdAt", "asc"),
        );
        const qChoices = query(
          collection(db, "about_choices"),
          orderBy("createdAt", "asc"),
        );

        const snapOffers = await getDocs(qOffers);
        const snapChoices = await getDocs(qChoices);

        setOffers(
          snapOffers.docs.map((doc) => ({ id: doc.id, ...doc.data() })),
        );
        setChoices(
          snapChoices.docs.map((doc) => ({ id: doc.id, ...doc.data() })),
        );
      } catch (error) {
        console.error("Error fetching About data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAboutData();
  }, []);

  return (
    <div className="about-page-container" id="about">
      {/* 1. SEO FIX: Changed h1 to h2 because page already has an h1 in Hero/Index */}
      <div className="about-hero">
        <h2 style={{ fontSize: "2.5rem", fontWeight: "bold" }}>
          Welcome<span style={{color:'#ff851b'}}> to </span>A1webservice
        </h2>
        <p>
          Custom Website Design & SEO Company in Lucknow
        </p>
      </div>

      <div className="about-content-wrapper">
        {/* Section 1: Who We Are (Grid Style) */}
        <section className="about-info-grid">
          <div className="section-header">
            {/* SEO FIX: h3 is perfect here for sub-section */}
            <h3 className="section-title" style={{ fontSize: "1.8rem", marginTop:"20px"}}>
             Who  <span>We Are</span>
            </h3>
            <p style={{  margin: '6px 0', color: '#444', alignItems: 'flex-start' }}>
              We are a team of an experienced professional who does believe in
              making a difference. The difference leads to the uniqueness of
              every business. From the query to delivery, we keep the
              communication invoked with the client to deliver the desired
              website that suits the requirement.
            </p>
            <br />
            <p style={{  margin: '6px 0', color: '#444', alignItems: 'flex-start' }}>
              Every team member is enthusiastic towards his or her duties.
              Whether it is about website development or SEO services, we
              believe in transparency. Our ongoing support is another feather of
              our cap that keeps us connected with the clients to tackle their
              issues.
            </p><br />
            <p style={{  margin: '6px 0', color: '#444', alignItems: 'flex-start' }}>
              Our friendly communication eases clients to convey what they want.
              Additionally, the amiable gesture helps us to grow more with the
              clients' successes. We are fortunate to have such skills that can
              help to bring tangible and non-tangible profits to a business.
            </p>
          </div>
          <div className="info-graphic">
            <img src={aboutImg1} alt="A1webservice Team - Best SEO Experts in Lucknow" className="about-side-img" />
          </div>
        </section>

        

        {/* Section 3: Dynamic Offers (Accordion Style) */}
        <div className="about-flex-row reverse">
          <div className="accordion-side">
            <h3 className="section-title" style={{ fontSize: "1.8rem" }}>
              What <span>We Offer</span>
            </h3>
            {loading ? (
              <p>Loading Offers...</p>
            ) : (
              offers.map((item, index) => (
                <div
                  key={item.id || index}
                  className={`acc-item ${activeOffer === index ? "active" : ""}`}
                >
                  <div
                    className="acc-header"
                    onClick={() => setActiveOffer(index)}
                  >
                    <span>{activeOffer === index ? "−" : "+"}</span>{" "}
                    {/* SEO FIX: Changed h3 to h4 for better hierarchy inside a section */}
                    <h4 style={{fontSize:"1rem", margin: 0, display: "inline"}}>{item.title}</h4>
                  </div>
                  {activeOffer === index && (
                    <div className="acc-body"><p style={{  margin: '6px 0', color: '#444', alignItems: 'flex-start' }}>{item.desc}</p></div>
                  )}
                </div>
              ))
            )}
          </div>
          <div className="graphic-side">
            <img src={aboutImg2} alt="Web Development and SEO Services Offer" className="about-side-img" />
          </div>
        </div>

        {/* Section 4: Dynamic Why Choose Us */}
        <div className="about-flex-row">
          <div className="accordion-side">
            <h3 className="section-title" style={{ fontSize: "1.8rem" }}>
              Why <span>Choose Us</span>
            </h3>
            {loading ? (
              <p>Loading Choices...</p>
            ) : (
              choices.map((item, index) => (
                <div
                  key={item.id || index}
                  className={`acc-item ${activeChoice === index ? "active" : ""}`}
                >
                  <div
                    className="acc-header"
                    onClick={() => setActiveChoice(index)}
                  >
                    <span>{activeChoice === index ? "−" : "+"}</span>{" "}
                    {/* SEO FIX: Changed h3 to h4 for correct nesting */}
                    <h4 style={{fontSize:"1rem", margin: 0, display: "inline"}}>{item.title}</h4>
                  </div>
                  {activeChoice === index && (
                    <div className="acc-body"><p style={{  margin: '6px 0', color: '#444', alignItems: 'flex-start' }}>{item.desc}</p></div>
                  )}
                </div>
              ))
            )}
          </div>
          <div className="graphic-side">
            <img src={aboutImg3} alt="Why A1webservice is the best choice for Digital Marketing" className="about-side-img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;