import React, { useState, useEffect } from 'react';
import { IoMdClose } from 'react-icons/io';
import { FcGoogle } from 'react-icons/fc';
import { RiKakaoTalkFill } from 'react-icons/ri';
import Button from '../Button/Button';
import Input from '../Input/Input';
import ModalHead from './ModalHead';
import './Modal.scss';
import InputLabel from '../Input/InputLabel';

const Modal = ({
  children,
  disabled,
  isOpen,
  title,
  onClose,
  subTitle,
  onSubmit,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [isHost, setIsHost] = useState(false);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleSocialLoginSubmit = () => {
    if (disabled) return;

    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  const handleChenckboxChange = e => {
    const { checked } = e.target;
    setIsHost(checked);
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
        <div className="modalBody">
          <div className="modalBodyTitleBox">
            <ModalHead title={subTitle} />
            <div className="hostBox">
              <Input type="checkbox" onChange={handleChenckboxChange} />
              <InputLabel label="호스트로 가입하시겠어요?" />
            </div>
          </div>
          {children}
        </div>
        <div className="modalFooter">
          <div className="divider">또는</div>
          <div className="modalSocialLoginBox">
            <div className="googleSocialButtonBox">
              <FcGoogle size={25} className="googleImage" />
              <Button
                text="구글로 로그인하기"
                onClick={handleSocialLoginSubmit}
              />
            </div>
            <div className="kakaoSocialButtonBox">
              <RiKakaoTalkFill size={25} className="kakaoImage" />
              <Button
                text="카카오로 로그인하기"
                onClick={handleSocialLoginSubmit}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
