import React from 'react';
import { FaUserTie, FaBookOpen, FaLaptopCode, FaHandshake } from 'react-icons/fa';

const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      icon: <FaUserTie />,
      title: "Industry Experts",
      desc: "Learn from trainers who have 10+ years of corporate experience."
    },
    {
      id: 2,
      icon: <FaBookOpen />,
      title: "Latest Curriculum",
      desc: "Our syllabus is updated weekly as per industry standards."
    },
    {
      id: 3,
      icon: <FaLaptopCode />,
      title: "Live Projects",
      desc: "Work on real-world projects to gain practical exposure."
    },
    {
      id: 4,
      icon: <FaHandshake />,
      title: "Placement Support",
      desc: "100% interview preparation and job assistance."
    }
  ];

  const cardStyle = {
    border: '1px solid #eee',
    padding: '30px 15px',
    borderRadius: '15px',
    textAlign: 'center',
    background: '#fff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100%',
    minHeight: '300px',
    boxSizing: 'border-box',
    boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
    transition: 'transform 0.3s ease',
    width: '100%',
    margin: '0 auto'
  };

  const iconBoxStyle = {
    fontSize: '45px',
    color: '#e67e22',
    marginBottom: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };

  return (
    <div className="about-content-wrapper" style={{ 
      maxWidth: '1300px', 
      margin: '0 auto', 
      padding: '60px 20px', 
      boxSizing: 'border-box'
    }}>
      <section className="course-main-section">
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          {/* SEO FIX: Main title changed from h3 to h2 */}
          <h2 className="section-title" style={{ fontSize: "1.8rem", textAlign: 'center', marginBottom: '20px', fontWeight: '900' }}>
            Why Choose <span>Our Training?</span>
          </h2>
          {/* <p style={{  margin: '6px 0', color: '#444'}}>
            We provide the best learning environment with premium facilities.
          </p> */}
        </div>

        {/*  */}

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', 
          gap: '20px', 
          justifyContent: 'center', 
          alignItems: 'stretch'
        }}>
          {features.map(item => (
            <div key={item.id} className="other-card" style={cardStyle}>
              <div style={{ flexGrow: 1 }}>
                <div style={iconBoxStyle}>
                  {item.icon}
                </div>
                {/* SEO FIX: Card titles remain h3, which is now correct after h2 */}
                <h3 style={{ fontSize: "1.2rem", color: "#0a1d37", marginBottom: '5px', fontWeight: '600' }}>
                  {item.title}
                </h3>
                
                <div className="features-container">
                  <p style={{ 
                    lineHeight: '1.6', 
                    color: '#555', 
                    margin: 0 
                  }}>
                    {item.desc}
                  </p>
                </div>
              </div>
              
              <div style={{ 
                marginTop: '20px', 
                width: '40px', 
                height: '4px', 
                background: '#e67e22', 
                borderRadius: '10px' 
              }}></div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUs;