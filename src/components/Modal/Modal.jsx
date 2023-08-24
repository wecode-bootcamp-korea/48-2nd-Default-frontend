import React, { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import ModalSocialLogin from './ModalSocialLogin';
import './Modal.scss';

const Modal = ({
  children,
  title,
  subTitle,
  redirectText,
  redirectLabel,
  onClose,
  handleRedirect,
}) => {
  const [isHost, setIsHost] = useState(false);

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
    <div className="modalContainer black">
      <div className="modalContentContainer">
        <header className="modalHeader">
          <button className="modalCloseButton">
            <IoMdClose size={18} onClick={onClose} />
          </button>
          <p className="modalTitle">{title}</p>
        </header>
        <div className="modalBody">
          <div className="modalBodyTitleBox">
            <div className="modalSubTitle">{subTitle}</div>
            <div className="hostBox">
              <input
                type="checkbox"
                onChange={handleChenckboxChange}
                id="host"
              />
              <label htmlFor="host">호스트로 로그인</label>
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
