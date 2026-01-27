import React from 'react';

import video1 from '../../assets/videos/first.mp4';

const Hero = () => {
  return (
    <section id="home" className="position-relative vh-100 overflow-hidden bg-white">

      {/* Hero Carousel */}
      <div id="heroCarousel" className="carousel slide carousel-fade h-100" data-bs-ride="carousel">

        {/* Indicators */}
        <div className="carousel-indicators mb-5">
          <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="0" className="active" aria-current="true"></button>
          <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="1"></button>
          <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="2"></button>
        </div>

        <div className="carousel-inner h-100">

          {/* Slide 1 - Video 1 */}
          <div className="carousel-item active h-100">
            <div className="w-100 h-100 position-relative">
              <video
                src={video1}
                autoPlay
                muted
                loop
                className="d-block w-100 h-100 object-fit-cover"
              />
              <div className="position-absolute top-0 start-0 w-100 h-100"
                style={{ background: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.6))' }}></div>
            </div>
          </div>
        </div>
        
      </div>

      {/* Content Overlay */}
      <div
        className="position-absolute top-50 start-50 translate-middle text-center w-100"
        style={{ zIndex: 10 }}
      >
        <div className="container">
          <h5 className="text-warning tracking-wide text-uppercase mb-3" data-aos="fade-down" data-aos-delay="100">
            Unique t – Fabric India
          </h5>

          <h1 className="display-1 fw-bold text-white mb-4"
            style={{ fontFamily: 'Playfair Display', fontSize: 'clamp(3rem, 5vw, 6rem)', lineHeight: '1.1' }}
            data-aos="fade-up" data-aos-delay="200">
            Premium Fabrics.<br />
            <span className="fst-italic text-warning">Timeless Style.</span>
          </h1>

          <p className="lead text-white-50 mb-5 mx-auto"
            style={{ maxWidth: '600px' }}
            data-aos="fade-up" data-aos-delay="300">
            Premium Fabrics. Timeless Style. Coming Soon.
          </p>


        </div>
      </div>

    </section>
  );
};

export default Hero;