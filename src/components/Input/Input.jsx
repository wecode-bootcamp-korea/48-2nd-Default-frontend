import React from 'react';

const Input = ({ id, placeholder, name, value, onChange, type, className }) => {
  return (
    <input
      id={id}
      className={className}
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      required
    />
  );
};

export default Input;
