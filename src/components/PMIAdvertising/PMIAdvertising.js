import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSEO } from '../../hooks/useSEO';
import './PMIAdvertising.css';

const PMIAdvertising = () => {
  const navigate = useNavigate();
  
  // SEO configuration
  useSEO({
    title: "PMI Advertising - Advertising Solutions & Services",
    description: "Explore our comprehensive advertising solutions and services. Professional marketing tools and services for businesses and advertising agencies.",
    keywords: "PMI Advertising, advertising solutions, marketing services, advertising tools, business marketing, advertising agency",
    canonical: "https://pmi-showroom-website.com/pmi-advertising",
    ogTitle: "PMI Advertising - Advertising Solutions & Services",
    ogDescription: "Explore our comprehensive advertising solutions and services. Professional marketing tools and services for businesses and advertising agencies.",
    ogUrl: "https://pmi-showroom-website.com/pmi-advertising",
    twitterTitle: "PMI Advertising - Advertising Solutions & Services",
    twitterDescription: "Explore our comprehensive advertising solutions and services. Professional marketing tools and services for businesses and advertising agencies."
  });

  const advertisingProducts = [
    { name: "TrendSpark PRO", logo: "📊" },
    { name: "TrendSpark Plus", logo: "📈" },
    { name: "TrendSpark", logo: "📉" }
  ];

  const handleDetailingAids = (productName) => {
    // Navigate to detailing aids page for the product
    navigate(`/detailing-aids/PMI Advertising/${productName}`);
  };

  const handleDemo = (productName) => {
    console.log(`View Demo for ${productName}`);
    // Add your demo logic here
  };

  return (
    <div className="pmi-advertising-container">
      <header className="pmi-advertising-header">
        <div className="hero-image-background">
          <img 
            src="https://res.cloudinary.com/dvybb2xnc/image/upload/v1761637839/4_wjcbf0.png"
            alt="PMI Advertising Background"
            className="hero-bg-image"
            decoding="async"
          />
        </div>
        <div className="header-content">
        </div>
      </header>
      
      <main className="pmi-advertising-main">
        <section className="products-section">
          <div className="products-grid">
            {advertisingProducts.map((product, index) => (
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
                    View DA
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

export default PMIAdvertising;
