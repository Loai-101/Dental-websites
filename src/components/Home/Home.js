import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSEO } from '../../hooks/useSEO';
import LoginModal from '../LoginModal/LoginModal';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [currentDivision, setCurrentDivision] = useState('');
  
  // SEO configuration
  useSEO({
    title: "PMI Medical Websites Showroom - Professional Clinic Website Design",
    description: "Discover our premium collection of medical clinic websites. Professional, modern, and tailored designs for dental, dermatology, cardiology, and more medical specialties.",
    keywords: "medical websites, clinic websites, dental websites, dermatology websites, cardiology websites, healthcare websites, medical practice websites, PMI",
    canonical: "https://pmi-showroom-website.com/",
    ogTitle: "PMI Medical Websites Showroom - Professional Clinic Website Design",
    ogDescription: "Discover our premium collection of medical clinic websites. Professional, modern, and tailored designs for dental, dermatology, cardiology, and more medical specialties.",
    ogUrl: "https://pmi-showroom-website.com/",
    twitterTitle: "PMI Medical Websites Showroom - Professional Clinic Website Design",
    twitterDescription: "Discover our premium collection of medical clinic websites. Professional, modern, and tailored designs for dental, dermatology, cardiology, and more medical specialties."
  });


  const handlePMIITClick = () => {
    setCurrentDivision('PMI IT');
    setIsLoginModalOpen(true);
  };

  const handlePMIMedicalClick = () => {
    setCurrentDivision('PMI Medical');
    setIsLoginModalOpen(true);
  };

  const handlePMIAdvertisingClick = () => {
    setCurrentDivision('PMI Advertising');
    setIsLoginModalOpen(true);
  };

  const handleLogin = (username) => {
    console.log(`User ${username} logged in successfully for ${currentDivision}`);
    
    // Navigate to the appropriate department page after successful login
    if (currentDivision === 'PMI IT') {
      navigate('/pmi-it');
    } else if (currentDivision === 'PMI Medical') {
      navigate('/pmi-medical');
    } else if (currentDivision === 'PMI Advertising') {
      navigate('/pmi-advertising');
    } else {
      // Fallback to home page if no specific division
      navigate('/');
    }
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
    setCurrentDivision('');
  };


  return (
    <div className="home-container">
      <header className="home-header">
        <div className="hero-video-background">
          <div className="hero-fallback-image">
            <img 
              src="https://res.cloudinary.com/dvybb2xnc/image/upload/v1761480259/WhatsApp_Image_2025-10-26_at_12.56.52_e95f2b38_znbq3s.jpg"
              alt="Medical Website Background"
              className="hero-bg-image"
              decoding="async"
            />
          </div>
        </div>
        <div className="hero-content">
          <h1 className="home-title">Welcome to PMI Detailing Aids</h1>
          <a 
            href="https://pmi-me.net/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="explore-pmi-button"
          >
            Explore PMI
          </a>
        </div>
      </header>
      
      <main className="home-main">
        <section className="pmi-divisions-section">
          <div className="divisions-container">
            <div className="division-card">
              <div className="division-logo">
                <img 
                  src="https://res.cloudinary.com/dvybb2xnc/image/upload/f_png,w_150,h_150,c_scale,q_auto/v1752659104/PMI_Purple_o6ml7r.ai"
                  alt="PMI IT Logo"
                  className="division-logo-img"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <h3 className="division-title">PMI IT</h3>
              <button 
                className="division-button division-button-purple"
                onClick={handlePMIITClick}
              >
                View Detailing Aids
              </button>
            </div>
            
            <div className="division-card">
              <div className="division-logo">
                <img 
                  src="https://res.cloudinary.com/dvybb2xnc/image/upload/f_png,w_150,h_150,c_scale,q_auto/v1752659104/PMI_Blue_w7w1zn.ai"
                  alt="PMI Medical Logo"
                  className="division-logo-img"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <h3 className="division-title">PMI Medical</h3>
              <button 
                className="division-button division-button-blue"
                onClick={handlePMIMedicalClick}
              >
                View Detailing Aids
              </button>
            </div>
            
            <div className="division-card">
              <div className="division-logo">
                <img 
                  src="https://res.cloudinary.com/dvybb2xnc/image/upload/f_png,w_150,h_150,c_scale,q_auto/v1752659104/PMI_Brown_ooq0sv.ai"
                  alt="PMI Advertising Logo"
                  className="division-logo-img"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <h3 className="division-title">PMI Advertising</h3>
              <button 
                className="division-button division-button-orange"
                onClick={handlePMIAdvertisingClick}
              >
                View Detailing Aids
              </button>
            </div>
          </div>
        </section>
      </main>
      
      <LoginModal 
        isOpen={isLoginModalOpen}
        onClose={closeLoginModal}
        onLogin={handleLogin}
        productName={currentDivision}
      />
    </div>
  );
};

export default Home;
