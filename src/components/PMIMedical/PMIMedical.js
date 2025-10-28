import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSEO } from '../../hooks/useSEO';
import './PMIMedical.css';

const PMIMedical = () => {
  const navigate = useNavigate();
  
  // SEO configuration
  useSEO({
    title: "PMI Medical - Medical Solutions & Services",
    description: "Explore our comprehensive medical solutions and services. Professional medical tools and services for healthcare providers and medical practices.",
    keywords: "PMI Medical, medical solutions, healthcare services, medical tools, medical practice, healthcare providers",
    canonical: "https://pmi-showroom-website.com/pmi-medical",
    ogTitle: "PMI Medical - Medical Solutions & Services",
    ogDescription: "Explore our comprehensive medical solutions and services. Professional medical tools and services for healthcare providers and medical practices.",
    ogUrl: "https://pmi-showroom-website.com/pmi-medical",
    twitterTitle: "PMI Medical - Medical Solutions & Services",
    twitterDescription: "Explore our comprehensive medical solutions and services. Professional medical tools and services for healthcare providers and medical practices."
  });

  const medicalProducts = [
    { name: "Medical Product 1", logo: "🏥" },
    { name: "Medical Product 2", logo: "🩺" },
    { name: "Medical Product 3", logo: "💊" },
    { name: "Medical Product 4", logo: "🩹" },
    { name: "Medical Product 5", logo: "🧬" },
    { name: "Medical Product 6", logo: "🔬" },
    { name: "Medical Product 7", logo: "📋" },
    { name: "Medical Product 8", logo: "🏥" },
    { name: "Medical Product 9", logo: "🩺" },
    { name: "Medical Product 10", logo: "💊" },
    { name: "Medical Product 11", logo: "🩹" },
    { name: "Medical Product 12", logo: "🧬" }
  ];

  const handleDetailingAids = (productName) => {
    // Navigate to detailing aids page for the product
    navigate(`/detailing-aids/PMI Medical/${productName}`);
  };

  const handleDemo = (productName) => {
    console.log(`View Demo for ${productName}`);
    // Add your demo logic here
  };

  return (
    <div className="pmi-medical-container">
      <header className="pmi-medical-header">
        <div className="hero-image-background">
          <img 
            src="https://res.cloudinary.com/dvybb2xnc/image/upload/v1761480259/WhatsApp_Image_2025-10-26_at_12.56.52_e95f2b38_znbq3s.jpg"
            alt="PMI Medical Background"
            className="hero-bg-image"
            decoding="async"
          />
        </div>
        <div className="header-content">
          <h1 className="page-title">PMI Medical Solutions Products</h1>
        </div>
      </header>
      
      <main className="pmi-medical-main">
        <section className="products-section">
          <div className="products-grid">
            {medicalProducts.map((product, index) => (
              <div key={index} className="product-card">
                <div className="product-logo">
                  <span className="product-logo-icon">{product.logo}</span>
                </div>
                <h3 className="product-name">{product.name}</h3>
                <div className="product-buttons">
                  <button 
                    className="product-button detailing-button"
                    onClick={() => handleDetailingAids(product.name)}
                  >
                    Detailing Aids
                  </button>
                  <button 
                    className="product-button demo-button"
                    onClick={() => handleDemo(product.name)}
                  >
                    Demo
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default PMIMedical;
