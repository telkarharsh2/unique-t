import React from 'react';
import { translations } from '../../utils/translations';

const Procedure = ({ lang }) => {
  const t = translations[lang].process;

  const steps = [
    { num: '01', title: 'Consultation', desc: 'Discuss your fabric needs.' },
    { num: '02', title: 'Selection', desc: 'Choose from our premium catalog.' },
    { num: '03', title: 'Customization', desc: 'Tailored to your specifications.' },
    { num: '04', title: 'Delivery', desc: 'Timely delivery to your doorstep.' }
  ];

  return (
    <section id="process" className="py-5">
      <div className="container py-5">
        <div className="text-center mb-5" data-aos="fade-up">
          <h2 className="display-4 mb-3 text-maroon">{t.title}</h2>
          <div className="mx-auto bg-maroon mb-5" style={{ width: '60px', height: '3px' }}></div>
        </div>

        <div className="row position-relative">
          {/* Connecting Line (Desktop) */}
          <div className="position-absolute top-50 start-0 w-100 border-top border-2 border-gold d-none d-lg-block" style={{ zIndex: 0 }}></div>

          {steps.map((step, index) => (
            <div className="col-lg-3 col-md-6 mb-4 mb-lg-0 position-relative" key={index} style={{ zIndex: 1 }} data-aos="fade-up" data-aos-delay={index * 150}>
              <div className="text-center bg-white p-3 h-100">
                <div className="d-inline-flex align-items-center justify-content-center bg-white border border-gold rounded-circle text-gold fw-bold mb-3 shadow-sm hover-scale transition-all" style={{ width: '60px', height: '60px', fontSize: '1.2rem' }}>
                  {step.num}
                </div>
                <h4 className="mb-2">{step.title}</h4>
                <p className="text-muted small">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .hover-scale:hover { transform: scale(1.1); box-shadow: 0 10px 20px rgba(0,0,0,0.1); }
      `}</style>
    </section>
  );
};

export default Procedure;