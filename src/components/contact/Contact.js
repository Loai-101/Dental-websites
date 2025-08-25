import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <header className="contact-header">
        <h1 className="contact-title">Contact Us</h1>
      </header>

      <main className="contact-main">
        <div className="contact-cards-section">
          <h2 className="contact-cards-title">Get in touch with our team for any inquiries</h2>
          <div className="contact-cards-grid">
            {/* Card 1 - PMI */}
            <div className="contact-card pmi-medical">
              <div className="contact-card-logo">
                <img 
                  src="https://res.cloudinary.com/dvybb2xnc/image/upload/f_jpg,w_200,h_200,c_fill,q_auto/v1751977454/PMI_Circile_Gray_wiu9mh.ai" 
                  alt="PMI Logo" 
                  className="pm-logo-img"
                  onError={(e) => {
                    console.log('PMI Logo failed to load, showing fallback');
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                <div className="pm-logo" style={{display: 'none'}}>
                  <span className="pm-p">P</span>
                  <span className="pm-m">M</span>
                </div>
              </div>
              <h3 className="contact-card-title">PMI</h3>
              <a 
                href="https://pmi-me.net/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="contact-card-button visit-website"
              >
                Visit Website
              </a>
            </div>

            {/* Card 2 - IT SOLUTIONS */}
            <div className="contact-card it-solutions">
              <div className="contact-card-logo">
                <img 
                  src="https://res.cloudinary.com/dvybb2xnc/image/upload/f_jpg,w_200,h_200,c_fill,q_auto/v1751976489/PMI_Circile_Purple_dypvtf.ai" 
                  alt="PMI IT Logo" 
                  className="pm-logo-img"
                  onError={(e) => {
                    console.log('PMI IT Logo failed to load, showing fallback');
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                <div className="pm-logo" style={{display: 'none'}}>
                  <span className="pm-p">P</span>
                  <span className="pm-m">M</span>
                </div>
              </div>
              <h3 className="contact-card-title">IT SOLUTIONS</h3>
              <a 
                href="https://it-solutions.pmi-me.net/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="contact-card-button visit-website"
              >
                Visit Website
              </a>
            </div>

            {/* Card 3 - WHATSAPP */}
            <div className="contact-card health-care">
              <div className="contact-card-logo">
                <img 
                  src="https://res.cloudinary.com/dvybb2xnc/image/upload/v1756125609/5968841_qhby9s.png" 
                  alt="WhatsApp Logo" 
                  className="pm-logo-img"
                  onError={(e) => {
                    console.log('WhatsApp Logo failed to load, showing fallback');
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                <div className="pm-logo" style={{display: 'none'}}>
                  <span className="pm-p">P</span>
                  <span className="pm-m">M</span>
                </div>
              </div>
              <h3 className="contact-card-title">WHATSAPP</h3>
              <a 
                href="https://wa.me/97313676757" 
                target="_blank" 
                rel="noopener noreferrer"
                className="contact-card-button visit-website"
              >
                WhatsApp Chat
              </a>
            </div>

            {/* Card 4 - EMAIL */}
            <div className="contact-card advertising">
              <div className="contact-card-logo">
                <img 
                  src="https://res.cloudinary.com/dvybb2xnc/image/upload/v1756125912/emoji-email-text-messaging-emoji_wzzxjm.jpg" 
                  alt="Email Logo" 
                  className="pm-logo-img"
                  onError={(e) => {
                    console.log('Email Logo failed to load, showing fallback');
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                <div className="pm-logo" style={{display: 'none'}}>
                  <span className="pm-p">P</span>
                  <span className="pm-m">M</span>
                </div>
              </div>
              <h3 className="contact-card-title">EMAIL</h3>
              <a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=pmiteam@pmi-me.net&su=Contact from PMI Website" 
                target="_blank" 
                rel="noopener noreferrer"
                className="contact-card-button visit-website"
              >
                Send Email
              </a>
            </div>


          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
