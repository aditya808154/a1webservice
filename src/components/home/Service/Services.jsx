import React from "react";
import { Link } from "react-router-dom";
import "./Services.css";

const Services = () => {
  return (
    <div className="about-page-container">
      <div className="about-content-wrapper">
        {/* 2. Agency Intro Section */}
        <section className="section-header">
          <h2 style={{ marginTop: "20px", fontSize: "2rem" }}>
            A1webservice-Best <span>Digital Marketing Agency </span>in Lucknow
          </h2>
          <p>
            A1webservice is a team of experienced IT professionals, delivering
            complete digital marketing and IT solutions in Lucknow and Delhi
            since 2015. We specialize in SEO, SMM, SMO, Google Ads (PPC), Email
            Marketing, web development, Software Development, Application
            Development and more—tailored to your unique business needs. With a
            strong focus on quality, innovation, and results, we’ve helped
            countless brands grow their online presence. Trust our dedicated
            team to take your digital journey forward with smart, effective
            strategies.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Services;
