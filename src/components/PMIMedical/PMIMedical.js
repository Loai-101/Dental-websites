import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router-dom';
import { useSEO } from '../../hooks/useSEO';
import Lottie from 'lottie-react';
import OrderModal from '../OrderModal/OrderModal';
import shoppingCartAnimation from '../../DashBoard.json/shopping cart (2).json';
import loadingTextAnimation from '../../DashBoard.json/Loading text.json';
import './PMIMedical.css';

const PMIMedical = () => {
  const navigate = useNavigate();
  const [showOrderModal, setShowOrderModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const containerRef = useRef(null);
  
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
    { 
      name: "AL MARAM", 
      logo: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1763024941/WhatsApp_Image_2025-11-13_at_11.52.58_2ea78d56_ygocqm.jpg",
      customButtons: [
        { label: "Detailing Aids", url: "https://drive.google.com/file/d/1DLO79hbHBlf8mORvZm6gvXhLggSpODcH/view?usp=drive_link", className: "detailing-button" },
        { label: "Catalog", url: "https://drive.google.com/file/d/1z-7iFrYhvYQjYv1La0XBwa4Wm9wi7h9R/view?usp=drive_link", className: "catalog-button" }
      ]
    },
    { 
      name: "STARLYNER", 
      logo: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1763024944/WhatsApp_Image_2025-11-13_at_11.52.58_46e03b20_gb77ib.jpg",
      customButtons: [
        { label: "Detailing Aids", url: "https://drive.google.com/file/d/1jPs2-u8Qnd1C76GAmsGpCVw___RzeQr8/view?usp=drive_link", className: "detailing-button" },
        { label: "Catalog", url: "https://drive.google.com/file/d/1qy3fLpdsOYXorx_Whlhiyoxjr5wVcMRI/view?usp=drive_link", className: "catalog-button" }
      ]
    }
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

  // Handle page loading - wait for images and content to load
  useEffect(() => {
    let minimumDisplayTime = 2000; // Minimum time to show loading (2 seconds)
    const startTime = Date.now();
    
    const handlePageLoad = () => {
      // Wait for window to be fully loaded first
      if (document.readyState !== 'complete') {
        window.addEventListener('load', handlePageLoad, { once: true });
        return;
      }

      // Check if all images are loaded
      const images = containerRef.current?.querySelectorAll('img');
      
      const finishLoading = () => {
        const elapsedTime = Date.now() - startTime;
        const remainingTime = Math.max(0, minimumDisplayTime - elapsedTime);
        
        console.log('Page loaded, waiting', remainingTime, 'ms before hiding loader');
        
        setTimeout(() => {
          // Start fade out animation
          setIsFadingOut(true);
          // After fade out completes, hide loading completely
          setTimeout(() => {
            setIsLoading(false);
            console.log('Loading complete, page visible');
          }, 500); // Match fadeOutOverlay animation duration
        }, remainingTime);
      };
      
      if (images && images.length > 0) {
        let loadedCount = 0;
        const totalImages = images.length;
        let allLoaded = false;
        
        console.log('Found', totalImages, 'images to load');
        
        const checkImageLoad = () => {
          loadedCount++;
          console.log('Image loaded:', loadedCount, '/', totalImages);
          if (loadedCount === totalImages && !allLoaded) {
            allLoaded = true;
            console.log('All images loaded');
            // Wait a bit more for Lottie animations to initialize
            setTimeout(() => {
              finishLoading();
            }, 300);
          }
        };
        
        images.forEach((img) => {
          if (img.complete && img.naturalWidth !== 0) {
            checkImageLoad();
          } else {
            img.addEventListener('load', checkImageLoad, { once: true });
            img.addEventListener('error', checkImageLoad, { once: true }); // Continue even if image fails
          }
        });
        
        // If all images were already loaded
        if (loadedCount === totalImages) {
          setTimeout(() => {
            finishLoading();
          }, 300);
        }
        
        // Fallback: if images don't fire events, wait for minimum time
        setTimeout(() => {
          if (!allLoaded) {
            allLoaded = true;
            console.log('Timeout: forcing finish loading');
            finishLoading();
          }
        }, 5000);
      } else {
        // No images found yet, wait a bit and check again or wait minimum time
        setTimeout(() => {
          const retryImages = containerRef.current?.querySelectorAll('img');
          if (retryImages && retryImages.length > 0) {
            console.log('Retrying with', retryImages.length, 'images');
            handlePageLoad();
          } else {
            console.log('No images found, finishing loading');
            finishLoading();
          }
        }, 1000);
      }
    };

    // Delay to ensure DOM is fully rendered
    const timeoutId = setTimeout(handlePageLoad, 300);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      {/* Loading Overlay - Show first, before everything */}
      {isLoading && (
        <div className={`pmi-medical-loading-overlay ${isFadingOut ? 'fade-out' : ''}`}>
          <div className="pmi-medical-loading-content">
            <Lottie 
              animationData={loadingTextAnimation}
              loop={true}
              autoplay={true}
              className="pmi-medical-loading-animation"
            />
          </div>
        </div>
      )}
      
      {/* Page Content - Hidden while loading */}
      <div 
        className={`pmi-medical-container ${!isLoading ? 'loading-complete' : ''}`} 
        ref={containerRef} 
        style={{ 
          opacity: isLoading ? 0 : 1, 
          pointerEvents: isLoading ? 'none' : 'auto', 
          visibility: isLoading ? 'hidden' : 'visible' 
        }}
      >
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
        </div>
      </header>
      
      {/* Moving Bar Section */}
      <section className="moving-bar-section">
        <div className="moving-bar-container">
          <div className="moving-bar-content">
            {/* Multiple sets for infinite seamless scrolling */}
            {[...Array(3)].map((_, setIndex) => (
              <React.Fragment key={setIndex}>
                {medicalProducts
                  .filter(product => product.logo && product.logo.startsWith('http'))
                  .map((product, idx) => (
                    <React.Fragment key={`${setIndex}-${idx}`}>
                      <div className="moving-bar-item">
                        <img 
                          src={product.logo} 
                          alt={`${product.name} Logo`}
                          className="moving-bar-logo"
                          loading="lazy"
                          decoding="async"
                        />
                        <span className="moving-bar-name">{product.name}</span>
                      </div>
                      <span className="moving-bar-separator">•</span>
                    </React.Fragment>
                  ))}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact Icons Section */}
      <section className="contact-icons-section">
        <div className="contact-icons-container">
          <a 
            href={`https://wa.me/97313676757`}
            target="_blank" 
            rel="noopener noreferrer"
            className="contact-icon whatsapp-icon"
            title="Contact us on WhatsApp"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            <span className="contact-icon-label">WhatsApp</span>
          </a>
          <a 
            href="mailto:pmiteam@pmi-me.net"
            className="contact-icon email-icon"
            title="Send us an email"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
            <span className="contact-icon-label">Email</span>
          </a>
          <button 
            onClick={() => setShowOrderModal(true)}
            className="contact-icon order-icon"
            title="Collect Orders"
            type="button"
          >
            <Lottie 
              animationData={shoppingCartAnimation}
              loop={true}
              autoplay={true}
              className="order-lottie-icon"
            />
            <span className="contact-icon-label">Order</span>
          </button>
        </div>
      </section>
      
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
      
      {/* Order Modal */}
      {showOrderModal && typeof document !== 'undefined' ? createPortal(
        <OrderModal 
          onClose={() => setShowOrderModal(false)}
          department="PMI Medical"
        />,
        document.body
      ) : null}
      </div>
    </>
  );
};

export default PMIMedical;
