import React from 'react';
import { IoMdClose } from 'react-icons/io';
import { FcGoogle } from 'react-icons/fc';
import { RiKakaoTalkFill } from 'react-icons/ri';
import Button from '../Button/Button';
import './Modal.scss';

const Modal = ({
  disabled,
  isOpen,
  title,
  continueText,
  onClose,
  onSubmit,
  body,
  footer,
  text,
}) => {
  const handleSocialLoginSubmit = () => {
    if (disabled) return;
  };

  return (
    <div className="ModalContainer">
      <div className="ModalContentContainer">
        <header className="ModalHeader">
          <button className="ModalCloseButton">
            <IoMdClose size={18} />
          </button>
          <p>{title}</p>
        </header>
        <div className="ModalBody">ㅇㅇㅇㅇㅇ</div>
        <div className="ModalFooter">
          <div className="Divider">또는</div>
          <div className="ModalSocialLoginBox">
            <div className="SocialLoginButtonBox">
              <FcGoogle size={18} className="GoogleImage" />
              <Button
                disabled={disabled}
                text="구글로 로그인하기"
                onClick={handleSocialLoginSubmit}
                className="SocialLoginButton"
              />
            </div>
            <div className="SocialLoginButtonBox">
              <RiKakaoTalkFill size={18} className="KakaoImage" />
              <Button
                disabled={disabled}
                text="카카오로 로그인하기"
                onClick={handleSocialLoginSubmit}
                className="SocialLoginButton"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
