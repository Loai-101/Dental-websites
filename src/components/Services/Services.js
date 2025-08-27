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
              <p className="service-description">{currentService.description}</p>
              <div className="service-features">
                <h4>What We Offer:</h4>
                <ul>
                  {currentService.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
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
