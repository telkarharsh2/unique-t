import React from 'react';
import { ShoppingBag, Users, Headphones } from 'lucide-react';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  useScrollAnimation();

  const stats = [
    { number: "100+", title: "Premium Fabrics" },
    { number: "5k+", title: "Happy Customers" },
    { number: "24/7", title: "Support" }
  ];

  return (
    <section id="whyUs" className="py-5 bg-light text-center">
      <div className="container py-5">
        <h2 className="display-4 text-maroon mb-5 fw-bold animate-on-scroll">Why Choose Us</h2>

        <div className="row g-5">
          {stats.map((item, index) => {
            let Icon;
            if (index === 0) Icon = ShoppingBag;
            else if (index === 1) Icon = Users;
            else Icon = Headphones;

            return (
              <div className="col-md-4" key={index}>
                <div className={`feature-card h-100 scroll-3d-zoom animate-on-scroll delay-${(index + 1) * 100}`}>
                  <div className="feature-icon-wrapper">
                    <Icon size={40} strokeWidth={1.5} />
                  </div>
                  <h3 className="h2 mb-3 fw-bold text-dark">{item.number}</h3>
                  <p className="lead text-muted">{item.title}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;