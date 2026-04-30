import React from 'react';
import './DigitalMarketing.css';

const DigitalMarketing = () => {
  const whatsappNumber = "918888888888"; // Apna number yahan badlein

  const services = [
    {
      title: "SEO / SMO / SEM",
      desc: "Professional SEO, SMO, and SEM services including keyword optimization, on-page and off-page SEO, social media strategy, paid ad campaigns, audience targeting, performance tracking, and lead generation.",
      icon: "📈" // Aap image tag <img> bhi use kar sakte hain
    },
    {
      title: "Lead Generation",
      desc: "Targeted lead generation services through strategic campaign planning, audience segmentation, landing page optimization, email marketing, paid ads, and real-time performance tracking to drive high-quality business inquiries.",
      icon: "📊"
    },
    {
      title: "Email Marketing",
      desc: "Email marketing including campaign design, audience segmentation, personalized content, automated workflows, performance analytics, and high-conversion strategies to boost engagement and drive sales.",
      icon: "📧"
    },
    {
      title: "Content Marketing",
      desc: "content marketing including strategy development, high-quality content creation, blog writing, social media content, SEO-driven articles, content distribution, and performance analysis to boost brand visibility and engagement.",
      icon: "📝"
    }
  ];

  return (
    <section className="dm-section" id="digital-marketing">
      <h1 className="dm-title">Digital Marketing</h1>
      
      <div className="dm-grid">
        {services.map((item, index) => (
          <div key={index} className="dm-card">
            <div className="dm-icon-wrapper">
               <span className="dm-icon">{item.icon}</span>
            </div>
            <h3>{item.title}</h3>
            <p className="dm-desc-left">{item.desc}</p>
            <a 
              href={`https://wa.me/${whatsappNumber}?text=Hi, I want to know about ${item.title} services.`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="dm-whatsapp-btn"
            >
              Ask for Price Details
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DigitalMarketing;