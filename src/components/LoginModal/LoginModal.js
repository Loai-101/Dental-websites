import React, { useState } from 'react';
import Lottie from 'lottie-react';
import fingerprintAnimation from '../../DashBoard.json/Fingerprint Verification.json';
import './LoginModalStyles.css';

const LoginModal = ({ isOpen, onClose, onLogin, productName = '' }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check if first login has been used
  const isFirstLoginUsed = localStorage.getItem('pmi_first_login_used') === 'true';

  // Predefined accounts
  const accounts = {
    'loai': '38224411',
    'malik': '32003933',
    'jahan': '32000711',
    ...(isFirstLoginUsed ? {} : { 'pmi': '13676757' }) // Only add pmi account if first login not used
  };

  // Department configurations
  const getDepartmentConfig = (department) => {
    const configs = {
      'PMI IT': {
        color: '#8B5CF6',
        gradient: 'linear-gradient(135deg, #8B5CF6 0%, #A855F7 100%)',
        logo: 'https://res.cloudinary.com/dvybb2xnc/image/upload/f_png,w_150,h_150,c_scale,q_auto/v1752659104/PMI_Purple_o6ml7r.ai'
      },
      'PMI Medical': {
        color: '#3B82F6',
        gradient: 'linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)',
        logo: 'https://res.cloudinary.com/dvybb2xnc/image/upload/f_png,w_150,h_150,c_scale,q_auto/v1752659104/PMI_Blue_w7w1zn.ai'
      },
      'PMI Advertising': {
        color: '#D97706',
        gradient: 'linear-gradient(135deg, #D97706 0%, #B45309 100%)',
        logo: 'https://res.cloudinary.com/dvybb2xnc/image/upload/f_png,w_150,h_150,c_scale,q_auto/v1752659104/PMI_Brown_ooq0sv.ai'
      }
    };
    return configs[department] || configs['PMI IT'];
  };

  const departmentConfig = getDepartmentConfig(productName);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (accounts[username.toLowerCase()] === password) {
      setIsLoggedIn(true);
      
      // If this is the first login with 'pmi', mark it as used
      if (username.toLowerCase() === 'pmi' && !isFirstLoginUsed) {
        localStorage.setItem('pmi_first_login_used', 'true');
        console.log('🔐 First login with PMI account completed - account will be disabled for future logins');
      }
      
      // Send email notification
      sendLoginNotification(username, productName);
      
      // Call onLogin after a short delay to show the animation
      setTimeout(() => {
        onLogin(username);
        onClose();
        setIsLoggedIn(false);
        setUsername('');
        setPassword('');
        setError('');
      }, 2000); // Show animation for 2 seconds
    } else {
      setError('Invalid username or password');
    }
  };

  const sendLoginNotification = async (username, department) => {
    const currentDate = new Date();
    const timestamp = currentDate.toLocaleString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      timeZoneName: 'short'
    });

    const ipAddress = await getClientIP();
    const userAgent = navigator.userAgent;
    
    console.log('📧 Login notification logged successfully!');
    console.log(`Username: ${username}, Department: ${department}, Time: ${timestamp}`);
    console.log(`IP Address: ${ipAddress}, User Agent: ${userAgent}`);
    
    // Login notification logged successfully
    console.log('✅ Login notification logged successfully!');
  };

  const getClientIP = async () => {
    try {
      const response = await fetch('https://api.ipify.org?format=json');
      const data = await response.json();
      return data.ip;
    } catch (error) {
      return 'Unknown';
    }
  };

  const handleClose = () => {
    onClose();
    setUsername('');
    setPassword('');
    setError('');
    setIsLoggedIn(false);
  };

  if (!isOpen) return null;

  return (
    <div className="login-modal-overlay" onClick={handleClose}>
      <div className="login-modal" onClick={(e) => e.stopPropagation()}>
        <div 
          className="login-modal-header" 
          style={{ background: departmentConfig.gradient }}
        >
          {productName && (
            <div className="department-logo">
              <img 
                src={departmentConfig.logo}
                alt={`${productName} Logo`}
                className="department-logo-img"
                loading="lazy"
                decoding="async"
              />
            </div>
          )}
          <h2>Login Required</h2>
          <button className="close-button" onClick={handleClose}>×</button>
        </div>
        
        {productName && (
          <div className="product-info" style={{ background: `rgba(${departmentConfig.color}, 0.1)` }}>
            <p style={{ color: 'black' }}>Accessing: <strong style={{ color: 'black' }}>{productName}</strong> Detailing Aids</p>
          </div>
        )}
        
        {isLoggedIn ? (
          <div className="verification-section">
            <div className="fingerprint-animation">
              <Lottie 
                animationData={fingerprintAnimation}
                loop={true}
                autoplay={true}
              />
            </div>
            <p className="verification-text">Verifying Access...</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter username"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                required
              />
            </div>
            
            {error && <div className="error-message">{error}</div>}
            
            <div className="form-actions">
              <button 
                type="submit" 
                className="login-button"
                style={{ background: departmentConfig.gradient }}
              >
                Login
              </button>
              <button type="button" className="cancel-button" onClick={handleClose}>Cancel</button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default LoginModal;
