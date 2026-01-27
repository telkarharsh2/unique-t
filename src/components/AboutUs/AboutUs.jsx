import React from 'react';
import aboutVideo from '../../assets/videos/first.mp4';

const AboutUs = () => {
  return (
    <section id="about" className="py-5 bg-white overflow-hidden">
      <div className="container py-5">
        <div className="row align-items-center g-5">

          <div className="col-lg-6 position-relative" data-aos="fade-right">
            <div className="position-relative rounded-4 overflow-hidden shadow-lg border border-3 border-light">
              <div className="ratio ratio-4x3">
                <video
                  src={aboutVideo}
                  className="object-fit-cover w-100 h-100"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-10"></div>
            </div>
            {/* Decorative element */}
            <div className="position-absolute top-0 start-0 translate-middle opacity-25 z-n1">
              <div className="bg-warning rounded-circle" style={{ width: '200px', height: '200px', filter: 'blur(60px)' }}></div>
            </div>
          </div>

          <div className="col-lg-6" data-aos="fade-left">
            <h6 className="text-warning text-uppercase letter-spacing-2 mb-2">Our Story</h6>
            <h2 className="display-4 fw-bold mb-4 font-heading">About Us</h2>
            <p className="lead text-muted mb-4">
              Unique t bridges the gap between traditional Indian weaving and modern luxury. Experience royalty in every thread.
            </p>
            <figure className="bg-light p-4 rounded-3 border-start border-4 border-warning mb-4">
              <blockquote className="blockquote mb-0">
                <p className="fs-6 fst-italic text-secondary">
                  "Unique t is not just a brand; it is a celebration of India's rich textile heritage. We curate the finest fabrics that tell a story of craftsmanship, tradition, and timeless beauty."
                </p>
              </blockquote>
            </figure>

            <a href="https://thynktech.ltd/products/unique-t-fabric" className="btn btn-dark btn-lg rounded-pill px-5 shadow-sm hover-scale">
              Read Our Journey
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutUs;