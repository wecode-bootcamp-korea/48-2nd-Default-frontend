import React from 'react';

const InputLabel = ({ label, className, htmlFor }) => {
  return (
    <label htmlFor={htmlFor} className={className}>
      {label}
    </label>
  );
};

export default InputLabel;
