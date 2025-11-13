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
    { name: "SHOFO", logo: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1763024940/WhatsApp_Image_2025-11-13_at_11.52.58_67dafe8f_eqmfun.jpg", catalogUrl: "https://drive.google.com/file/d/1TB7lb__x27xk-d3BL8Re0C8fL1HbDRTF/view?usp=drive_link" },
    { name: "BISICO", logo: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1763024940/WhatsApp_Image_2025-11-13_at_11.52.59_302d3792_messfz.jpg", catalogUrl: "https://drive.google.com/file/d/1EaBZ67Uu51kt7Otm8CkPB1mTa8Mz_G4q/view?usp=drive_link" },
    { 
      name: "CHM", 
      logo: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1763024940/WhatsApp_Image_2025-11-13_at_11.52.58_424a79fb_zbe7au.jpg", 
      catalogs: [
        { label: "Catalog CHM Nails", url: "https://drive.google.com/file/d/1C8QZmTSKKEzGiSbr6_Kq8Eh4q3UOeXNd/view?usp=drive_link" },
        { label: "Catalog CHM Plates", url: "https://drive.google.com/file/d/1TbRSljZFX7poVngv_zlLuwN0rvcyjdcV/view?usp=drive_link" }
      ]
    },
    { 
      name: "SANCTUARY", 
      logo: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1763024941/WhatsApp_Image_2025-11-13_at_11.52.58_43d51ab8_vglgyr.jpg",
      customButtons: [
        { label: "Detailing Aids", url: "https://drive.google.com/file/d/1LF_YC5kQt6F6YQ4ZVN1Fc7PZMUXULnZ_/view?usp=drive_link", className: "detailing-button" },
        { label: "Catalog", url: "https://drive.google.com/file/d/11uXBRoYjappxusMB1E5XCCWY-7xg7Cdw/view?usp=drive_link", className: "catalog-button" }
      ]
    },
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

  const handleCatalog = (catalogUrl) => {
    // Open the Google Drive PDF link
    window.open(catalogUrl, '_blank');
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
                  {product.logo.startsWith('http') ? (
                    <img 
                      src={product.logo} 
                      alt={`${product.name} Logo`}
                      className="product-logo-image"
                      loading="lazy"
                      decoding="async"
                    />
                  ) : (
                    <span className="product-logo-icon">{product.logo}</span>
                  )}
                </div>
                <h3 className="product-name">{product.name}</h3>
                <div className="product-buttons">
                  {product.customButtons && product.customButtons.length > 0 ? (
                    product.customButtons.map((button, idx) => (
                      <button 
                        key={idx}
                        className={`product-button ${button.className}`}
                        onClick={() => handleCatalog(button.url)}
                      >
                        {button.label}
                      </button>
                    ))
                  ) : product.catalogs && product.catalogs.length > 0 ? (
                    product.catalogs.map((catalog, idx) => (
                      <button 
                        key={idx}
                        className="product-button catalog-button"
                        onClick={() => handleCatalog(catalog.url)}
                      >
                        {catalog.label}
                      </button>
                    ))
                  ) : product.catalogUrl ? (
                    <button 
                      className="product-button catalog-button"
                      onClick={() => handleCatalog(product.catalogUrl)}
                    >
                      Catalog
                    </button>
                  ) : (
                    <>
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
                    </>
                  )}
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
