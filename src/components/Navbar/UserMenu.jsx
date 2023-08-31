import React, { useRef, useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import useOutsideClick from '../../hooks/useClickOutside';
import LoginModal from '../Modal/LoginModal';
import RegisterModal from '../Modal/RegisterModal';
import Avatar from './Avatar';
import UserMenuItem from './UserMenuItem';
import './UserMenu.scss';

const UserMenu = () => {
  const [isToggleMenu, setIsToggleMenu] = useState(false);
  const [modalStatus, setModalStatus] = useState();
  const menuRef = useRef();
  const exceptionRef = useRef();

  const MODAL_MAP = {
    login: (
      <LoginModal
        onClose={() => setModalStatus('')}
        handleRedirect={() => setModalStatus('register')}
      />
    ),
    register: (
      <RegisterModal
        onClose={() => setModalStatus('')}
        handleRedirect={() => setModalStatus('login')}
      />
    ),
  };

  const handleToggleUserMenu = () => {
    setIsToggleMenu(prev => !prev);
  };

  useOutsideClick(
    menuRef,
    () => {
      setIsToggleMenu(false);
    },
    exceptionRef,
  );

  const handleLogin = () => {
    setModalStatus('login');
    setIsToggleMenu(false);
  };

  const handleRegister = () => {
    setModalStatus('register');
    setIsToggleMenu(false);
  };

  return (
    <>
      {MODAL_MAP[modalStatus]}
      <div
        className="iconBox"
        onClick={handleToggleUserMenu}
        ref={exceptionRef}
      >
        <AiOutlineMenu />
        <div className="avatarIcon">
          <Avatar />
        </div>
      </div>
      {isToggleMenu && (
        <div className="menuListBox">
          <UserMenuItem
            className="menuList"
            text="로그인"
            onClick={handleLogin}
          />
          <UserMenuItem
            className="menuList"
            text="회원가입"
            onClick={handleRegister}
          />
        </div>
      )}
    </>
  );
};

export default UserMenu;
