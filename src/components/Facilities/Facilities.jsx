import React from 'react';
import { Tag, Globe, Truck, CheckCircle, ShieldCheck, Crown } from 'lucide-react';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const Facilities = () => {
  useScrollAnimation();

  const facilitiesData = [
    { title: 'Premium Fabrics', desc: 'Handpicked textiles from the finest looms.' },
    { title: 'Ethical Sourcing', desc: 'Sustainable and fair trade practices.' },
    { title: 'Modern Designs', desc: 'Contemporary patterns for the modern era.' },
    { title: 'Pan-India Reach', desc: 'Delivering luxury to every corner of India.' },
    { title: 'Quality Assurance', desc: 'Double-checked for perfection.' },
    { title: 'Royal Touch', desc: 'Experience the regal comfort.' }
  ];

  return (
    <section id="facilities" className="py-5 bg-light position-relative">
      <div className="container py-5">
        <div className="text-center mb-5 animate-on-scroll" data-aos="fade-up">
          <h2 className="display-4 fw-bold font-heading">Facilities</h2>
          <div className="d-flex justify-content-center mt-3">
            <div className="bg-warning" style={{ width: '60px', height: '3px' }}></div>
          </div>
        </div>

        <div className="row g-4">
          {facilitiesData.map((item, index) => {
            let Icon = Tag;
            if (index === 1) Icon = Globe;
            if (index === 2) Icon = Crown;
            if (index === 3) Icon = Truck;
            if (index === 4) Icon = CheckCircle;
            if (index === 5) Icon = ShieldCheck;

            return (
              <div key={index} className="col-md-6 col-lg-4">
                <div className="p-4 bg-white rounded-4 shadow-sm h-100 hover-lift border-bottom border-4 border-white hover-border-warning transition-all scroll-3d-flip animate-on-scroll" style={{ transitionDelay: `${index * 100}ms` }}>
                  <div className="mb-3 text-warning">
                    <Icon size={32} strokeWidth={1.5} />
                  </div>
                  <h4 className="fw-bold mb-2 font-heading">{item.title}</h4>
                  <p className="text-muted small mb-0">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Facilities;