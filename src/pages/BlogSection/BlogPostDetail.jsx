import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; 
import { db } from '../../firebase'; 
import { doc, getDoc } from 'firebase/firestore';
import './BlogPostDetail.css';

const BlogPostDetail = () => {
  const { id } = useParams(); 
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const fetchSinglePost = async () => {
      try {
        const docRef = doc(db, "blogs", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setPost(docSnap.data());
        }
      } catch (error) {
        console.error("Error fetching post:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchSinglePost();
  }, [id]);

  if (loading) return <div className="loading-spinner">Loading Post...</div>;
  if (!post) return <div className="not-found" style={{textAlign:'center', padding:'100px'}}><h2>Post Not Found!</h2></div>;

  return (
    <article className="blog-detail-wrapper">
      {/* 1. Hero Section - Same Height for Image & Video */}
      <div className="blog-detail-hero">
        {!showVideo ? (
          <div className="hero-media-box">
            {/* SEO Fix: Alt tag must have the title for image SEO */}
            <img src={post.img} alt={post.title} className="fit-media" />
            {post.video && (
              <div className="play-icon-overlay" onClick={() => setShowVideo(true)}>
                <span>▶</span>
              </div>
            )}
          </div>
        ) : (
          <div className="hero-media-box">
            <video src={post.video} controls autoPlay className="fit-media" />
          </div>
        )}
      </div>

      <div className="blog-content-container">
        <span className="blog-detail-cat">{post.category || "Blog"}</span>
        
        {/* SEO FIX: Post Title MUST be <h1>. Pehle yahan <h2> tha. */}
        <h1 style={{ marginTop: "20px", fontSize: "1.8rem", color: "#111" }}>{post.title}</h1>
        
        <div className="blog-meta">
          <span>By <strong>{post.author}</strong></span> | <span>{post.date}</span>
        </div>

        <div className="blog-text-area">
          <p className="blog-intro-text" style={{  margin: '6px 0', color: '#444', display: 'flex', alignItems: 'flex-start' }}>
            {post.fullContent?.intro}
          </p>

          {post.fullContent?.sections?.map((sec, i) => (
            <section key={i} className="blog-section-block">
              {/* SEO FIX: Section titles changed from <h2> to <h2> but ensured hierarchy */}
              {sec.heading && <h2 style={{ fontSize: "1.5rem", marginTop: "30px" }}>{sec.heading}</h2>}
              {sec.content && <p style={{  margin: '6px 0', color: '#444', display: 'flex', alignItems: 'flex-start' }}>{sec.content}</p>}
              
              {sec.points && sec.points.length > 0 && (
                <div className="points-list">
                  {sec.points.map((p, j) => (
                    (p.t || p.d) && (
                      <div className="point-item" key={j}>
                        {/* SEO FIX: Points should be <h3> if they are inside <h2> sections */}
                        {p.t && <h3 style={{ fontSize: "1.3rem", color: "#e67e22" }}>{j+1}. {p.t}</h3>}
                        {p.d && <p >{p.d}</p>}
                      </div>
                    )
                  ))}
                </div>
              )}
            </section>
          ))}

          {post.fullContent?.checklists && post.fullContent.checklists.length > 0 && post.fullContent.checklists[0] !== "" && (
            <div className="checklist-container" style={{ background: "#f9f9f9", padding: "20px", borderRadius: "10px", marginTop: "40px" }}>
              {/* SEO FIX: Checklist heading changed to <h3> */}
              <h3 style={{ fontSize: "1.5rem", marginBottom: "15px" }}>Key Takeaways Checklist:</h3>
              {post.fullContent.checklists.map((item, i) => (
                item && (
                  <div className="check-item" key={i} style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
                    <span className="check-icon" style={{ marginRight: "10px" }}>✅</span> 
                    <p style={{ margin: 0 }}>{item}</p>
                  </div>
                )
              ))}
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

export default BlogPostDetail;