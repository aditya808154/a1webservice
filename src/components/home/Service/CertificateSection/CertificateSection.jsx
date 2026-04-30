import React from 'react';
import './CertificateSection.css';

const CertificateSection = () => {
  const orangeFilter = "invert(58%) sepia(91%) saturate(2200%) hue-rotate(350deg) brightness(101%) contrast(101%)";

  const points = [
    {
      id: 1,
      title: "Obtain Your Course Completion Certificate",
      desc: "You will receive a highly valued digital certificate with a unique ID at the end of your each course."
    },
    {
      id: 2,
      title: "Complete A Language Course 1 Or More",
      desc: "Study multiple courses in the same field and receive a completion certificate for free."
    },
    {
      id: 3,
      title: "Increase The Value Of Your CV",
      desc: "Showcase your newly developed language skills and boost your employment profile on LinkedIn."
    }
  ];

  return (
    <div className="about-content-wrapper" style={{ maxWidth: '1300px', margin: '0 auto', padding: '60px 20px'}}>
      <section className="course-main-section" id="certificate-display">
        
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          {/* SEO FIX: Section ka main title H2 hona chahiye */}
          <h2 className="section-title" style={{ fontSize: "1.8rem", textAlign: 'center', marginBottom: '20px', fontWeight: '900' }}>
            <span style={{color:"#111111"}}>Get </span><span>Certified</span>
          </h2>
          {/* <p style={{ color: '#666'}}>
            Global certification to validate your professional skills.
          </p> */}
        </div>

        <div className="cert-container">
          <div className="cert-content-wrapper">
            
            {/* Left Side: Certificate Image */}
            <div className="cert-image-box">
               {/* <img 
                 src="https://langnation.com/assets/img/certificate-online-course-sample.png" 
                 alt="Course Completion Certificate" 
                 className="main-cert-img" 
               /> */}
            </div>

            {/* Right Side: Points */}
            <div className="cert-info-box">
              {points.map((item) => (
                <div key={item.id} className="cert-point-item" style={{
                  background: '#fff',
                  padding: '20px',
                  borderRadius: '12px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                  border: '1px solid #eee',
                  marginBottom: '15px' // Thoda gap add kiya points ke beech
                }}>
                  <div className="cert-icon-circle" style={{ borderColor: '#001f3f'}}>
                    {/* Tick icon orange filter ke sath yahan add kar sakte hain */}
                    {/* <span style={{ color: '#e67e22', fontWeight: 'bold' }}>✓</span> */}
                  </div>
                  <div className="cert-text">
                    {/* SEO FIX: Points ke titles H3 honge taaki H2 ke under aayein */}
                    <h3 style={{ color: '#0a1d37', fontSize: '1.1rem', marginBottom: '8px' }}>{item.title}</h3>
                    <p style={{  margin: '6px 0', color: '#444', display: 'flex', alignItems: 'flex-start' }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default CertificateSection;