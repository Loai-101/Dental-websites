import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSEO } from '../../hooks/useSEO';
import './DetailingAids.css';

const DetailingAids = () => {
  const { department, product } = useParams();
  const navigate = useNavigate();

  // SEO configuration
  useSEO({
    title: `${department} - ${product} Detailing Aids`,
    description: `Detailed information and aids for ${product} in ${department} department.`,
    keywords: `${department}, ${product}, detailing aids, information`,
    canonical: `https://pmi-showroom-website.com/detailing-aids/${department}/${product}`,
    ogTitle: `${department} - ${product} Detailing Aids`,
    ogDescription: `Detailed information and aids for ${product} in ${department} department.`,
    ogUrl: `https://pmi-showroom-website.com/detailing-aids/${department}/${product}`,
    twitterTitle: `${department} - ${product} Detailing Aids`,
    twitterDescription: `Detailed information and aids for ${product} in ${department} department.`
  });

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="detailing-aids-container">
      <header className="detailing-aids-header">
        <div className="header-content">
          <button onClick={handleBack} className="back-button">
            ← Back
          </button>
          <h1 className="page-title">{department} - {product} Detailing Aids</h1>
        </div>
      </header>

      <main className="detailing-aids-main">
        <section className="product-info-section">
          <div className="product-info-card">
            <h2 className="product-name">{product}</h2>
            <p className="product-description">
              Detailed information and aids for {product} in the {department} department.
            </p>
            
            <div className="detailing-content">
              <h3>Product Details</h3>
              <p>
                This section contains comprehensive detailing aids and information for {product}.
                Here you can find detailed specifications, usage guidelines, and support materials.
              </p>
              
              <h3>Features</h3>
              <ul>
                <li>Comprehensive product information</li>
                <li>Usage guidelines and best practices</li>
                <li>Technical specifications</li>
                <li>Support and documentation</li>
              </ul>
              
              <h3>Resources</h3>
              <div className="resources-grid">
                <div className="resource-item">
                  <h4>Documentation</h4>
                  <p>Complete product documentation and user guides</p>
                </div>
                <div className="resource-item">
                  <h4>Tutorials</h4>
                  <p>Step-by-step tutorials and walkthroughs</p>
                </div>
                <div className="resource-item">
                  <h4>Support</h4>
                  <p>Technical support and troubleshooting guides</p>
                </div>
                <div className="resource-item">
                  <h4>Updates</h4>
                  <p>Latest updates and version information</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DetailingAids;
