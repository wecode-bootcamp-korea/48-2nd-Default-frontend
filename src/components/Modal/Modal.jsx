import React, { useState, useEffect } from 'react';
import { IoMdClose } from 'react-icons/io';
import Input from '../Input/Input';
import InputLabel from '../Input/InputLabel';
import ModalHead from './ModalHead';
import './Modal.scss';
import ModalSocialLogin from './ModalSocialLogin';

const Modal = ({
  children,
  disabled,
  isOpen,
  title,
  subTitle,
  redirectText,
  redirectLabel,
  onClose,
  onSubmit,
  handleRedirect,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [isHost, setIsHost] = useState(false);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

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
          <ModalSocialLogin />
          <div className="footerTextBox">
            <p>{redirectLabel}</p>
            <div onClick={handleRedirect} className="footerText">
              {redirectText}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
