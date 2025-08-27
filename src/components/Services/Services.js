import React from 'react';
import { useSEO } from '../../hooks/useSEO';
import './Services.css';

const Services = () => {
  // SEO setup
  useSEO({
    title: "Our Services - Professional Photography, Design & Video Production",
    description: "We offer professional photography, video shooting, clinic and logo design, and post design services. Transform your brand with our creative solutions.",
    keywords: "photography, video production, logo design, clinic design, post design, branding, creative services",
    canonical: window.location.href,
    ogTitle: "Our Services - Professional Photography, Design & Video Production",
    ogDescription: "We offer professional photography, video shooting, clinic and logo design, and post design services.",
    ogUrl: window.location.href,
    twitterTitle: "Our Services - Professional Photography, Design & Video Production",
    twitterDescription: "We offer professional photography, video shooting, clinic and logo design, and post design services."
  });

  const services = [
    {
      id: 1,
      title: "Professional Photography",
      description: "High-quality photography services for clinics, businesses, and special events. We capture the essence of your brand with stunning visuals that tell your story.",
      features: [
        "Clinic & Medical Photography",
        "Product Photography",
        "Event Photography",
        "Portrait Photography",
        "Commercial Photography",
        "Professional Editing"
      ],
      icon: "📸",
      color: "#667eea"
    },
    {
      id: 2,
      title: "Video Production & Shooting",
      description: "Professional video production services including filming, editing, and post-production. Create compelling video content that engages your audience.",
      features: [
        "Promotional Videos",
        "Corporate Videos",
        "Event Coverage",
        "Product Demonstrations",
        "Social Media Content",
        "Professional Editing"
      ],
      icon: "🎥",
      color: "#764ba2"
    },
    {
      id: 3,
      title: "Clinic & Logo Design",
      description: "Comprehensive design services for clinics and businesses. From logo creation to complete brand identity, we help you stand out in your industry.",
      features: [
        "Logo Design",
        "Brand Identity",
        "Clinic Interior Design",
        "Business Card Design",
        "Stationery Design",
        "Brand Guidelines"
      ],
      icon: "🎨",
      color: "#f093fb"
    },
    {
      id: 4,
      title: "Dental Services",
      description: "Comprehensive dental services including photography, design, and marketing solutions specifically tailored for dental clinics and practices.",
      features: [
        "Dental Photography",
        "Dental Clinic Design",
        "Dental Marketing Materials",
        "Before & After Photos",
        "Dental Website Design",
        "Dental Social Media"
      ],
      icon: "🦷",
      color: "#4facfe"
    },
    {
      id: 5,
      title: "Derma & Laser",
      subtitle: "جلدية و ليزر",
      description: "Specialized dermatology and laser treatment services. Coming soon - we're preparing comprehensive solutions for dermatology clinics and laser treatment centers.",
      features: [
        "Dermatology Photography",
        "Laser Treatment Marketing",
        "Before & After Documentation",
        "Skin Care Branding",
        "Medical Aesthetics Design",
        "Patient Education Materials"
      ],
      icon: "✨",
      color: "#ff6b6b",
      comingSoon: true
    },
    {
      id: 6,
      title: "Physiotherapy",
      subtitle: "علاج طبيعي",
      description: "Physical therapy and rehabilitation services. Coming soon - we're developing specialized solutions for physiotherapy clinics and rehabilitation centers.",
      features: [
        "Physiotherapy Branding",
        "Rehabilitation Marketing",
        "Exercise Documentation",
        "Patient Progress Tracking",
        "Clinic Interior Design",
        "Educational Materials"
      ],
      icon: "💪",
      color: "#4ecdc4",
      comingSoon: true
    },
    {
      id: 7,
      title: "Cardiology",
      subtitle: "أمراض القلب",
      description: "Cardiology and heart care services. Coming soon - we're creating comprehensive solutions for cardiology departments and heart care facilities.",
      features: [
        "Cardiology Branding",
        "Heart Care Marketing",
        "Medical Equipment Photography",
        "Patient Education",
        "Clinic Design",
        "Healthcare Communication"
      ],
      icon: "❤️",
      color: "#ff8a80",
      comingSoon: true
    },
    {
      id: 8,
      title: "General & Family",
      subtitle: "طب عام و عائلة",
      description: "General practice and family medicine services. Coming soon - we're preparing solutions for family clinics and general practitioners.",
      features: [
        "Family Medicine Branding",
        "General Practice Marketing",
        "Patient Care Materials",
        "Clinic Design",
        "Health Education",
        "Community Outreach"
      ],
      icon: "👨‍⚕️",
      color: "#a8e6cf",
      comingSoon: true
    },
    {
      id: 9,
      title: "Pediatrics",
      subtitle: "أطفال",
      description: "Pediatric and children's healthcare services. Coming soon - we're developing child-friendly solutions for pediatric clinics and children's hospitals.",
      features: [
        "Pediatric Branding",
        "Child-Friendly Design",
        "Parent Education Materials",
        "Kids' Health Marketing",
        "Clinic Environment Design",
        "Educational Content"
      ],
      icon: "👶",
      color: "#ffd93d",
      comingSoon: true
    },
    {
      id: 10,
      title: "ENT",
      subtitle: "أنف و أذن و حنجرة",
      description: "Ear, Nose, and Throat services. Coming soon - we're creating specialized solutions for ENT clinics and otolaryngology practices.",
      features: [
        "ENT Branding",
        "Specialized Marketing",
        "Medical Equipment Photography",
        "Patient Education",
        "Clinic Design",
        "Treatment Documentation"
      ],
      icon: "👂",
      color: "#6c5ce7",
      comingSoon: true
    },
    {
      id: 11,
      title: "Ophthalmology",
      subtitle: "عيون",
      description: "Eye care and ophthalmology services. Coming soon - we're developing comprehensive solutions for eye clinics and ophthalmology practices.",
      features: [
        "Eye Care Branding",
        "Vision Health Marketing",
        "Medical Equipment Photography",
        "Patient Education",
        "Clinic Design",
        "Treatment Documentation"
      ],
      icon: "👁️",
      color: "#fd79a8",
      comingSoon: true
    },
    {
      id: 12,
      title: "Post Design & Social Media",
      description: "Creative post design and social media content creation. We design eye-catching posts that boost your online presence and engagement.",
      features: [
        "Social Media Posts",
        "Instagram Stories",
        "Facebook Ads",
        "Banner Design",
        "Infographic Design",
        "Content Strategy"
      ],
      icon: "📱",
      color: "#4facfe"
    }
  ];

  const [currentServiceIndex, setCurrentServiceIndex] = React.useState(0);

  const prevService = () => {
    setCurrentServiceIndex((prevIndex) => (prevIndex === 0 ? services.length - 1 : prevIndex - 1));
  };

  const nextService = () => {
    setCurrentServiceIndex((prevIndex) => (prevIndex === services.length - 1 ? 0 : prevIndex + 1));
  };

  const currentService = services[currentServiceIndex];

  const handleWhatsAppClick = () => {
    const phoneNumber = "+1234567890"; // Replace with your actual WhatsApp number
    const message = `Hi! I'm interested in your ${currentService.title.toLowerCase()} services. Can you tell me more about what you offer?`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleDentalClick = () => {
    const phoneNumber = "+1234567890"; // Replace with your actual WhatsApp number
    const message = `Hi! I'm interested in your Dental Services. Can you tell me more about what you offer?`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="services-container">
      {/* Title Section */}
      <div className="title-section">
        <h1 className="page-title">Our Services</h1>
        <p className="page-intro">
          We offer comprehensive creative services to help your business grow and succeed. From professional photography to stunning design solutions, we've got you covered.
        </p>
      </div>

      {/* Services Carousel */}
      <div className="services-carousel">
        <button className="nav-arrow nav-arrow-left" onClick={prevService}>
          <span>‹</span>
        </button>
        
        <div className="service-card-container">
          <div className="service-card">
            <div className="service-icon" style={{ backgroundColor: currentService.color }}>
              <span className="icon-emoji">{currentService.icon}</span>
            </div>
            <div className="service-content">
              <h3 className="service-title">{currentService.title}</h3>
              {currentService.subtitle && (
                <h4 className="service-subtitle">{currentService.subtitle}</h4>
              )}
              {currentService.comingSoon && (
                <div className="coming-soon-badge">Coming Soon</div>
              )}
              <p className="service-description">{currentService.description}</p>
              <div className="service-features">
                <h4>What We Offer:</h4>
                <ul>
                  {currentService.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
              {/* Dental Service Special Button */}
              {currentService.title.toLowerCase().includes('dental') && (
                <button className="dental-insurance-btn" onClick={handleDentalClick}>
                  أسنان - Dental Insurance
                </button>
              )}
            </div>
          </div>
        </div>

        <button className="nav-arrow nav-arrow-right" onClick={nextService}>
          <span>›</span>
        </button>
      </div>

      {/* Service Indicators */}
      <div className="service-indicators">
        {services.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentServiceIndex ? 'active' : ''}`}
            onClick={() => setCurrentServiceIndex(index)}
          />
        ))}
      </div>

      {/* Call to Action */}
      <div className="cta-section">
        <h2>Ready to Get Started?</h2>
        <p>Let's discuss your project and create something amazing together.</p>
        <button className="cta-button" onClick={handleWhatsAppClick}>
          Contact Us Today
        </button>
      </div>
    </div>
  );
};

export default Services;
