import React, { useState, useEffect } from 'react';
import './BlogSection.css';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { db } from '../../firebase'; 
import { collection, getDocs, query } from 'firebase/firestore';

const BlogSection = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const blogsRef = collection(db, "blogs");
        const q = query(blogsRef); 
        
        const querySnapshot = await getDocs(q);
        const blogList = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        
        setBlogs(blogList.reverse()); 
      } catch (error) {
        console.error("Error fetching blogs: ", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  if (loading) return (
    <div className="loading-spinner">
      Loading amazing stories...
    </div>
  );

  return (
    <div className="about-page-container">
      {/* 1. Hero Section - SEO FIX: H1 changed to H2 to maintain hierarchy */}
      <div className="about-hero">
        <h2 style={{ fontSize: "2.5rem", fontWeight: "bold" }}>
          Our Latest <span style={{color:"#ff851b"}}>Insights </span>& Blogs
        </h2>
        <p>
          Explore the world of Digital Marketing and Web Technology through our articles.
        </p>
      </div>

      <div className="about-content-wrapper">
        {/* 2. Blog Grid Section */}
        <section className="course-main-section" style={{marginTop:"20px"}}>
          {/* SEO FIX: Added a hidden descriptive heading for the section if needed, or keeping it clean */}
          <div className="card-grid-1x3">
            {blogs.length > 0 ? (
              blogs.map((post) => (
                <div key={post.id} className="course-card blog-custom-card">
                  <div className="blog-card-img">
                    {/* SEO TIP: Always ensure images have alt text (post.title is good) */}
                    <img src={post.img || 'https://via.placeholder.com/400x250'} alt={post.title} />
                  </div>
                  
                  <div className="blog-card-info">
                    <div className="blog-meta-top">
                      <span className="blog-cat-label">{post.category || 'Blog'}</span>
                      <span className="blog-date-small">{post.date}</span>
                    </div>
                    
                    {/* SEO FIX: Keep card titles as H3 */}
                    <h3 style={{fontSize:"1.2rem", textAlign: "left"}} className="blog-title">{post.title}</h3>
                    
                    <p style={{textAlign:"left", fontSize: "0.9rem", color: "#555"}}>
                      {post.desc || post.fullContent?.intro}
                    </p>
                    
                    <div className="blog-card-footer">
                      <span className="blog-author-name">By {post.author || 'Aroon'}</span>
                      <Link to={`/blog/${post.id}`} className="contact-btn-small" style={{textDecoration: 'none'}}>
                        Read More &rarr;
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div style={{textAlign:'center', width:'100%', padding: '40px', color: '#001f3f'}}>No blogs found.</div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default BlogSection;