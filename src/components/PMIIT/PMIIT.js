import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router-dom';
import { useSEO } from '../../hooks/useSEO';
import Lottie from 'lottie-react';
import OrderModal from '../OrderModal/OrderModal';
import websiteBuildingAnimation from '../../DashBoard.json/Website building lottie animation.json';
import seoAnimation from '../../DashBoard.json/Seo isometric composition with human characters.json';
import paymentAnimation from '../../DashBoard.json/payment.json';
import onlinePaymentsAnimation from '../../DashBoard.json/Online Payments.json';
import businessAnalysisAnimation from '../../DashBoard.json/Business Analysis.json';
import wheelRotationAnimation from '../../DashBoard.json/Wheel Rotation.json';
import shoppingCartAnimation from '../../DashBoard.json/shopping cart (2).json';
import homeAnimation from '../../DashBoard.json/Home.json';
import companyFormAnimation from '../../DashBoard.json/Company Form.json';
import verificationAnimation from '../../DashBoard.json/verification.json';
import animalCareAnimation from '../../DashBoard.json/Animal care Loading.json';
import doctorAnimation from '../../DashBoard.json/Doctor.json';
import loadingTextAnimation from '../../DashBoard.json/Loading text.json';
import './PMIIT.css';

const PMIIT = () => {
  const navigate = useNavigate();
  const [showOrderModal, setShowOrderModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const backgroundRef = useRef(null);
  const containerRef = useRef(null);
  const [animationCount, setAnimationCount] = useState(1);
  const [lastAnimationHeight, setLastAnimationHeight] = useState(null);
  
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
      window.removeEventListener('load', handlePageLoad);
    };
  }, []);

  // Calculate number of animations needed and update background height to match page content
  useEffect(() => {
    const updateBackgroundHeight = () => {
      if (containerRef.current && backgroundRef.current) {
        const containerHeight = containerRef.current.scrollHeight;
        const viewportHeight = window.innerHeight;
        // Calculate how many full viewport heights we need
        const neededCount = Math.ceil(containerHeight / viewportHeight);
        setAnimationCount(neededCount);
        
        // Calculate remaining height for the last animation
        const fullVhCount = Math.floor(containerHeight / viewportHeight);
        const remainingHeight = containerHeight - (fullVhCount * viewportHeight);
        setLastAnimationHeight(remainingHeight > 0 ? remainingHeight : viewportHeight);
        
        // Set background height to exactly match container height
        backgroundRef.current.style.height = `${containerHeight}px`;
      }
    };

    // Small delay to ensure DOM is fully rendered
    const timeoutId = setTimeout(updateBackgroundHeight, 100);
    
    // Update on mount and resize
    updateBackgroundHeight();
    window.addEventListener('resize', updateBackgroundHeight);
    window.addEventListener('scroll', updateBackgroundHeight);
    
    // Use MutationObserver to watch for content changes
    const observer = new MutationObserver(updateBackgroundHeight);
    if (containerRef.current) {
      observer.observe(containerRef.current, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ['style', 'class']
      });
    }

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', updateBackgroundHeight);
      window.removeEventListener('scroll', updateBackgroundHeight);
      observer.disconnect();
    };
  }, []);
  
  // SEO configuration
  useSEO({
    title: "PMI IT - Detailing Aids & Solutions",
    description: "Explore our comprehensive IT solutions and detailing aids. Professional software tools and services for modern businesses.",
    keywords: "PMI IT, detailing aids, IT solutions, software tools, business solutions",
    canonical: "https://pmi-showroom-website.com/pmi-it",
    ogTitle: "PMI IT - Detailing Aids & Solutions",
    ogDescription: "Explore our comprehensive IT solutions and detailing aids. Professional software tools and services for modern businesses.",
    ogUrl: "https://pmi-showroom-website.com/pmi-it",
    twitterTitle: "PMI IT - Detailing Aids & Solutions",
    twitterDescription: "Explore our comprehensive IT solutions and detailing aids. Professional software tools and services for modern businesses."
  });

  const itProducts = [
    { name: "WebTailor", logo: "lottie", animation: websiteBuildingAnimation },
    { name: "FlexSite", logo: "lottie", animation: seoAnimation },
    { name: "FlowPay ST", logo: "lottie", animation: paymentAnimation },
    { name: "FlowPay AD", logo: "lottie", animation: onlinePaymentsAnimation },
    { name: "FlowPay PRO", logo: "lottie", animation: businessAnalysisAnimation },
    { name: "WorkFlow", logo: "lottie", animation: wheelRotationAnimation },
    { name: "MonoMarket", logo: "lottie", animation: shoppingCartAnimation },
    { name: "EstateLink", logo: "lottie", animation: homeAnimation },
    { name: "WorkHub for Companies", logo: "lottie", animation: companyFormAnimation },
    { name: "InfoEdge", logo: "lottie", animation: verificationAnimation },
    { name: "VetCare", logo: "lottie", animation: animalCareAnimation },
    { name: "CureLink", logo: "lottie", animation: doctorAnimation }
  ];

  const handleDetailingAids = (productName) => {
    if (productName === "WebTailor") {
      window.open('https://drive.google.com/file/d/1fhv8QN33UYoY_DCHbuE_QPjWZ-N98LUe/view?usp=drive_link', '_blank');
    } else {
      // Navigate to detailing aids page for the product
      navigate(`/detailing-aids/PMI IT/${productName}`);
    }
  };

  const handleDemo = (productName) => {
    // Demo URLs mapping
    const demoUrls = {
      "WebTailor": '/webtailor-demo',
      "FlowPay ST": 'https://posbasic.pmi-it-solutions.com/web/login',
      "FlowPay AD": 'https://posadvanced.pmi-it-solutions.com/web/login',
      "FlowPay PRO": 'https://pospro.pmi-it-solutions.com/web/login',
      "WorkFlow": 'https://garage.pmi-it-solutions.com/web/web/login',
      "MonoMarket": 'https://health.care.pmi-me.net/web/login',
      "EstateLink": 'https://realstate.pmi-it-solutions.com/web/login',
      "InfoEdge": 'https://dashboard.pmi-it-solutions.com/web/login',
      "VetCare": 'https://vet.pmi-it-solutions.com/web/login',
      "CureLink": 'https://hms.pmi-it-solutions.com/web/login'
    };

    const demoUrl = demoUrls[productName];
    
    if (demoUrl) {
      // Check if it's an external URL (starts with http)
      if (demoUrl.startsWith('http')) {
        window.open(demoUrl, '_blank', 'noopener,noreferrer');
      } else {
        // Internal route navigation
        navigate(demoUrl);
      }
    } else {
      console.log(`No demo URL found for ${productName}`);
    }
  };

  return (
    <React.Fragment>
    {/* Loading Overlay - Show first, before everything */}
    {isLoading && (
      <div className={`pmi-it-loading-overlay ${isFadingOut ? 'fade-out' : ''}`}>
        <div className="pmi-it-loading-content">
          <Lottie 
            animationData={loadingTextAnimation}
            loop={true}
            autoplay={true}
            className="pmi-it-loading-animation"
          />
        </div>
      </div>
    )}
    
    {/* Page Content - Hidden while loading */}
    <div className={`pmi-it-container ${!isLoading ? 'loading-complete' : ''}`} ref={containerRef} style={{ opacity: isLoading ? 0 : 1, pointerEvents: isLoading ? 'none' : 'auto', visibility: isLoading ? 'hidden' : 'visible' }}>
      {/* Full Page Background Image - Repeating Vertically */}
      <div className="page-background-animation" ref={backgroundRef}>
        {[...Array(animationCount)].map((_, index) => {
          const isLast = index === animationCount - 1;
          const height = isLast && lastAnimationHeight ? `${lastAnimationHeight}px` : '100vh';
          return (
            <div 
              key={index}
              style={{ 
                height: height,
                width: '100%',
                margin: 0,
                padding: 0,
                lineHeight: 0,
                fontSize: 0,
                overflow: 'hidden',
                position: 'relative',
                display: 'block',
                border: 'none',
                outline: 'none'
              }}
            >
              <img 
                src="https://res.cloudinary.com/dvybb2xnc/image/upload/v1762064431/Screenshot_2025-11-02_092017_biizor.png"
                alt="Background Pattern"
                className="background-image"
                style={{ 
                  margin: 0,
                  padding: 0,
                  display: 'block',
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>
          );
        })}
      </div>
      <header className="pmi-it-header">
        <div className="hero-image-background">
          <img 
            src="https://res.cloudinary.com/dvybb2xnc/image/upload/v1761637830/2_s16lpp.png"
            alt="PMI IT Background"
            className="hero-bg-image"
            decoding="async"
          />
        </div>
        <div className="header-content">
        </div>
      </header>

      {/* Merged Section: Social Icons (Fixed) + Moving Bar (Background) */}
      <section className="social-icons-moving-bar-section">
        {/* Moving Bar Background */}
        <div className="moving-bar-container">
          <div className="moving-bar-content">
            {/* Multiple sets for infinite seamless scrolling - 6 sets for smooth continuity */}
            {[...Array(6)].map((_, setIndex) => (
              <React.Fragment key={setIndex}>
                <div className="moving-bar-icon">
                  <Lottie 
                    animationData={websiteBuildingAnimation}
                    loop={true}
                    autoplay={true}
                    className="moving-bar-lottie"
                  />
                </div>
                <div className="moving-bar-icon">
                  <Lottie 
                    animationData={companyFormAnimation}
                    loop={true}
                    autoplay={true}
                    className="moving-bar-lottie"
                  />
                </div>
                <div className="moving-bar-icon">
                  <Lottie 
                    animationData={verificationAnimation}
                    loop={true}
                    autoplay={true}
                    className="moving-bar-lottie"
                  />
                </div>
                <div className="moving-bar-icon">
                  <Lottie 
                    animationData={seoAnimation}
                    loop={true}
                    autoplay={true}
                    className="moving-bar-lottie"
                  />
                </div>
                <div className="moving-bar-icon">
                  <Lottie 
                    animationData={shoppingCartAnimation}
                    loop={true}
                    autoplay={true}
                    className="moving-bar-lottie"
                  />
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
        
        {/* Fixed Social Icons on Top */}
        <div className="social-icons-container">
          <a 
            href="https://it-solutions.pmi-me.net/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-icon"
            title="Visit PMI IT Solutions Website"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="2" y1="12" x2="22" y2="12"></line>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>
          </a>
          <a 
            href="mailto:it.solutions@pmigroup.me"
            className="social-icon"
            title="Send us an email"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </a>
          <a 
            href="https://wa.me/97332009540"
            target="_blank" 
            rel="noopener noreferrer"
            className="social-icon whatsapp-icon"
            title="Contact us on WhatsApp"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
            </svg>
          </a>
          <a 
            href="https://www.instagram.com/pmi_it?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank" 
            rel="noopener noreferrer"
            className="social-icon instagram-icon"
            title="Follow us on Instagram"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
            </svg>
          </a>
          <button 
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              console.log('Order icon clicked, opening modal');
              console.log('showOrderModal before:', showOrderModal);
              console.log('isLoading:', isLoading);
              if (!isLoading) {
                setShowOrderModal(true);
                console.log('showOrderModal set to true');
              } else {
                console.log('Page still loading, cannot open modal');
              }
            }}
            className="social-icon order-icon"
            title="Collect Orders"
            type="button"
            disabled={isLoading}
            style={{ 
              cursor: isLoading ? 'not-allowed' : 'pointer', 
              pointerEvents: isLoading ? 'none' : 'auto', 
              position: 'relative', 
              zIndex: 100,
              opacity: isLoading ? 0.5 : 1
            }}
          >
            <Lottie 
              animationData={shoppingCartAnimation}
              loop={true}
              autoplay={true}
              className="order-lottie-icon"
              style={{ pointerEvents: 'none' }}
            />
          </button>
        </div>
      </section>
      
      <main className="pmi-it-main">
        <section className="products-section">
          <div className="products-grid">
            {itProducts.map((product, index) => (
              <div key={index} className="product-card">
                <div className="product-logo">
                  {product.logo === "lottie" ? (
                    <Lottie 
                      animationData={product.animation}
                      className="product-lottie-animation"
                      loop={true}
                      autoplay={true}
                    />
                  ) : (
                    <span className="product-logo-icon">{product.logo}</span>
                  )}
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
    
    {/* Order Modal - Render using portal to ensure it's on top */}
    {showOrderModal && typeof document !== 'undefined' ? createPortal(
      <OrderModal 
        onClose={() => {
          console.log('Closing modal');
          setShowOrderModal(false);
        }}
        department="PMI IT"
      />,
      document.body
    ) : null}
    </React.Fragment>
  );
};

export default PMIIT;
