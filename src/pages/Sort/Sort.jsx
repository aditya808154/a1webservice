import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
import "./Sort.css";

const Sort = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videoData, setVideoData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Modal open hone par background scroll rokne ke liye
  useEffect(() => {
    if (selectedVideo) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [selectedVideo]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "videos"));
        const videos = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setVideoData(videos.reverse());
      } catch (error) {
        console.error("Error fetching videos: ", error);
      } finally {
        setLoading(false);
      }
    };
    fetchVideos();
  }, []);

  const getThumbnail = (video) => {
    if (video.videoId) {
      return `https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`;
    }
    return "https://cdn-icons-png.flaticon.com/512/1179/1179069.png";
  };

  if (loading)
    return <div className="loading-spinner">Loading Video Hub...</div>;

  return (
    <section className="about-page-container">
      {/* 1. Hero Section - SEO: H1 is the primary heading */}
      <div className="about-hero">
        <h2 style={{ fontSize: "2.5rem", fontWeight: "bold" }}>
          Explore the World of  <span style={{color:"#ff851b"}}>IT with A1webservice – Learn 
          </span> & Grow with Expert Videos
        </h2>
        <p>
          Unlock your potential in the digital world with A1WebService. Watch
          expert-led short videos on IT services, development, design, and
          marketing – all in one place.
        </p>
      </div>

      <div className="about-content-wrapper">
        {/* 2. Intro Section - SEO: H2 follows H1 */}
        <section className="section-header">
          <h2 style={{ marginTop: "20px", fontSize: "2rem" }}>
            A1WebService | IT Courses & <span>Services Video Hub</span>
          </h2>
          <p style={{  margin: '6px 0', color: '#444', alignItems: 'flex-start' }}>
            We bring together everything you need to succeed in the digital age.
            Whether you're looking to build a website, develop software, or
            master digital marketing, our expert videos make learning simple and
            accessible. From professional IT services to career-boosting online
            courses, we've got you covered – all in one convenient place.
          </p>
        </section>

        {/* 3. Video Grid Section */}
        <div className="card-grid-1x2">
          {videoData.map((video) => (
            <motion.div
              key={video.id}
              className="course-card"
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              onClick={() => setSelectedVideo(video)}
            >
              <div className="video-thumb-overlay">
                {/* SEO: Added descriptive Alt text */}
                <img src={getThumbnail(video)} alt={`Video tutorial: ${video.title}`} />
                <div className="play-button-icon">▶</div>
              </div>

              <div
                className="video-info"
                style={{ paddingTop: "20px", textAlign: "left" }}
              >
                <div
                  className="channel-meta"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    marginBottom: "10px",
                  }}
                >
                  <img
                    src="https://imgs.search.brave.com/CXmh2bNy0imi2JUh_tgLVBZAHgMGnWE6BTbDhPhZ5qE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA1LzM4LzI4LzM3/LzM2MF9GXzUzODI4/Mzc3OF9SSHFoblNJ/emQ3NTdLbG1SY0VG/QXhhQTZ0bzZxaGlM/ei5qcGc"
                    alt="A1webservice Logo"
                    style={{
                      width: "35px",
                      height: "35px",
                      borderRadius: "50%",
                    }}
                  />
                  <div>
                    <span
                      style={{
                        fontWeight: "700",
                        fontSize: "0.9rem",
                        color: "#001f3f",
                        display: "block",
                      }}
                    >
                      A1webservice
                    </span>
                    <span style={{ fontSize: "0.75rem", color: "#777" }}>
                      {video.date || "Recent"}
                    </span>
                  </div>
                </div>
                {/* SEO: Video Title as H3 */}
                <h3 style={{fontSize:"1.1rem", marginBottom: "10px"}}>{video.title}</h3>
                <p style={{  margin: '6px 0', color: '#444', alignItems: 'flex-start' }}>
                  {video.desc}
                </p>

                <button className="contact-btn-full">
                  Watch Video <i className="fa-solid fa-play"></i>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 4. FULL PAGE MODAL - Fixed Center Position */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            className="video-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              className="video-modal-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="close-modal-btn"
                onClick={() => setSelectedVideo(null)}
              >
                &times;
              </button>
              <div className="modal-iframe-wrapper">
                {selectedVideo.videoId ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${selectedVideo.videoId}?autoplay=1`}
                    title={selectedVideo.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <video
                    src={selectedVideo.videoUrl}
                    controls
                    autoPlay
                    style={{ width: "100%", height: "100%" }}
                  ></video>
                )}
              </div>
              <div className="modal-text-info">
                {/* SEO: Modal title as H3 */}
                <h3>{selectedVideo.title}</h3>
                <p className="justify-p">{selectedVideo.desc}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Sort;