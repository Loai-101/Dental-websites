import React, { useState } from 'react';
import { useSEO } from '../../hooks/useSEO';
import './Home.css';

const Home = () => {
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
  const [videoError, setVideoError] = useState(false);

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

  const handleImageError = (specialtyName) => {
    setImageErrors(prev => ({
      ...prev,
      [specialtyName]: true
    }));
  };

  const handleVideoError = () => {
    setVideoError(true);
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
          {!videoError ? (
            <video 
              className="hero-video-bg"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              disablePictureInPicture
              controls={false}
              onError={handleVideoError}
            >
              <source 
                src="https://res.cloudinary.com/dvybb2xnc/video/upload/v1756122457/WhatsApp_Video_2025-08-25_at_14.47.20_b573fc15_cehood.mp4" 
                type="video/mp4" 
              />
              <source 
                src="https://res.cloudinary.com/dvybb2xnc/video/upload/v1756122457/WhatsApp_Video_2025-08-25_at_14.47.20_b573fc15_cehood.webm" 
                type="video/webm" 
              />
              Your browser does not support the video tag.
            </video>
          ) : (
            <div className="hero-fallback-image">
              <img 
                src="https://res.cloudinary.com/dvybb2xnc/image/upload/v1756120260/istockphoto-912441172-612x612_mqdclv.jpg"
                alt="Medical Website Background"
                className="hero-bg-image"
                decoding="async"
              />
            </div>
          )}
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <h1 className="home-title">Welcome to PMI Medical websites Showroom</h1>
          <p className="home-subtitle">Design your clinic website— in your way</p>
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
