import React from 'react';
import './UserMenuItem.scss';

const UserMenuItem = ({ className, text }) => {
  return <div className={className}>{text}</div>;
};

export default UserMenuItem;
