import React, { useState } from 'react';
import './Login.css';

const Login = ({ onLogin }) => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Simulate API call delay
    setTimeout(() => {
      if (credentials.username === 'pmi' && credentials.password === '13676757') {
        onLogin();
      } else {
        setError('Invalid username or password');
      }
      setIsLoading(false);
    }, 1000);
  };

  const handleAskForAccess = () => {
    const phoneNumber = '+97332009540';
    const message = 'Hello! I would like to request access to the PMI Medical Websites Showroom.';
    const whatsappUrl = `https://wa.me/${phoneNumber.replace('+', '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="login-container">
      <div className="login-background">
        <img 
          src="https://res.cloudinary.com/dvybb2xnc/image/upload/v1761480259/WhatsApp_Image_2025-10-26_at_12.56.52_e95f2b38_znbq3s.jpg"
          alt="Login Background"
          className="login-bg-image"
          decoding="async"
        />
      </div>
      <div className="login-card">
        <div className="login-header">
          <div className="login-logo">
            <img 
              src="https://res.cloudinary.com/dvybb2xnc/image/upload/f_png,w_200,h_200,c_scale,q_auto/v1751977454/PMI_Circile_Gray_wiu9mh.ai"
              alt="PMI Logo"
              className="login-logo-image"
              onError={(e) => {
                e.target.style.display = 'none';
                const fallback = e.target.nextElementSibling;
                if (fallback) {
                  fallback.style.display = 'flex';
                }
              }}
            />
            <div className="login-logo-fallback" style={{ display: 'none' }}>
              <span className="login-logo-initials">PMI</span>
            </div>
          </div>
          <h1 className="login-title">PMI Detailing Aids</h1>
          <p className="login-subtitle">Please sign in to continue</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="username" className="form-label">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={credentials.username}
              onChange={handleInputChange}
              className="form-input"
              placeholder="Enter your username"
              required
              disabled={isLoading}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={credentials.password}
              onChange={handleInputChange}
              className="form-input"
              placeholder="Enter your password"
              required
              disabled={isLoading}
            />
          </div>

          {error && (
            <div className="error-message">
              {error}
            </div>
          )}

          <button 
            type="submit" 
            className="login-button"
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="button-spinner">
                <div className="spinner"></div>
                Signing in...
              </div>
            ) : (
              'Sign In'
            )}
          </button>
        </form>

        <div className="login-divider">
          <span>or</span>
        </div>

        <button 
          type="button" 
          className="ask-access-button"
          onClick={handleAskForAccess}
          disabled={isLoading}
        >
          Ask for Access
        </button>
      </div>
    </div>
  );
};

export default Login;
