import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSEO } from '../../hooks/useSEO';
import Lottie from 'lottie-react';
import OrderModal from '../OrderModal/OrderModal';
import dashboardAnimation from '../../DashBoard.json/DashBoard.json';
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
import './PMIIT.css';

const PMIIT = () => {
  const navigate = useNavigate();
  const [showOrderModal, setShowOrderModal] = useState(false);
  
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
    { name: "TrendSpark PRO", logo: "📊" },
    { name: "TrendSpark Plus", logo: "📈" },
    { name: "TrendSpark", logo: "📉" },
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
    if (productName === "WebTailor") {
      navigate('/webtailor-demo');
    } else {
      console.log(`View Demo for ${productName}`);
      // Add your demo logic here for other products
    }
  };

  return (
    <div className="pmi-it-container">
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
          <div className="social-icons">
            <a 
              href="https://it-solutions.pmi-me.net/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon website-icon"
              title="Visit our website"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <line x1="2" y1="12" x2="22" y2="12"/>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
              </svg>
            </a>
            <a 
              href="mailto:it.solutions@pmigroup.me"
              className="social-icon email-icon"
              title="Send us an email"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
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
              href="https://www.instagram.com/pmi_it?utm_source=ig_web_button_share_sheet&igsh=MW9ydjRtdWRwMWgweQ=="
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
              onClick={() => setShowOrderModal(true)}
              className="social-icon order-icon"
              title="Collect Orders"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 11H5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2h-4"/>
                <polyline points="9,11 9,7 15,7 15,11"/>
                <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"/>
                <line x1="12" y1="15" x2="12" y2="19"/>
                <line x1="9" y1="17" x2="15" y2="17"/>
              </svg>
            </button>
          </div>
        </div>
      </header>
      
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
      
      {showOrderModal && (
        <OrderModal 
          onClose={() => setShowOrderModal(false)}
          department="PMI IT"
        />
      )}
    </div>
  );
};

export default PMIIT;
