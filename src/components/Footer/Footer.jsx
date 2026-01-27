import React, { useState } from 'react';
import LegalModal from '../Modals/LegalModal';
import logoImg from '../../assets/images/logo.png';
import { Phone, Mail, Globe, MapPin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentPolicy, setCurrentPolicy] = useState('');

  const handleLegalClick = (e, policy) => {
    e.preventDefault();
    setCurrentPolicy(policy);
    setModalOpen(true);
  };

  const legalLinks = [
    'Legal Policies', 'Terms & Conditions', 'Privacy Policy', 'Refund & Cancellation Policy', 'License & Agreement'
  ];

  return (
    <>
      <footer className="footer-section pt-5 pb-4">
        <div className="footer-gradient-line"></div>

        <div className="container position-relative py-4" style={{ zIndex: 1 }}>
          <div className="row g-5">

            {/* Brand & Address */}
            <div className="col-lg-4 col-md-6" data-aos="fade-up">
              <h4 className="footer-brand-title text-uppercase">Unique t</h4>

              <div className="d-flex gap-3 mb-4">
                <div className="footer-icon-box flex-shrink-0 mt-1">
                  <MapPin size={18} />
                </div>
                <address className="text-secondary small fst-normal mb-0" style={{ lineHeight: '1.6' }}>
                  <strong className="text-dark d-block mb-1">Thynk Technology India</strong>
                  Office No. 1041, 10th Floor, Gera's Imperium Rise,<br />
                  Opp. Wipro Circle, Hinjewadi Phase 2,<br />
                  Pune - 411057
                </address>
              </div>

              <div className="d-flex flex-column gap-2">
                <a href="tel:08069640559" className="footer-contact-item">
                  <div className="footer-icon-box">
                    <Phone size={18} />
                  </div>
                  <span>08069640559</span>
                </a>
                <a href="mailto:support@thynktech.ltd" className="footer-contact-item">
                  <div className="footer-icon-box">
                    <Mail size={18} />
                  </div>
                  <span>support@thynktech.ltd</span>
                </a>
                <a href="https://www.thynktech.ltd" target="_blank" rel="noreferrer" className="footer-contact-item">
                  <div className="footer-icon-box">
                    <Globe size={18} />
                  </div>
                  <span>www.thynktech.ltd</span>
                </a>
              </div>
            </div>

            {/* Links */}
            <div className="col-lg-2 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <h6 className="text-dark mb-4 text-uppercase small opacity-75 fw-bold tracking-wider">Explore</h6>
              <ul className="list-unstyled d-flex flex-column gap-2">
                <li><a href="#home" className="footer-link small">Home</a></li>
                <li><a href="#about" className="footer-link small">About Us</a></li>
                <li><a href="#facilities" className="footer-link small">Facilities</a></li>
                <li><a href="#whyUs" className="footer-link small">Why Choose Us</a></li>
                <li><a href="#mission" className="footer-link small">Get App</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="200">
              <h6 className="text-dark mb-4 text-uppercase small opacity-75 fw-bold tracking-wider">Legal</h6>
              <ul className="list-unstyled d-flex flex-column gap-2">
                {legalLinks.map(link => (
                  <li key={link}>
                    <button onClick={(e) => handleLegalClick(e, link)} className="btn btn-link p-0 footer-link small text-start border-0 text-decoration-none">
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Logo/Newsletter Place */}
            <div className="col-lg-3 col-md-6 text-center text-lg-end" data-aos="fade-up" data-aos-delay="300">
              <div className="footer-logo-container mb-3">
                <img
                  src={logoImg}
                  alt="Unique T Fabric"
                  className="img-fluid"
                  style={{ width: '140px', height: 'auto' }}
                />
              </div>
              <p className="small text-secondary fst-italic">"Weaving stories, one thread at a time."</p>
            </div>

          </div>

          <div className="footer-bottom">
            <div className="row align-items-center">
              <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                <p className="text-secondary small mb-0 opacity-75">© 2026 Unique t - Fabric India.</p>
              </div>
              <div className="col-md-6 text-center text-md-end">
                <p className="text-secondary small mb-0 opacity-50 d-flex align-items-center justify-content-center justify-content-md-end gap-2">
                  Designed by Thynk Tech.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <LegalModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={currentPolicy}
      />
    </>
  );
};
export default Footer;