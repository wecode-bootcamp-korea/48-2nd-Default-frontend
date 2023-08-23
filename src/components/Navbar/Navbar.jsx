import React from 'react';
import './Navbar.scss';
import Logo from './Logo';
import Search from './Search';
import UserMenu from './UserMenu';

const Navbar = () => {
  return (
    <div className="navbarContainer">
      <div className="navbarContentBox">
        <Logo />
        <Search />
        <UserMenu />
      </div>
    </div>
  );
};

export default Navbar;
