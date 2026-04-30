import React from "react";
import "./Website.css";

const Website = () => {
  const whatsappNumber = "917289040680";

  const aiCourses = [
    {
      title: "AI Prompt Engineering for Business",
      duration: "15 Days",
      price: "₹3,999",
      features: [
        "ChatGPT, Claude & Gemini for Business",
        "AI Content for Digital Marketing",
        "Image & Video Prompt Techniques",
        "AI Tools for Daily Office Work",
        "Custom AI Prompts for Clients",
      ],
      image: "https://cdn-icons-png.flaticon.com/512/4712/4712109.png",
    },

    {
      title: "AI Digital Marketing Automation",
      duration: "1 Month",
      price: "₹7,999",
      features: [
        "AI-Based SEO & Keyword Research",
        "Automated Social Media Content",
        "AI Chatbots for Websites & Apps",
        "Lead Generation Automation",
        "WhatsApp & Email Marketing AI",
      ],
      image: "https://cdn-icons-png.flaticon.com/512/2103/2103832.png",
    },

    {
      title: "Python for Software & Data Analysis",
      duration: "3 Months",
      price: "₹14,999",
      features: [
        "Python for Web & Software Logic",
        "Data Handling for Business Reports",
        "Automation Scripts for Office Work",
        "API Integration Basics",
        "Real Company-Level Projects",
      ],
      image: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png",
    },

    {
      title: "Machine Learning for Business Applications",
      duration: "6 Months",
      price: "₹24,999",
      features: [
        "AI Models for Business Decisions",
        "Customer Behavior Analysis",
        "Recommendation Systems",
        "AI for Mobile & Web Apps",
        "Live Industry Capstone Project",
      ],
      image: "https://cdn-icons-png.flaticon.com/512/8637/8637101.png",
    },
  ];

  return (
    <section className="other-section" id="ai-courses">
      <h1 className="other-title">Artificial Intelligence</h1>

      <div className="other-grid">
        {aiCourses.map((item, index) => (
          <div key={index} className="other-card">
            <div className="card-icon-box">
              <img
                src={item.image}
                alt={item.title}
                style={{
                  width: "70px",
                  height: "70px",
                  marginBottom: "15px",
                  objectFit: "contain",
                }}
              />
            </div>

            <h2
              style={{
                fontSize: "1rem",
                color: "#1a3a8f",
                marginBottom: "5px",
                fontWeight: "700",
              }}
            >
              {item.title}
            </h2>
            <h3
              style={{
                fontSize: "0.8rem",
                color: "#666",
                marginBottom: "15px",
                fontWeight: "600",
              }}
            >
              {item.duration}
            </h3>

            <ul className="ai-features-list">
              {item.features.map((feature, i) => (
                <li key={i}>
                  <span className="ai-check">✓</span> {feature}
                </li>
              ))}
            </ul>

            <div className="ai-card-footer">
              <span className="ai-price-tag" style={{
                  width: "auto",
                  padding: "10px 20px",
                  fontSize: "0.7rem",
                }}>{item.price}</span>
              <a
                href={`https://wa.me/${whatsappNumber}?text=Hi, I want to join the ${item.title} AI course.`}
                target="_blank"
                rel="noopener noreferrer"
                className="other-whatsapp-btn"
                style={{
                  width: "auto",
                  padding: "10px 20px",
                  fontSize: "0.7rem",
                }}
              >
                Start
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Website;
