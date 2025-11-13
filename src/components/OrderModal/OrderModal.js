import React, { useState, useEffect } from 'react';
import Lottie from 'lottie-react';
import successAnimation from '../../DashBoard.json/Message Sent Successfully _ Plane.json';
import './OrderModal.css';

const OrderModal = ({ onClose, department }) => {
  const [formData, setFormData] = useState({
    customerType: '', // 'new' or 'registered'
    companyName: '',
    customerName: '',
    customerAddress: '',
    companyEmail: '',
    companyPhone: '',
    companyType: '',
    crNumber: '',
    vatNumber: '',
    road: '',
    building: '',
    block: '',
    city: '',
    postalCode: '',
    products: [],
    paymentMethod: '',
    advancePayment: '',
    salesmanName: '',
    orderStatus: 'normal',
    description: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [showSuccessAnimation, setShowSuccessAnimation] = useState(false);

  // PMI IT Products list
  const itProducts = [
    'WebTailor', 'FlexSite', 'FlowPay ST', 'FlowPay AD', 'FlowPay PRO', 
    'WorkFlow', 'MonoMarket', 'EstateLink', 'WorkHub for Companies', 
    'InfoEdge', 'VetCare', 'CureLink', 'DashBoard', 'Analytics Pro', 'CloudSync'
  ];

  // PMI Medical Products list
  const medicalProducts = [
    'SHOFO', 'BISICO', 'CHM', 'SANCTUARY', 'AL MARAM', 'STARLYNER',
    'Medical Product 7', 'Medical Product 8', 'Medical Product 9',
    'Medical Product 10', 'Medical Product 11', 'Medical Product 12'
  ];

  // Select products based on department
  const products = department === 'PMI Medical' ? medicalProducts : itProducts;

  // Auto-fill salesman name from localStorage (from login session) if it matches available options
  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser && (loggedInUser === 'Dr Ahmed' || loggedInUser === 'Eng Jahan')) {
      setFormData(prev => ({
        ...prev,
        salesmanName: loggedInUser
      }));
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox' && name === 'customerType') {
      // For customer type checkboxes, only allow one selection
      setFormData(prev => ({
        ...prev,
        [name]: checked ? value : ''
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value
      }));
    }
  };

  const handleProductChange = (product) => {
    setFormData(prev => ({
      ...prev,
      products: prev.products.includes(product)
        ? prev.products.filter(p => p !== product)
        : [...prev.products, product]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      const timestamp = new Date().toLocaleString('en-GB', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true,
        timeZoneName: 'short'
      });

      // Prepare form data for Web3Forms
      const formDataToSend = new FormData();
      
      // Basic Order Information
      formDataToSend.append('department', department || 'PMI IT');
      formDataToSend.append('customer_type', formData.customerType === 'new' ? 'NEW CUSTOMER' : 'REGISTERED CUSTOMER');
      formDataToSend.append('company_name', formData.companyName);
      formDataToSend.append('customer_name', formData.customerName);
      
      // New Customer Information
      if (formData.customerType === 'new') {
        formDataToSend.append('company_email', formData.companyEmail);
        formDataToSend.append('company_phone', formData.companyPhone);
        formDataToSend.append('company_type', formData.companyType);
        formDataToSend.append('cr_number', formData.crNumber);
        formDataToSend.append('vat_number', formData.vatNumber);
        formDataToSend.append('address_road', formData.road);
        formDataToSend.append('address_building', formData.building);
        formDataToSend.append('address_block', formData.block);
        formDataToSend.append('address_city', formData.city);
        formDataToSend.append('address_postal_code', formData.postalCode);
      } else {
        formDataToSend.append('customer_status', 'Already registered in PMI system - no additional information required');
      }
      
      // Products
      formDataToSend.append('products', formData.products.join(', '));
      
      // Payment Information
      formDataToSend.append('payment_method', formData.paymentMethod);
      formDataToSend.append('advance_payment', formData.advancePayment);
      
      // Sales Information
      formDataToSend.append('salesman_name', formData.salesmanName);
      
      // Order Status
      formDataToSend.append('order_status', formData.orderStatus || 'normal');
      
      // Description
      formDataToSend.append('description', formData.description || 'No additional description provided');
      
      // Timestamp
      formDataToSend.append('order_timestamp', timestamp);
      
      // Web3Forms Configuration
      // Add Web3Forms access key from environment variable
      const accessKey = process.env.REACT_APP_WEB3FORMS_ACCESS_KEY || '05af0c14-df7b-45c3-9572-48b91a5385f8';
      formDataToSend.append('access_key', accessKey);
      
      // Set recipient email
      formDataToSend.append('to', 'pmiteam@pmi-me.net');
      
      // Set subject
      formDataToSend.append('subject', `🛒 New Order Collected - ${department || 'PMI IT'}`);

      // Send to Web3Forms
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus('success');
        setIsSubmitting(false);
        setShowSuccessAnimation(true);
        
        // Reset form after successful submission
        setFormData({
          customerType: '',
          companyName: '',
          customerName: '',
          customerAddress: '',
          companyEmail: '',
          companyPhone: '',
          companyType: '',
          crNumber: '',
          vatNumber: '',
          road: '',
          building: '',
          block: '',
          city: '',
          postalCode: '',
          products: [],
          paymentMethod: '',
          advancePayment: '',
          salesmanName: '',
          orderStatus: 'normal',
          description: ''
        });

        // Hide animation after 2.5 seconds, then close modal after 3 seconds
        setTimeout(() => {
          setShowSuccessAnimation(false);
        }, 2500);
        
        setTimeout(() => {
          onClose();
        }, 3000);
      } else {
        console.log('Error', data);
        throw new Error(data.message || 'Form submission failed');
      }

    } catch (error) {
      console.error('Web3Forms Error:', error);
      setSubmitStatus('error');
      setIsSubmitting(false);
    }
  };

  return (
    <div className="order-modal-overlay">
      <div className={`order-modal ${department === 'PMI Medical' ? 'pmi-medical-modal' : ''}`}>
        <div className="order-modal-header">
          <h2>Collect Order - {department}</h2>
          <button className="close-button" onClick={onClose}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="order-form">
          {!showSuccessAnimation && (
            <>
          {/* Customer Type Selection */}
          <div className="form-group">
            <label>Customer Type *</label>
            <div className="customer-type-selection">
              <label className="customer-type-option">
                <input
                  type="checkbox"
                  name="customerType"
                  value="registered"
                  checked={formData.customerType === 'registered'}
                  onChange={handleInputChange}
                />
                <span className="checkbox-custom"></span>
                <div className="option-content">
                  <strong>Registered Customer</strong>
                  <small>Already registered with PMI</small>
                </div>
              </label>
              <label className="customer-type-option">
                <input
                  type="checkbox"
                  name="customerType"
                  value="new"
                  checked={formData.customerType === 'new'}
                  onChange={handleInputChange}
                />
                <span className="checkbox-custom"></span>
                <div className="option-content">
                  <strong>New Customer</strong>
                  <small>First time ordering from PMI</small>
                </div>
              </label>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="companyName">Company Name *</label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleInputChange}
              required
              placeholder="Enter company name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="customerName">Customer Name *</label>
            <input
              type="text"
              id="customerName"
              name="customerName"
              value={formData.customerName}
              onChange={handleInputChange}
              required
              placeholder="Enter customer name"
            />
          </div>

          {/* New Customer Fields */}
          {formData.customerType === 'new' && (
            <>
              <div className="section-divider">
                <h3>Company Information</h3>
              </div>

              <div className="form-group">
                <label htmlFor="companyEmail">Company Email *</label>
                <input
                  type="email"
                  id="companyEmail"
                  name="companyEmail"
                  value={formData.companyEmail}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter company email"
                />
              </div>

              <div className="form-group">
                <label htmlFor="companyPhone">Company Phone *</label>
                <input
                  type="tel"
                  id="companyPhone"
                  name="companyPhone"
                  value={formData.companyPhone}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter company phone"
                />
              </div>

              <div className="form-group">
                <label htmlFor="companyType">Company Type *</label>
                <select
                  id="companyType"
                  name="companyType"
                  value={formData.companyType}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select company type</option>
                  <option value="Clinic">Clinic</option>
                  <option value="Medical center">Medical center</option>
                  <option value="Hospital">Hospital</option>
                  <option value="Individual institution">Individual institution</option>
                  <option value="Company">Company</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="crNumber">CR Number *</label>
                <input
                  type="text"
                  id="crNumber"
                  name="crNumber"
                  value={formData.crNumber}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter CR number"
                />
              </div>

              <div className="form-group">
                <label htmlFor="vatNumber">VAT Number *</label>
                <input
                  type="text"
                  id="vatNumber"
                  name="vatNumber"
                  value={formData.vatNumber}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter VAT number"
                />
              </div>

              <div className="section-divider">
                <h3>Address Information</h3>
              </div>

              <div className="form-group">
                <label htmlFor="road">Road *</label>
                <input
                  type="text"
                  id="road"
                  name="road"
                  value={formData.road || ''}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter road number (e.g., Road 2704)"
                />
              </div>

              <div className="form-group">
                <label htmlFor="building">Building *</label>
                <input
                  type="text"
                  id="building"
                  name="building"
                  value={formData.building || ''}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter building name/number"
                />
              </div>

              <div className="form-group">
                <label htmlFor="block">Block *</label>
                <input
                  type="text"
                  id="block"
                  name="block"
                  value={formData.block || ''}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter block number"
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="city">City *</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter city"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="postalCode">Postal Code *</label>
                  <input
                    type="text"
                    id="postalCode"
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter postal code"
                  />
                </div>
              </div>
            </>
          )}

          {/* Registered Customer - No additional fields needed */}

          <div className="form-group">
            <label>Products *</label>
            
            {/* Selected Products Tags */}
            {formData.products.length > 0 && (
              <div className="selected-products-tags">
                <h4>Selected Products:</h4>
                <div className="tags-container">
                  {formData.products.map((product, index) => (
                    <span key={index} className="product-tag">
                      {product}
                      <button
                        type="button"
                        className="remove-tag"
                        onClick={() => handleProductChange(product)}
                        title="Remove product"
                      >
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <line x1="18" y1="6" x2="6" y2="18"/>
                          <line x1="6" y1="6" x2="18" y2="18"/>
                        </svg>
                      </button>
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Products Selection Grid */}
            <div className="products-grid">
              {products.map((product, index) => (
                <label key={index} className="product-checkbox">
                  <input
                    type="checkbox"
                    checked={formData.products.includes(product)}
                    onChange={() => handleProductChange(product)}
                  />
                  <span>{product}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="paymentMethod">Payment Method *</label>
            <select
              id="paymentMethod"
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleInputChange}
              required
            >
              <option value="">Select payment method</option>
              <option value="Cash">Cash</option>
              <option value="Benefit">Benefit</option>
              <option value="Floos">Floos</option>
              <option value="Visa">Visa</option>
              <option value="Credit">Credit</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="advancePayment">Advance Payment *</label>
            <select
              id="advancePayment"
              name="advancePayment"
              value={formData.advancePayment}
              onChange={handleInputChange}
              required
            >
              <option value="">Select advance payment</option>
              <option value="0%">0%</option>
              <option value="25%">25%</option>
              <option value="50%">50%</option>
              <option value="75%">75%</option>
              <option value="100%">100%</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="salesmanName">Salesman Name *</label>
            <select
              id="salesmanName"
              name="salesmanName"
              value={formData.salesmanName}
              onChange={handleInputChange}
              required
            >
              <option value="">Select salesman</option>
              <option value="Dr Ahmed">Dr Ahmed</option>
              <option value="Eng Jahan">Eng Jahan</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="orderStatus">Order Status *</label>
            <select
              id="orderStatus"
              name="orderStatus"
              value={formData.orderStatus}
              onChange={handleInputChange}
              required
              className={`order-status-select status-${formData.orderStatus}`}
            >
              <option value="normal">Normal</option>
              <option value="urgent">Urgent</option>
              <option value="high-priority">High Priority</option>
              <option value="low-priority">Low Priority</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Enter additional details or special requirements"
              rows="4"
            />
          </div>

          <div className="form-actions">
            <button type="button" onClick={onClose} className="cancel-button">
              Cancel
            </button>
            <button 
              type="submit" 
              className="submit-button"
              disabled={isSubmitting || formData.products.length === 0}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Order'}
            </button>
          </div>
          </>
          )}

          {showSuccessAnimation && (
            <div className="success-animation-container">
              <Lottie 
                animationData={successAnimation}
                loop={false}
                autoplay={true}
                className="success-animation"
              />
              <p className="success-animation-text">
                Order submitted successfully! Email sent to pmiteam@pmi-me.net
              </p>
            </div>
          )}

          {submitStatus === 'success' && !showSuccessAnimation && (
            <div className="success-message">
              <span className="status-icon">✓</span>
              Order submitted successfully! Email sent to pmiteam@pmi-me.net
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="error-message">
              <span className="status-icon">✗</span>
              Failed to submit order. Please try again or contact support.
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default OrderModal;
