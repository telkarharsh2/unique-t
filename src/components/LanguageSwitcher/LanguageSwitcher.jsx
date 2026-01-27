import React from 'react';
import { translations } from '../../utils/translations';
import { Globe, ChevronDown } from 'lucide-react';

const LanguageSwitcher = ({ lang, setLang }) => {
  const languages = [
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'hi', label: 'हिंदी', flag: '🇮🇳' },
    { code: 'mr', label: 'मराठी', flag: '🇮🇳' }
  ];

  const currentLang = languages.find(l => l.code === lang);

  return (
    <div className="dropdown">
      <button
        className="btn d-flex align-items-center gap-2 border-0 bg-transparent text-dark fw-bold px-3 py-2 rounded-pill hover-bg-light transition-all"
        type="button"
        id="langDropdown"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <Globe size={18} className="text-maroon" />
        <span className="small text-uppercase">{lang}</span>
        <ChevronDown size={14} className="opacity-50" />
      </button>

      <ul className="dropdown-menu dropdown-menu-end border-0 shadow-lg rounded-4 p-2 mt-2"
        aria-labelledby="langDropdown"
        style={{ background: 'rgba(255, 255, 255, 0.95)', backdropFilter: 'blur(10px)', minWidth: '180px' }}>
        {languages.map((l) => (
          <li key={l.code}>
            <button
              className={`dropdown-item d-flex align-items-center justify-content-between rounded-3 px-3 py-2 mb-1 ${lang === l.code ? 'bg-light fw-bold text-maroon' : 'text-secondary hover-text-dark'}`}
              onClick={() => setLang(l.code)}
              style={{ transition: 'all 0.2s' }}
            >
              <span className="d-flex align-items-center gap-2">
                <span className="fs-5">{l.flag}</span>
                <span className="small">{l.label}</span>
              </span>
              {lang === l.code && <div className="dot bg-maroon rounded-circle" style={{ width: '6px', height: '6px' }}></div>}
            </button>
          </li>
        ))}
      </ul>
      <style jsx>{`
        .hover-bg-light:hover { background: rgba(0,0,0,0.05); }
        .hover-text-dark:hover { color: #000 !important; background: rgba(0,0,0,0.02); }
      `}</style>
    </div>
  );
};

export default LanguageSwitcher;