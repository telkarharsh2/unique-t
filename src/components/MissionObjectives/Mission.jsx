import React from 'react';

const Mission = () => {
  return (
    <section className="section-padding bg-dark text-white position-relative overflow-hidden">
      <div className="container">
        <div className="row align-items-center">
          
          {/* Text Content */}
          <div className="col-lg-6 mb-5 mb-lg-0 z-2">
            <h2 className="display-5 fw-bold text-warning mb-4">Your farm, now on your mobile!</h2>
            <p className="lead text-secondary mb-5">
              Download the app today for information on government schemes,
              market prices, and sales in the premium market.
            </p>
            
            <button className="btn btn-outline-light d-inline-flex align-items-center px-4 py-2 rounded-3">
              <div className="text-start">
                <small className="d-block text-uppercase" style={{ fontSize: '0.7rem' }}>Get it on</small>
                <span className="h6 mb-0 fw-bold">Google Play</span>
              </div>
            </button>
          </div>

          {/* Visual Mockup (CSS Shapes) */}
          <div className="col-lg-6 d-flex justify-content-center z-2">
            <div className="bg-white rounded-4 shadow-lg d-flex align-items-center justify-content-center" 
                 style={{ width: '260px', height: '450px', border: '8px solid #8B0000', transform: 'rotate(-5deg)' }}>
              <span className="text-dark fw-bold text-center px-4">App Preview<br/>Coming Soon</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Mission;