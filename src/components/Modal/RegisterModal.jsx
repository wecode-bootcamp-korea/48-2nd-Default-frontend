import React, { useState } from 'react';
import Modal from './Modal';
import Button from '../Button/Button';
import './RegisterModal.scss';

const RegisterModal = () => {
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    password: '',
    isHost: false,
  });

  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const emailIsValid = emailPattern.test(userInfo.email);
  const passwordIsValid = userInfo.password.length >= 5;
  const isValid = emailIsValid && passwordIsValid;
  const isDisabled = isValid && userInfo.name !== '';

  const handleInputChange = e => {
    const { value, id } = e.target;
    setUserInfo(prev => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleRegister = () => {
    if (isValid) {
      fetch('/data/data.json', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(userInfo),
      })
        .then(res => res.json())
        .then(data => console.log(data));
    }
  };

  return (
    <Modal
      title="회원가입"
      subTitle="Default에 오신 것을 환영합니다."
      redirectText="로그인"
      redirectLabel="이미 계정이 있으신가요?"
      handleRedirect={() => alert('로그인')}
    >
      <div className="modalContent">
        <div className="registerModalInputBox">
          <div className="nameInputBox">
            <input
              className="modalInput"
              type="text"
              id="name"
              value={userInfo.name}
              onChange={handleInputChange}
            />
            <label
              className={`modalLabel ${userInfo.name ? 'top' : ''}`}
              htmlFor="name"
            >
              Name
            </label>
          </div>

          <div className="emailInputBox">
            <input
              className="modalInput"
              type="text"
              id="email"
              value={userInfo.email}
              onChange={handleInputChange}
            />
            <label
              className={`modalLabel ${userInfo.email ? 'top' : ''}`}
              htmlFor="email"
            >
              Email
            </label>
          </div>

          <div className="passwordInputBox">
            <input
              className="modalInput"
              type="password"
              id="password"
              value={userInfo.password}
              onChange={handleInputChange}
            />
            <label
              className={`modalLabel ${userInfo.password ? 'top' : ''}`}
              htmlFor="password"
            >
              Password
            </label>
          </div>
          <Button text="계속" disabled={!isDisabled} onClick={handleRegister} />
        </div>
      </div>
    </Modal>
  );
};

export default RegisterModal;
