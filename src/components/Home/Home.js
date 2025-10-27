import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSEO } from '../../hooks/useSEO';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();
  
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

  const [imageErrors, setImageErrors] = useState({});

  const specialties = [
    { icon: "Tooth", en: "Dental", ar: "أسنان" },
    { icon: "Sparkles", en: "Vet Clinic", ar: "عيادة بيطرية" },
    { icon: "Activity", en: "Physiotherapy", ar: "علاج طبيعي" },
    { icon: "HeartPulse", en: "Cardiology", ar: "أمراض القلب" },
    { icon: "Stethoscope", en: "General & Family", ar: "طب عام و عائلة" },
    { icon: "Baby", en: "Pediatrics", ar: "أطفال" },
    { icon: "Ear", en: "ENT", ar: "أنف و أذن و حنجرة" },
    { icon: "Eye", en: "Dr Profile", ar: "عيون" },
  ];

  const openDemo = (url) => {
    window.open(url, '_blank');
  };

  const handlePMIITClick = () => {
    navigate('/pmi-it');
  };

  const handleImageError = (specialtyName) => {
    setImageErrors(prev => ({
      ...prev,
      [specialtyName]: true
    }));
  };

  const getImageUrl = (specialtyName) => {
    const imageUrls = {
      "Dental": "https://res.cloudinary.com/dvybb2xnc/image/upload/v1756120260/istockphoto-912441172-612x612_mqdclv.jpg",
      "Vet Clinic": "https://res.cloudinary.com/dvybb2xnc/image/upload/v1757501000/2105138_xr0c1a.png",
      "Physiotherapy": "https://res.cloudinary.com/dvybb2xnc/image/upload/v1756119405/physiotherapy-icon-vector-image-can-be-used-nursing_120816-92690_csrvix.png",
      "Cardiology": "https://res.cloudinary.com/dvybb2xnc/image/upload/v1756116278/387577_ixnm8c.png",
      "General & Family": "https://res.cloudinary.com/dvybb2xnc/image/upload/v1756116279/family-icon-2316421_1280_fot0td.webp",
      "Pediatrics": "https://res.cloudinary.com/dvybb2xnc/image/upload/v1756119639/pediatrics-icon_pnefev.png",
      "ENT": "https://res.cloudinary.com/dvybb2xnc/image/upload/v1756119628/images_h2upzi.png",
      "Dr Profile": "https://res.cloudinary.com/dvybb2xnc/image/upload/v1758008787/female-portrait-medical-doctor-profile-flat-design-free-vector_mv3xdy.jpg"
    };
    return imageUrls[specialtyName];
  };

  const getFallbackIcon = (specialtyName) => {
    const fallbackIcons = {
      "Dental": "🦷",
      "Vet Clinic": "🐾",
      "Physiotherapy": "💪",
      "Cardiology": "❤️",
      "General & Family": "👨‍⚕️",
      "Pediatrics": "👶",
      "ENT": "👂",
      "Dr Profile": "👩‍⚕️"
    };
    return fallbackIcons[specialtyName] || "🏥";
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
              <button className="division-button division-button-blue">
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
              <button className="division-button division-button-orange">
                View Detailing Aids
              </button>
            </div>
          </div>
        </section>
        <section className="specialties-section">
          <h2 className="specialties-title">Our Medical websites</h2>
          <div className="specialties-grid">
            {specialties.map((specialty, index) => (
              <div key={index} className="specialty-card">
                <div className="specialty-logo-placeholder">
                  {!imageErrors[specialty.en] ? (
                    <img 
                      src={getImageUrl(specialty.en)}
                      alt={`${specialty.en} Logo`}
                      className="specialty-logo"
                      onError={() => handleImageError(specialty.en)}
                      loading="lazy"
                      decoding="async"
                      width="100"
                      height="100"
                    />
                  ) : (
                    <div className="specialty-logo-fallback">
                      <span className="fallback-icon">{getFallbackIcon(specialty.en)}</span>
                    </div>
                  )}
                </div>
                <h3 className="specialty-name-en">{specialty.en}</h3>
                <p className="specialty-name-ar">{specialty.ar}</p>
                {specialty.en === "Dental" ? (
                  <button onClick={() => openDemo('https://dental-sqm1.vercel.app')} className="visit-demo-button">
                    Visit Demo
                  </button>
                ) : specialty.en === "Physiotherapy" ? (
                  <button onClick={() => openDemo('https://physiotherapy-clinic-website.vercel.app/')} className="visit-demo-button">
                    Visit Demo
                  </button>
                ) : specialty.en === "Vet Clinic" ? (
                  <button onClick={() => openDemo('https://vet-website-five.vercel.app/')} className="visit-demo-button">
                    Visit Demo
                  </button>
                ) : specialty.en === "Cardiology" ? (
                  <button onClick={() => openDemo('https://cardiology-website-mu.vercel.app/')} className="visit-demo-button">
                    Visit Demo
                  </button>
                ) : specialty.en === "General & Family" ? (
                  <button onClick={() => openDemo('https://general-family.vercel.app/')} className="visit-demo-button">
                    Visit Demo
                  </button>
                ) : specialty.en === "Pediatrics" ? (
                  <button onClick={() => openDemo('https://pediatrics-website.vercel.app/')} className="visit-demo-button">
                    Visit Demo
                  </button>
                ) : specialty.en === "ENT" ? (
                  <button onClick={() => openDemo('https://ent-website-tau.vercel.app/')} className="visit-demo-button">
                    Visit Demo
                  </button>
                ) : specialty.en === "Dr Profile" ? (
                  <button onClick={() => openDemo('https://dr-profile-nine.vercel.app/')} className="visit-demo-button">
                    Visit Demo
                  </button>
                ) : (
                  <div className="coming-soon-badge">
                    Coming Soon
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
