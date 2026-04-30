import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Contact.css";

// Firebase Imports
import { db } from "../../firebase"; 
import { collection, getDocs, query, orderBy } from "firebase/firestore";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [officeLocations, setOfficeLocations] = useState([]);
  const [loading, setLoading] = useState(true);

  // --- Fetch Office Locations from Firebase ---
  useEffect(() => {
    const fetchOffices = async () => {
      try {
        const q = query(
          collection(db, "office_locations"),
          orderBy("createdAt", "asc"),
        );
        const querySnapshot = await getDocs(q);
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setOfficeLocations(data);
      } catch (error) {
        console.error("Error fetching offices:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOffices();
  }, []);

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    const phoneNumber = "917289040680";
    const msg =
      `New Contact Inquiry%0A%0A` +
      `Name: ${formData.name}%0A` +
      `Email: ${formData.email}%0A` +
      `Message: ${formData.message}`;

    window.open(`https://wa.me/${phoneNumber}?text=${msg}`, "_blank");

    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="about-page-container">
      {/* 1. Hero Section - SEO Fix: Changed h1 to h2 for hierarchy flow */}
      <div className="about-hero">
        <h2 style={{ fontSize: "2.5rem", color: "#fff", fontWeight: "bold" }}>
          Contact <span style={{ color: "#ff8c00" }}>Us</span>
        </h2>
        <p>Connect for Complete IT solution in a single online Platform</p>
      </div>

      <div className="about-content-wrapper">
        {/* 2. Office Locations Grid */}
        <section className="section-header">
          {/* SEO Fix: Keep it h2 for main section title */}
          <h2 style={{ marginTop: "20px", fontSize: "2rem" }}>
            Our Offices <span>& Locations</span>
          </h2>
          <p style={{  margin: '6px 0', color: '#444',alignItems: 'flex-start' }}>
            Reach out to our experts for personalized IT consultation. We are
            committed to providing top-notch support and innovative solutions.
          </p>
        </section>

        <div className="card-grid-1x2">
          {loading ? (
            <p style={{ textAlign: "center", gridColumn: "1/-1" }}>
              Loading offices...
            </p>
          ) : (
            officeLocations.map((office) => (
              <motion.div
                key={office.id}
                className="course-card"
                whileHover={{ y: -10 }}
              >
                <div className="branch-tag-new">{office.type}</div>
                {/* SEO Fix: Office titles to h3 */}
                <h3 style={{fontSize: "1.2rem"}}>{office.city} Office</h3>
                <div
                  className="justify-p"
                  style={{
                    color: "#555",
                    fontSize: "0.95rem",
                    lineHeight: "1.8",
                    marginBottom: "20px",
                  }}
                >
                  <p style={{  margin: '6px 0', color: '#444',alignItems: 'flex-start' }}>
                    <i
                      className="fa-solid fa-location-dot"
                      style={{ color: "#ff8c00" }}
                    ></i>{" "}
                    {office.address}
                  </p>
                  <p style={{  margin: '6px 0', color: '#444',alignItems: 'flex-start' }}>
                    <i
                      className="fa-solid fa-phone"
                      style={{ color: "#ff8c00" }}
                    ></i>{" "}
                    {office.phone}
                  </p>
                  <p>
                    <i
                      className="fa-solid fa-envelope"
                      style={{ color: "#ff8c00" }}
                    ></i>{" "}
                    {office.email}
                  </p>
                </div>

                <div className="card-action-row" style={{ marginTop: "auto" }}>
                  <a
                    href={office.mapLink}
                    target="_blank"
                    rel="noreferrer"
                    style={{ textDecoration: "none", width: "100%" }}
                  >
                    <button className="contact-btn-full">
                      Get Directions <i className="fa-solid fa-paper-plane"></i>
                    </button>
                  </a>
                </div>
              </motion.div>
            ))
          )}
        </div>

        {/* 3. Dynamic Map Section */}
        <section className="map-integration-section">
          {/* SEO Fix: Section sub-titles to h3 */}
          <h3 className="section-title" style={{ fontSize: "1.8rem" }}>
            Main Branch <span>Map Location</span>
          </h3>
          <div className="map-container-new">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.563721344403!2d80.94056157522237!3d26.853823476682492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd0a85555555%3A0x67302f37c44e99f9!2sA1webservice!5e0!3m2!1sen!2sin!4v1708360000000!5m2!1sen!2sin" 
              width="100%"
              height="450"
              style={{ border: 0, borderRadius: "15px" }}
              allowFullScreen=""
              loading="lazy"
              title="A1 Web Service Main Office Location Map"
            ></iframe>
          </div>
        </section>

        {/* 4. Form Section */}
        <section className="form-section-new">
          <div className="form-inner-card" style={{paddingTop:"10px"}}>
            <h3 className="section-title" style={{ fontSize: "1.8rem" }}>
              Send us a <span>Message</span>
            </h3>
            
            <form onSubmit={handleWhatsAppSubmit}>
              <div className="input-group-new">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
              <textarea
                placeholder="Tell us about your project"
                rows="5"
                required
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              ></textarea>
              <button
                type="submit"
                className="contact-btn-full"
                style={{ marginTop: "20px", maxWidth: "300px" }}
              >
                Send Message via WhatsApp
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;