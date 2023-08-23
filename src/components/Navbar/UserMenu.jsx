import React, { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import Avatar from './Avatar';
import UserMenuItem from './UserMenuItem';
import './UserMenu.scss';

const UserMenu = () => {
  const [isToggleMenu, setIsToggleMenu] = useState(false);

  const handleToggleUserMenu = () => {
    setIsToggleMenu(prev => !prev);
  };

  return (
    <>
      <div className="iconBox" onClick={handleToggleUserMenu}>
        <AiOutlineMenu />
        <div className="avatarIcon">
          <Avatar />
        </div>
      </div>

      <div className={`menuListBox ${isToggleMenu ? 'menuShow' : 'menuHide'}`}>
        <UserMenuItem className="menuList" text="로그인" />
        <UserMenuItem className="menuList" text="회원가입" />
      </div>
    </>
  );
};

export default UserMenu;
