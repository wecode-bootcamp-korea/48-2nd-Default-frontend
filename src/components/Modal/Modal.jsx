import React, { useState, useEffect } from 'react';
import { IoMdClose } from 'react-icons/io';
import ModalHead from './ModalHead';
import ModalSocialLogin from './ModalSocialLogin';
import './Modal.scss';

const Modal = ({
  children,
  title,
  subTitle,
  redirectText,
  redirectLabel,
  onSubmit,
  handleRedirect,
}) => {
  const [showModal, setShowModal] = useState(true);
  const [isHost, setIsHost] = useState(false);

  useEffect(() => {
    setShowModal(showModal);
  }, [showModal]);

  const handleClose = () => {
    setShowModal(false);
  };

  const handleChenckboxChange = e => {
    const { checked } = e.target;
    setIsHost(checked);

    fetch('/data/data.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(isHost),
    })
      .then(res => res.json())
      .then(data => console.log('결과: ', data));
  };

  return (
    <div className={`modalContainer ${showModal ? 'black' : 'white'}`}>
      <div className={`modalContentContainer  ${showModal ? 'show' : 'hide'}`}>
        <header className="modalHeader">
          <button className="modalCloseButton">
            <IoMdClose size={18} onClick={handleClose} />
          </button>
          <p className="modalTitle">{title}</p>
        </header>
        <div className="modalBody">
          <div className="modalBodyTitleBox">
            <ModalHead title={subTitle} />
            <div className="hostBox">
              <input
                type="checkbox"
                onChange={handleChenckboxChange}
                id="host"
              />
              <label htmlFor="host">호스트로 가입하시겠어요?</label>
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
