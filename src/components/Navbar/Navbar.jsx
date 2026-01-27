import React, { useState } from 'react';
import { Menu, X, Home, Info, Sparkles, Settings, UserCheck, Smartphone } from 'lucide-react';
import logoImg from '../../assets/images/withoutbg.png';
import './Navbar.css';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Icon mapping
  const icons = {
    Home: <Home size={22} />,
    'About Us': <Info size={22} />,
    Facilities: <Sparkles size={22} />,
    'Why Choose Us': <UserCheck size={22} />,
    'Get App': <Smartphone size={22} />
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'facilities', label: 'Facilities' },
    { id: 'whyUs', label: 'Why Choose Us' },
    { id: 'mission', label: 'Get App' }
  ];

  return (
    <>
      {/* Desktop Vertical Dock (Left Side) */}
      <div className="d-none d-lg-block">
        <nav className="glass-navbar">
          {/* Logo Removed */}

          {/* Nav Items */}
          <div className="d-flex flex-column gap-3 w-100 align-items-center mt-5">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="nav-icon-link"
              >
                <span className="icon-box-inner">{icons[item.label]}</span>
                <span className="text-label">{item.label}</span>
              </a>
            ))}
          </div>
        </nav>
      </div>

      {/* Mobile Bottom Bar (Standard) */}
      <div className="d-lg-none position-fixed bottom-0 start-0 w-100" style={{ zIndex: 1000 }}>
        <nav className="glass-navbar justify-content-between align-items-center">
          {/* Logo */}
          <a className="navbar-brand p-0" href="#">
            <img src={logoImg} alt="Logo" style={{ height: '35px', width: 'auto' }} />
          </a>

          {/* Toggler */}
          <button
            className="btn border-0 p-0 text-dark"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>

        {/* Mobile Menu Popover */}
        <div className={`offcanvas offcanvas-bottom h-auto rounded-top-4 ${mobileMenuOpen ? 'show' : ''}`}
          style={{ visibility: mobileMenuOpen ? 'visible' : 'hidden', transition: 'transform 0.3s ease-in-out', transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(100%)', bottom: '70px', zIndex: 999 }}>
          <div className="offcanvas-body bg-white shadow-lg">
            <ul className="navbar-nav gap-3">
              {navItems.map((item) => (
                <li className="nav-item" key={item.id}>
                  <a href={`#${item.id}`}
                    className="nav-link d-flex align-items-center gap-3 p-2 rounded-3 hover-bg-light"
                    onClick={() => setMobileMenuOpen(false)}>
                    <span className="text-maroon">{icons[item.label]}</span>
                    <span className="fw-bold font-heading">{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;