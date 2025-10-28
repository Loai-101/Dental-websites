import React from 'react';
import Lottie from 'lottie-react';
import fingerprintAnimation from '../../DashBoard.json/Fingerprint Verification.json';
import './Loading.css';

const Loading = () => {
  return (
    <div className="loading-container">
      <div className="loading-background">
        <img 
          src="https://res.cloudinary.com/dvybb2xnc/image/upload/v1761480259/WhatsApp_Image_2025-10-26_at_12.56.52_e95f2b38_znbq3s.jpg"
          alt="Loading Background"
          className="loading-bg-image"
          decoding="async"
        />
      </div>
      <div className="loading-content">
        <div className="loading-spinner">
          <Lottie 
            animationData={fingerprintAnimation}
            className="fingerprint-animation"
            loop={true}
            autoplay={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Loading;
