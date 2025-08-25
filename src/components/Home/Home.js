import React from 'react';
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

  const specialties = [
    { icon: "Tooth", en: "Dental", ar: "أسنان" },
    { icon: "Sparkles", en: "Derma & Laser", ar: "جلدية و ليزر" },
    { icon: "Activity", en: "Physiotherapy", ar: "علاج طبيعي" },
    { icon: "HeartPulse", en: "Cardiology", ar: "أمراض القلب" },
    { icon: "Stethoscope", en: "General & Family", ar: "طب عام و عائلة" },
    { icon: "Baby", en: "Pediatrics", ar: "أطفال" },
    { icon: "Ear", en: "ENT", ar: "أنف و أذن و حنجرة" },
    { icon: "Eye", en: "Ophthalmology", ar: "عيون" },
  ];

  return (
    <div className="home-container">
      <header className="home-header">
        <div className="hero-video-background">
          <video 
            className="hero-video-bg"
            autoPlay
            muted
            loop
            playsInline
          >
            <source 
              src="https://res.cloudinary.com/dvybb2xnc/video/upload/v1756122457/WhatsApp_Video_2025-08-25_at_14.47.20_b573fc15_cehood.mp4" 
              type="video/mp4" 
            />
          </video>
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
                  {specialty.en === "Dental" && (
                    <img 
                      src="https://res.cloudinary.com/dvybb2xnc/image/upload/v1756120260/istockphoto-912441172-612x612_mqdclv.jpg" 
                      alt="Dental Logo" 
                      className="specialty-logo"
                    />
                  )}
                  {specialty.en === "Derma & Laser" && (
                    <img 
                      src="https://res.cloudinary.com/dvybb2xnc/image/upload/v1756119405/laser-dermatology_946691-1729_xw7hjz.avif" 
                      alt="Derma & Laser Logo" 
                      className="specialty-logo"
                    />
                  )}
                  {specialty.en === "Physiotherapy" && (
                    <img 
                      src="https://res.cloudinary.com/dvybb2xnc/image/upload/v1756119405/physiotherapy-icon-vector-image-can-be-used-nursing_120816-92690_csrvix.avif" 
                      alt="Physiotherapy Logo" 
                      className="specialty-logo"
                    />
                  )}
                  {specialty.en === "Cardiology" && (
                    <img 
                      src="https://res.cloudinary.com/dvybb2xnc/image/upload/v1756116278/387577_ixnm8c.png" 
                      alt="Cardiology Logo" 
                      className="specialty-logo"
                    />
                  )}
                  {specialty.en === "General & Family" && (
                    <img 
                      src="https://res.cloudinary.com/dvybb2xnc/image/upload/v1756116279/family-icon-2316421_1280_fot0td.webp" 
                      alt="General & Family Logo" 
                      className="specialty-logo"
                    />
                  )}
                  {specialty.en === "Pediatrics" && (
                    <img 
                      src="https://res.cloudinary.com/dvybb2xnc/image/upload/v1756119639/pediatrics-icon_pnefev.png" 
                      alt="Pediatrics Logo" 
                      className="specialty-logo"
                    />
                  )}
                  {specialty.en === "ENT" && (
                    <img 
                      src="https://res.cloudinary.com/dvybb2xnc/image/upload/v1756119628/images_h2upzi.png" 
                      alt="ENT Logo" 
                      className="specialty-logo"
                    />
                  )}
                  {specialty.en === "Ophthalmology" && (
                    <img 
                      src="https://res.cloudinary.com/dvybb2xnc/image/upload/v1756119628/2857950_n6sfqr.png" 
                      alt="Ophthalmology Logo" 
                      className="specialty-logo"
                    />
                  )}
                </div>
                <h3 className="specialty-name-en">{specialty.en}</h3>
                <p className="specialty-name-ar">{specialty.ar}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
