import React from 'react';
import './Button.scss';

const Button = ({ text, onClick, disabled, size = 'medium' }) => {
  return (
    <button onClick={onClick} disabled={disabled} className={`button ${size}`}>
      {text}
    </button>
  );
};

export default Button;
