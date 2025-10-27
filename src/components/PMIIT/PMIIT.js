import React from 'react';
import { useSEO } from '../../hooks/useSEO';
import Lottie from 'lottie-react';
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
    console.log(`View Detailing Aids for ${productName}`);
    // Add your navigation logic here
  };

  const handleDemo = (productName) => {
    console.log(`View Demo for ${productName}`);
    // Add your demo logic here
  };

  return (
    <div className="pmi-it-container">
      <header className="pmi-it-header">
        <div className="lottie-background">
          <Lottie 
            animationData={dashboardAnimation}
            className="dashboard-animation"
            loop={true}
            autoplay={true}
          />
        </div>
        <div className="header-content">
          <h1 className="page-title">PMI IT Solutions Products</h1>
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
    </div>
  );
};

export default PMIIT;
