import React from 'react';

const LegalModal = ({ isOpen, onClose, title, content }) => {
  if (!isOpen) return null;

  return (
    <>
      <div className="modal fade show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(8px)' }} tabIndex="-1" role="dialog">
        <div className="modal-dialog modal-dialog-centered modal-lg modal-dialog-scrollable" role="document" data-aos="zoom-in" data-aos-duration="400">
          <div className="modal-content border-0 shadow-lg rounded-5 overflow-hidden" style={{ boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}>
            <div className="modal-header bg-maroon text-white border-0 p-4 position-relative">
              <div className="position-absolute bottom-0 start-0 w-100" style={{ height: '50px', background: 'linear-gradient(to top, rgba(0,0,0,0.1), transparent)' }}></div>
              <h3 className="modal-title fw-bold text-center w-100" style={{ fontFamily: 'Playfair Display', letterSpacing: '1px' }}>{title}</h3>
              <button type="button" className="btn-close btn-close-white opacity-75 hover-opacity-100 position-absolute end-0 top-0 m-4" onClick={onClose} aria-label="Close"></button>
            </div>
            <div className="modal-body p-5 bg-white">
              {/* Content would be dynamic in a real app, placeholder for now */}
              {content ? <div dangerouslySetInnerHTML={{ __html: content }} /> : (
                <div className="text-secondary" style={{ lineHeight: '1.9', fontSize: '1.05rem' }}>
                  <p className="drop-cap mb-4">
                    <span className="fs-1 fw-bold text-maroon float-start me-2 lh-1">L</span>orem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                  <p className="mb-4">
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
                  </p>
                  <div className="p-4 bg-light rounded-4 border border-secondary border-opacity-10 my-4">
                    <h6 className="text-dark fw-bold mb-2">Key Highlights</h6>
                    <ul className="mb-0 ps-3">
                      <li className="mb-2">Privacy & Data Protection protocols.</li>
                      <li className="mb-2">Transparent refund and cancellation terms.</li>
                      <li>Commitment to ethical sourcing and user safety.</li>
                    </ul>
                  </div>
                  <p className="mb-0 text-muted small fst-italic text-end">Last updated: {new Date().toLocaleDateString()}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="modal-backdrop fade show"></div>
    </>
  );
};

export default LegalModal;