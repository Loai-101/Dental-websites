import React from 'react';
import './Loading.css';

const Loading = () => {
  return (
    <div className="loading-container">
      <div className="loading-content">
        <div className="loading-logo">
          <img 
            src="https://res.cloudinary.com/dvybb2xnc/image/upload/f_png,w_200,h_200,c_scale,q_auto/v1751976489/PMI_Circile_Purple_dypvtf.ai"
            alt="PMI Medical Logo"
            className="loading-logo-image"
            onError={(e) => {
              console.log('PMI Logo failed to load, showing fallback');
              e.target.style.display = 'none';
              const fallback = e.target.nextElementSibling;
              if (fallback) {
                fallback.style.display = 'flex';
              }
            }}
          />
          <div className="logo-fallback" style={{ display: 'none' }}>
            <span className="logo-initials">PMI</span>
          </div>
        </div>
        <h1 className="loading-title">PMI Medical websites Showroom</h1>
        <div className="loading-spinner">
          <div className="spinner"></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
