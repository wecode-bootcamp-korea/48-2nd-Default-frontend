import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import Avatar from './Avatar';
import './UserMenu.scss';

const UserMenu = () => {
  return (
    <div className="iconBox">
      <AiOutlineMenu />
      <div className="avatarIcon">
        <Avatar />
      </div>
    </div>
  );
};

export default UserMenu;
