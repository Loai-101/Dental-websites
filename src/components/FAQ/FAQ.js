import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FAQ.css';

const FAQ = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact');
  };

  const stepsData = [
    {
      number: "1",
      title: "Contact Us",
      description: "Reach out to our team to start your project."
    },
    {
      number: "2", 
      title: "Share Your Information",
      description: "Provide your clinic logo, departments, doctors' details, and services."
    },
    {
      number: "3",
      title: "We Design & Develop", 
      description: "Our team creates a professional website tailored to your clinic's identity."
    },
    {
      number: "4",
      title: "Launch & Go Live",
      description: "After final review, your website is launched and ready for your patients."
    }
  ];

  return (
    <div className="faq-container">
      <header className="faq-header">
        <h1 className="faq-title">✨ Steps to Build Your Clinic Website</h1>
      </header>

      <main className="faq-main">
        <div className="faq-content">
          <section className="faq-section">
            <div className="steps-list">
              {stepsData.map((step, index) => (
                <div key={index} className="step-item">
                  <div className="step-number">{step.number}</div>
                  <div className="step-content">
                    <h3 className="step-title">{step.title}</h3>
                    <p className="step-description">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="faq-contact-section">
            <div className="faq-contact-card">
              <h2 className="faq-contact-title">Ready to Start Your Project?</h2>
              <p className="faq-contact-text">
                Get in touch with our team today and let's build your professional clinic website together.
              </p>
              <div className="faq-contact-buttons">
                <button className="faq-contact-button primary" onClick={handleContactClick}>Contact Us</button>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default FAQ;
