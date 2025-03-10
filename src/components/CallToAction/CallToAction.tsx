'use client'
import React from 'react';
import './callToAction.css';

interface CallToActionProps {
  text: string;
  href: string;
}

const CallToAction: React.FC<CallToActionProps> = ({ text, href }) => {
  return (
    <div className="cta-block">
      <h2 className="cta-text">{text}</h2>
      <button onClick={() => (window.location.href = href)} className="cta-button">
        Да
      </button>
    </div>
  );
};

export default CallToAction;