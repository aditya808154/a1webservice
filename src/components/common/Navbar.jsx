import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";
import { ChevronDown, Menu, X } from "lucide-react";
import logo from "../../assets/image/a1.png";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  // Dono dropdowns ke liye alag state rakhi hai
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isDigitalOpen, setIsDigitalOpen] = useState(false);

  const closeMenu = () => {
    setIsMobile(false);
    setIsAboutOpen(false);
    setIsDigitalOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo Section */}
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
            <Link to="/">
              <span style={{ color: "#0a1d37" }}>A1</span>
              <span style={{ color: "#ff8c00" }}>webservice</span>
            </Link>
          </div>

          {/* <img src={logo} alt="A1webservice Logo" style={{width:"150px", borderRadius:"50%", background:"#ffffffc0"}}/> */}
        </div>

        {/* Menu Links */}
        <ul className={isMobile ? "nav-links active" : "nav-links"}>
          <li>
            <NavLink to="/" onClick={closeMenu}>
              Home
            </NavLink>
          </li>

          {/* About Dropdown */}
          <li className="dropdown">
            <div className="dropbtn-wrapper">
              <NavLink to="/about" className="dropbtn" onClick={closeMenu}>
                About
              </NavLink>
              <button
                className="dropdown-toggle-btn"
                onClick={(e) => {
                  if (isMobile) {
                    e.preventDefault();
                    setIsAboutOpen(!isAboutOpen);
                    setIsDigitalOpen(false); // Doosra band karne ke liye
                  }
                }}
              >
                <ChevronDown
                  size={16}
                  className={isAboutOpen ? "rotate" : ""}
                />
              </button>
            </div>
            <div
              className={`dropdown-content ${isAboutOpen ? "show-dropdown" : ""}`}
            >
              <NavLink to="/Team" onClick={closeMenu}>
                Our Team
              </NavLink>
              <NavLink to="/view-all" onClick={closeMenu}>
                Upcoming Courses & Events
              </NavLink>
              <NavLink to="/Project" onClick={closeMenu}>
                Project
              </NavLink>
            </div>
          </li>

          <li>
            <NavLink to="/online-courses" onClick={closeMenu}>
              Online Courses
            </NavLink>
          </li>
          <li>
            <NavLink to="/website-design" onClick={closeMenu}>
              Website Design
            </NavLink>
          </li>

          {/* Digital Marketing Dropdown */}
          <li
            className={`dropdown ${isDigitalOpen ? "open" : ""}`}
            onMouseEnter={() => !isMobile && setIsDigitalOpen(true)}
            onMouseLeave={() => !isMobile && setIsDigitalOpen(false)}
          >
            <div className="dropbtn-wrapper">
              <NavLink
                to="/Digital-Marketing-Course"
                className="dropbtn"
                onClick={closeMenu}
              >
                Digital Marketing
              </NavLink>
              <button
                className="dropdown-toggle-btn"
                onClick={(e) => {
                  if (isMobile) {
                    e.preventDefault();
                    setIsDigitalOpen(!isDigitalOpen);
                    setIsAboutOpen(false); // Doosra band karne ke liye
                  }
                }}
              >
                <ChevronDown
                  size={16}
                  className={isDigitalOpen ? "rotate" : ""}
                />
              </button>
            </div>

            <div
              className={`dropdown-content ${isDigitalOpen ? "show-dropdown" : ""}`}
            >
              <NavLink to="/website-audit" onClick={closeMenu}>
                Website Audit
              </NavLink>
              <NavLink to="/SEO-Training" onClick={closeMenu}>
                Technical SEO
              </NavLink>
              <NavLink to="/OnPageSEO" onClick={closeMenu}>
                On-Page SEO
              </NavLink>
              <NavLink to="/e-commerce-seo" onClick={closeMenu}>
                E-commerce SEO
              </NavLink>
              <NavLink to="/LocalSEO" onClick={closeMenu}>
                Local SEO
              </NavLink>
              <NavLink to="/international-seo" onClick={closeMenu}>
                International SEO
              </NavLink>
              <NavLink to="/OffPageSEO" onClick={closeMenu}>
                Off-Page SEO
              </NavLink>
            </div>
          </li>

          <li>
            <NavLink to="/blog" onClick={closeMenu}>
              Blogs
            </NavLink>
          </li>
          <li>
            <NavLink to="/Sort" onClick={closeMenu}>
              Shorts
            </NavLink>
          </li>
          <li>
            <NavLink to="/software-development" onClick={closeMenu}>
              Software
            </NavLink>
          </li>
          <li>
            <NavLink to="/Contact" onClick={closeMenu}>
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <button
          className="mobile-menu-icon"
          onClick={() => setIsMobile(!isMobile)}
        >
          {isMobile ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
