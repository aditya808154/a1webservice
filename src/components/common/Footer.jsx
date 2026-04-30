import React from "react";
import "./Footer.css";
// Social Icons (Lucide)
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
// Contact Icons (Font Awesome)
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaWhatsapp,
  FaGlobe,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../assets/image/a1.png";

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-container">
        {/* Column 1: Logo & About Us */}
        <div className="footer-col">
          <div className="nav-logo footer-logo-brand">
            {/* SEO FIX: Changed <h1> to <div> because <h1> should only be used once per page (in Hero) */}
            <div
              className="footer-logo-text"
              style={{
                color: "#fff",
                fontSize: "24px",
                fontWeight: "800",
                marginBottom: "15px",
              }}
            >
              A1 <span style={{ color: "#ff8c00" }}>webservice</span>
            </div>

            {/* <img src={logo} alt="A1webservice Logo" style={{width:"150px", borderRadius:"50%", background:"#ffffffc0"}}/> */}
          </div>
          <p style={{ color: "#ffff" }}>
            A1webservice is a team of experienced IT professionals, delivering
            complete digital marketing and IT solutions in Lucknow and Delhi
            since 2015. We specialize in SEO, SMM, SMO, Google Ads (PPC), Email
            Marketing, web development, Software Development, Application
            Development and more.
          </p>

          <div className="social-links">
            <a
              href="https://www.facebook.com/a1webservice/"
              className="social-icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook size={18} />
            </a>
            <a
              href="https://www.instagram.com/a1webservice/"
              className="social-icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://www.linkedin.com/company/a1webservice/?originalSubdomain=in"
              className="social-icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={18} />
            </a>
            <a href="#" className="social-icon" rel="noopener noreferrer">
              <Twitter size={18} />
            </a>
          </div>
        </div>

        {/* Column 2: Online Courses */}
        <div className="footer-col">
          <h3 style={{ color: "#ffff" }}>Online Courses</h3>
          <ul>
            <li id="w">
              <Link to="/seo-course">SEO Course</Link>
            </li>
            <li id="w">
              <Link to="/smo-course">SMO Course</Link>
            </li>
            <li id="w">
              <Link to="/ppc-course">PPC Course</Link>
            </li>
            <li id="w">
              <Link to="/cro-course">CRO Course</Link>
            </li>
            <li id="w">
              <Link to="/fullstack-course">Fullstack Developer Course</Link>
            </li>
            <li id="w">
              <Link to="/web-design-course">Website Design Course</Link>
            </li>
            <li id="w">
              <Link to="/app-dev-course">App Development Course</Link>
            </li>
          </ul>
        </div>

        {/* Column 3: IT Services */}
        <div className="footer-col">
          <h3 style={{ color: "#ffff" }}>IT Services</h3>
          <ul>
            <li id="w">
              <Link to="/web-design">Website Design</Link>
            </li>
            <li id="w">
              <Link to="/app-development">APP Development</Link>
            </li>
            <li id="w">
              <Link to="/software-development">Software Development</Link>
            </li>
            <li id="w">
              <Link to="/graphic-design">Graphic Design</Link>
            </li>
            <li id="w">
              <Link to="/digital-marketing">Digital Marketing</Link>
            </li>
            <li id="w">
              <Link to="/web-hosting">Web Hosting</Link>
            </li>
            <li id="w">
              <Link to="/erp-software">ERP Software</Link>
            </li>
          </ul>
        </div>

        {/* Column 4: Contact Us */}
        <div className="footer-col">
          <h3 style={{ color: "#ffff" }}>Contact Us</h3>
          <div className="contact-info">
            <p id="w">
              <i className="contact-icon">
                <FaMapMarkerAlt />
              </i>
              Alliganj, Lucknow, UP
            </p>
            <p id="w">
              <i className="contact-icon">
                <FaMapMarkerAlt />
              </i>
              West Kamal Vihar, Buradi, Delhi
            </p>
            <p id="w">
              <i className="contact-icon">
                <FaPhoneAlt />
              </i>
              +91 7289040680
            </p>
            <p id="w">
              <i className="contact-icon">
                <FaWhatsapp />
              </i>
              +91 7289040680
            </p>
            <p id="w">
              <i className="contact-icon">
                <FaGlobe />
              </i>
              A1webservice
            </p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 A1webservice. All Rights Reserved.</p>

        {/* Call Float Icon - Only for Mobile */}
        <a
          href="tel:+917289040680"
          className="call-float"
          rel="noopener noreferrer"
        >
          <img
            src="https://www.svgrepo.com/show/521544/call-receive.svg"
            alt="Call A1webservice"
          />
        </a>

        <a
          href="https://wa.me/917289040680?text=Hello Sir"
          className="whatsapp-float"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp A1webservice"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
