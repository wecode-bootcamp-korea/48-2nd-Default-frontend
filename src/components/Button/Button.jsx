import React from 'react';
import './Button.scss';

const Button = ({ text, onClick, disabled, backgroundColor = 'white' }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      backgroundColor={backgroundColor}
      className="button"
    >
      {text}
    </button>
  );
};

export default Button;
