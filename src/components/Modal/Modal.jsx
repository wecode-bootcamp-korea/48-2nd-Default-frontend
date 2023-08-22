import React from 'react';
import { IoMdClose } from 'react-icons/io';
import { FcGoogle } from 'react-icons/fc';
import { RiKakaoTalkFill } from 'react-icons/ri';
import Button from '../Button/Button';
import './Modal.scss';

const Modal = ({ disabled, isOpen, title, onClose, body }) => {
  const handleSocialLoginSubmit = () => {
    if (disabled) return;
  };

  return (
    <div className="modalContainer">
      <div className="modalContentContainer">
        <header className="modalHeader">
          <button className="modalCloseButton">
            <IoMdClose size={18} />
          </button>
          <p className="modalTitle">{title}</p>
        </header>
        <div className="modalBody">{body}</div>
        <div className="modalFooter">
          <div className="divider">또는</div>
          <div className="modalSocialLoginBox">
            <div className="socialLoginButtonBox">
              <FcGoogle size={25} className="googleImage" />
              <Button
                disabled={disabled}
                text="구글로 로그인하기"
                onClick={handleSocialLoginSubmit}
                className="socialLoginButton"
              />
            </div>
            <div className="socialLoginButtonBox">
              <RiKakaoTalkFill size={25} className="kakaoImage" />
              <Button
                disabled={disabled}
                text="카카오로 로그인하기"
                onClick={handleSocialLoginSubmit}
                className="socialLoginButton"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
