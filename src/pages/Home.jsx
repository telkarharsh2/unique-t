import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import logoImg from '../assets/images/withoutbg.png';
import Hero from '../components/Hero/Hero';
import Facilities from '../components/Facilities/Facilities';
import AboutUs from '../components/AboutUs/AboutUs';
import WhyChooseUs from '../components/WhyChooseUs/WhyChooseUs';

import MissionObjectives from '../components/MissionObjectives/MissionObjectives';
import Footer from '../components/Footer/Footer';

const Home = () => {
  return (
    <>
      {/* Top Right Logo */}
      <div className="position-absolute end-0 pe-4 z-3" style={{ top: '-40px' }}>
        <div className="d-flex align-items-center justify-content-center"
          style={{ width: '200px', height: '200px' }}>
          <img src={logoImg} alt="Unique T Fabric" className="img-fluid object-fit-contain" />
        </div>
      </div>

      <Navbar />
      <Hero />
      <Facilities />
      <AboutUs />
      <WhyChooseUs />
      <MissionObjectives />
      <Footer />
    </>
  );
};

export default Home;