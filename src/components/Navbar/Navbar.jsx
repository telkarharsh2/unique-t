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
    'Why Us': <UserCheck size={22} />,
    'Get App': <Smartphone size={22} />
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'facilities', label: 'Facilities' },
    { id: 'whyUs', label: 'Why Us' },
    { id: 'mission', label: 'Get App' }
  ];

  return (
    <>
      {/* Desktop Vertical Dock (Left Side) */}
      <div className="d-none d-lg-block">
        <nav className="glass-navbar">
          {/* Logo Removed */}

          {/* Nav Items */}
          <div className="d-flex flex-column justify-content-around h-100 py-4">
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
      <div className="d-lg-none mobile-wrapper position-fixed" style={{ zIndex: 1000 }}>
        <nav className="glass-navbar">
          {/* Toggler */}
          <button
            className="btn border-0 p-0 text-dark"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>
        {/* Mobile Menu Popover (custom) */}
        <div className={`mobile-popover ${mobileMenuOpen ? 'show' : ''}`}>
          <div className="mobile-popover-body bg-white shadow-lg">
            <ul className="mobile-nav-list">
              {navItems.map((item) => (
                <li className="nav-item" key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="nav-icon-link d-flex align-items-center justify-content-between w-100"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="icon-box-inner">{icons[item.label]}</span>
                    <span className="text-label">{item.label}</span>
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