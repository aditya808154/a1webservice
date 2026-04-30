import React, { useState, useEffect } from "react"; 
import { motion, AnimatePresence } from "framer-motion"; 
import "../Contact/Contact.css"; 
import { Linkedin, Twitter } from 'lucide-react';
import { db } from "../../firebase"; 
import { collection, getDocs } from "firebase/firestore";

const Team = () => {
  const [teamMembers, setTeamMembers] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [activeCard, setActiveCard] = useState(null);

  const fetchTeam = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "team_members"));
      const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setTeamMembers(data);
    } catch (error) {
      console.error("Error fetching team:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTeam();
    const closeCard = () => setActiveCard(null);
    window.addEventListener("click", closeCard);
    return () => window.removeEventListener("click", closeCard);
  }, []);

  return (
    <div className="about-page-container">
      <div className="about-hero">
        {/* SEO FIX: Changed H1 to H2 */}
        <h2 style={{ fontSize: "2.5rem", fontWeight: "800" }}>
          Digital Experts & <span style={{ color: "#ff8c00" }}>Web Architects</span>
        </h2>
        <p>Empowering your business with high-performance websites and data-driven marketing strategies at A1Webservice.</p>
      </div>

      <div className="about-content-wrapper">
        <section className="section-header">
          <h2 style={{ marginTop: "20px", fontSize: "1.8rem" }}>
            The Strategic Minds <span>Behind Your Growth</span>
          </h2>
          <p style={{  margin: '6px 0', color: '#444',alignItems: 'flex-start' }}>
            From creative UI/UX designers to SEO specialists and digital marketing strategists, 
            our team at A1Webservice is dedicated to transforming your online presence into a revenue-generating machine.
          </p>
        </section>

        {loading ? (
          <div style={{textAlign: 'center', padding: '50px'}}>Loading Team...</div>
        ) : (
          <div className="card-grid-1x2" style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", 
            gap: "30px",
            marginTop: "40px",
            justifyContent: "center" 
          }}>
            {teamMembers.map((member) => (
              <motion.div
                key={member.id}
                className="course-card"
                onClick={(e) => {
                  e.stopPropagation(); 
                  setActiveCard(activeCard === member.id ? null : member.id);
                }}
                whileHover={{ y: -10 }}
                style={{ 
                  textAlign: 'center', 
                  padding: '0px', 
                  overflow: 'hidden', 
                  position: 'relative',
                  borderRadius: '12px',
                  height: '400px',
                  maxWidth: '400px', 
                  margin: '0 auto',
                  cursor: 'pointer'
                }}
              >
                <div style={{ position: 'relative', height: "100%", width: "100%" }}>
                  <img 
                    src={member.image || "https://via.placeholder.com/400x400?text=No+Image"} 
                    alt={`Team Member - ${member.name} (${member.role})`} 
                    style={{ width: "100%", height: "100%", objectFit: "cover" }} 
                  />
                  
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ 
                      opacity: activeCard === member.id ? 1 : undefined,
                      y: activeCard === member.id ? 0 : undefined
                    }}
                    whileHover={{ opacity: 1, y: 0 }}
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      backgroundColor: 'rgba(0, 0, 0, 0.85)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      padding: '20px',
                      color: '#fff',
                      transition: 'all 0.4s ease',
                      boxSizing: 'border-box',
                      pointerEvents: 'auto'
                    }}
                  >
                    {member.experience && (
                      <div className="branch-tag-new" style={{ marginBottom: '10px' }}>
                        {member.experience} Exp.
                      </div>
                    )}
                    
                    <h3 style={{ fontSize: "1.5rem", color: '#fff', marginBottom: "5px" }}>{member.name}</h3>
                    <p style={{ color: "#ff8c00", fontWeight: "600", marginBottom: "10px" }}>{member.role}</p>
                    
                    <p style={{  margin: '6px 0', color: '#fff',alignItems: 'flex-start' }}>
                      {member.bio}
                    </p>
                    
                    <div style={{ display: 'flex', gap: '15px' }}>
                      {member.social?.linkedin && (
                        <a 
                          href={member.social.linkedin} 
                          target="_blank" 
                          rel="noreferrer" 
                          onClick={(e) => e.stopPropagation()} 
                          style={{ color: '#fff', background: '#001f3f', padding: '8px', borderRadius: '50%', display: 'flex' }}
                          title={`${member.name} LinkedIn Profile`}
                        >
                          <Linkedin size={18} />
                        </a>
                      )}
                      {member.social?.twitter && (
                        <a 
                          href={member.social.twitter} 
                          target="_blank" 
                          rel="noreferrer" 
                          onClick={(e) => e.stopPropagation()} 
                          style={{ color: '#fff', background: '#001f3f', padding: '8px', borderRadius: '50%', display: 'flex' }}
                          title={`${member.name} Twitter Profile`}
                        >
                          <Twitter size={18} />
                        </a>
                      )}
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

export default Team;