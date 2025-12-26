import React from 'react';
import './ScrollIndicator.css';

const ScrollIndicator = () => {
  return (
    <div className="scroll-indicator-container">
      <span className="scroll-text">Scroll</span>
      <div className="mouse-icon">
        <div className="mouse-wheel"></div>
      </div>
    </div>
  );
};

export default ScrollIndicator;