import React, { useState, useEffect } from "react"; 
import { motion } from "framer-motion"; 
import { Globe, User, Building } from 'lucide-react';
import "../Contact/Contact.css"; 

// Firebase Imports
import { db } from "../../firebase"; 
import { collection, getDocs, query, orderBy } from "firebase/firestore";

const Project = () => {
  const [projects, setProjects] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [activeCard, setActiveCard] = useState(null);

  // --- API FETCH LOGIC (From Firebase) ---
  const fetchProjects = async () => {
    try {
      const q = query(collection(db, "projects"), orderBy("createdAt", "desc"));
      const querySnapshot = await getDocs(q);
      const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setProjects(data);
    } catch (error) {
      console.error("Error fetching projects:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
    
    const closeCard = () => setActiveCard(null);
    window.addEventListener("click", closeCard);
    return () => window.removeEventListener("click", closeCard);
  }, []);

  return (
    <div className="about-page-container">
      {/* Hero Section */}
      <div className="about-hero">
        {/* SEO FIX: Changed H1 to H2 to avoid multiple H1 tags on the same page */}
        <h2 style={{ fontSize: "2.5rem", fontWeight: "800" }}>
          Our <span style={{ color: "#ff8c00" }}> Creative </span>Portfolio
        </h2>
        <p>A showcase of our high-performance web projects and data-driven marketing success stories.</p>
      </div>

      <div className="about-content-wrapper">
        <section className="section-header">
          {/* SEO FIX: Consistent heading hierarchy */}
          <h2 style={{ marginTop: "20px", fontSize: "1.8rem" }}>
            Success Stories <span >Delivered</span>
          </h2>
          <p style={{  margin: '6px 0', color: '#444',alignItems: 'flex-start' }}>
            From conceptualization to execution, we help businesses scale with 
            cutting-edge technology and strategic digital marketing.
          </p>
        </section>

        {loading ? (
          <div style={{ textAlign: 'center', padding: '100px', fontSize: '1.2rem', color: '#666' }}>
            Loading Projects...
          </div>
        ) : (
          <div className="card-grid-1x2" style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", 
            gap: "30px",
            marginTop: "40px",
            justifyContent: "center" 
          }}>
            {projects.map((project) => (
              <motion.div
                key={project.id}
                className="course-card"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveCard(activeCard === project.id ? null : project.id);
                }}
                whileHover={{ y: -10 }}
                style={{ 
                  textAlign: 'center', padding: '0px', overflow: 'hidden', 
                  position: 'relative', borderRadius: '12px', height: '400px',
                  maxWidth: '400px', margin: '0 auto', cursor: 'pointer',
                  boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
                }}
              >
                <div style={{ position: 'relative', height: "100%", width: "100%" }}>
                  <img 
                    src={project.projectImg || "https://via.placeholder.com/400x400?text=No+Image"} 
                    alt={`Project Showcase - ${project.projectName} by A1Webservice`} 
                    style={{ width: "100%", height: "100%", objectFit: "cover" }} 
                  />
                  
                  {/* Team Style Overlay */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ 
                      opacity: activeCard === project.id ? 1 : undefined,
                      y: activeCard === project.id ? 0 : undefined
                    }}
                    whileHover={{ opacity: 1, y: 0 }}
                    style={{
                      position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                      backgroundColor: 'rgba(0, 0, 0, 0.85)',
                      display: 'flex', flexDirection: 'column', justifyContent: 'center',
                      alignItems: 'center', padding: '25px', color: '#fff',
                      transition: 'all 0.4s ease', boxSizing: 'border-box'
                    }}
                  >
                    <div className="branch-tag-new" style={{ marginBottom: '10px', background: '#ff8c00', color: "#fff" }}>
                      {project.category}
                    </div>
                    
                    {/* SEO FIX: Project name changed to H3 to follow hierarchy */}
                    <h3 style={{ fontSize: "1.5rem", color: '#fff', marginBottom: "10px" }}>{project.projectName}</h3>
                    
                    <div style={{ marginBottom: '15px' }}>
                      <p style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: '#ff8c00', margin: '2px 0' }}>
                        <User size={14} /> {project.clientName}
                      </p>
                      <p style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: '#ddd', margin: '2px 0' }}>
                        <Building size={14} /> {project.companyName}
                      </p>
                    </div>
                    
                    <p style={{  margin: '6px 0', color: '#fff', display: 'flex', alignItems: 'flex-start' }}>
                      {project.description}
                    </p>
                    
                    <div style={{ display: 'flex', gap: '15px' }}>
                      <a 
                        href={project.projectUrl} 
                        target="_blank" 
                        rel="noreferrer" 
                        onClick={(e) => e.stopPropagation()} 
                        title={`Visit ${project.projectName} Website`}
                        style={{ 
                          color: '#fff', background: '#001f3f', padding: '10px 20px', 
                          borderRadius: '30px', display: 'flex', alignItems: 'center', 
                          gap: '8px', textDecoration: 'none', fontWeight: 'bold', fontSize: '0.9rem'
                        }}
                      >
                        <Globe size={18} /> View Project
                      </a>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Project;