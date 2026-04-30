import React, { useEffect, useState } from 'react';
import './PreLoader.css';
import logo from '../../assets/image/a1.png'

const PreLoader = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Jab window poori tarah load ho jaye
    const handleLoad = () => {
      setTimeout(() => setLoading(false), 2000); // 2 seconds ka delay premium feel ke liye
    };
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);
  if (!loading) return null;
  return (
    <div className="preloader">
      <div className="loader-content">
        <h1 className="loader-logo">A1 <span>webservice</span></h1>
        
        {/* <img src={logo} alt="A1webservice Logo" style={{width:"500px"}}/> */}
        
        <div className="loader-bar2"></div>
        <div className="loader-bar"></div>
        <div className="loader-bar2"></div>
      </div>
    </div>
  );
};
export default PreLoader;
