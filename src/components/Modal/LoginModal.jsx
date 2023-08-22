import React, { useState } from 'react';
import Button from '../Button/Button';
import Modal from './Modal';
import './LoginModal.scss';

const LoginModal = () => {
  const [loginUserInfo, setLoginUserInfo] = useState({
    name: '',
    email: '',
    password: '',
  });

  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const emailIsValid = emailPattern.test(loginUserInfo.email);
  const passwordIsValid = loginUserInfo.password.length >= 5;
  const isValid = emailIsValid && passwordIsValid;

  const handleLogin = () => {
    fetch('/data/data.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(loginUserInfo),
    })
      .then(res => res.json())
      .then(data => {
        if (data.accessToken) {
          localStorage.setItem('accessToken', data.accessToken);
        }
      });
  };

  const handleInputChange = e => {
    const { id, value } = e.target;
    setLoginUserInfo(prev => ({
      ...prev,
      [id]: value,
    }));
  };

  return (
    <Modal
      title="로그인"
      subTitle="다시 오신 것을 환영합니다."
      redirectText="회원가입"
      redirectLabel="아직 회원이 아니십니까?"
      handleRedirect={() => alert('회원가입')}
    >
      <div className="modalContent">
        <form className="loginModalInputBox">
          <div className="emailInputBox">
            <input
              className="modalInput"
              type="text"
              id="email"
              value={loginUserInfo.email}
              onChange={handleInputChange}
            />
            <label
              className={`modalLabel ${loginUserInfo.email ? 'top' : ''}`}
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
              value={loginUserInfo.password}
              onChange={handleInputChange}
            />
            <label
              className={`modalLabel ${loginUserInfo.password ? 'top' : ''}`}
              htmlFor="password"
            >
              Password
            </label>
          </div>

          <Button text="계속" onClick={handleLogin} disabled={!isValid} />
        </form>
      </div>
    </Modal>
  );
};

export default LoginModal;
