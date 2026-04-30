import React, { useState } from 'react';
import './ContactHome.css';
import { FaWhatsapp, FaPhoneAlt, FaEnvelope, FaUser, FaMobileAlt } from 'react-icons/fa';

const ContactHome = () => {
  const whatsappNumber = "917289040680";
  const phoneNumber = "+917289040680";

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsAppSend = (e) => {
    e.preventDefault();
    const message = `*New Callback Request*%0A%0A` +
                    `*Name:* ${formData.fullName}%0A` +
                    `*Email:* ${formData.email}%0A` +
                    `*Phone:* ${formData.phone}%0A%0A` +
                    `I am interested in starting my career. Please contact me.`;

    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="courses-wrapper">
      {/* Container width restricted to 1200px to match other sections */}
      <section className="home-contact" id="contact-us" style={{ maxWidth: '1300px', margin: '0 auto', padding: '60px 20px' }}>
        <div className="section-header" style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 className="section-title" style={{ fontSize: "1.8rem", textAlign: 'center', marginBottom: '20px', fontWeight: '900' }}>
            Get In <span>Touch</span>
          </h2>
          <p style={{ color: '#666' }}>Ready to start your career? Expert counseling is just a message away.</p>
        </div>

        <div className="contact-main-container">
          <div className="contact-card">
            {/* Left Side */}
            <div className="info-side">
              <div className="badge">Direct Connectivity</div>
              <h3 style={{fontSize:"1.3rem",color:"#fff"}}>Ready to start your <span style={{fontSize:"1.3rem",color:"#ff851b"}}>Career?</span></h3>
              <p>Hamari team aapko 24 ghante ke andar connect karegi. Expert counseling ke liye niche diya form bharein.</p>
              
              <div className="quick-contact-btns">
                <a href={`https://wa.me/${whatsappNumber}?text=Hi A1webservice,%0A%0A Service Name:%0A%0A My Details: %0A- Name: %0A- Qualification: %0A- Location:`} target="_blank" rel="noreferrer" className="q-btn whatsapp">
                  <FaWhatsapp /> WhatsApp
                </a>
                <a href={`tel:${phoneNumber}`} className="q-btn call">
                  <FaPhoneAlt /> Call Now
                </a>
              </div>
            </div>

            {/* Right Side: Form */}
            <div className="form-side">
              <form className="form-container" onSubmit={handleWhatsAppSend}>
                <div className="input-box">
                  <FaUser className="input-icon" />
                  <input 
                    type="text" 
                    name="fullName"
                    required 
                    placeholder="Full Name" 
                    value={formData.fullName}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="input-box">
                  <FaEnvelope className="input-icon" />
                  <input 
                    type="email" 
                    name="email"
                    required 
                    placeholder="Email Address" 
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="input-box">
                  <FaMobileAlt className="input-icon" />
                  <input 
                    type="tel" 
                    name="phone"
                    required 
                    placeholder="Mobile Number" 
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                
                <button type="submit" className="contact-btn">
                  Request Callback <span style={{marginLeft: '10px' }}>&rarr;</span>
                </button>
                <p className="privacy-text">We respect your privacy. No spam, only career growth.</p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactHome;