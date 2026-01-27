import React from 'react';

const Card = ({ children, className = "", hoverEffect = true }) => {
  return (
    <div 
      className={`bg-white p-4 rounded shadow-sm border-0 h-100 ${hoverEffect ? 'hover-lift' : ''} ${className}`}
      style={{ transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}
    >
      {children}
    </div>
  );
};

export default Card;