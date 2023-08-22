import React, { useState } from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import InputLabel from '../Input/InputLabel';
import Modal from './Modal';
import './LoginModal.scss';

const LoginModal = () => {
  const [loginUserInfo, setLoginUserInfo] = useState({
    name: '',
    email: '',
    password: '',
  });

  const loginData = {
    name: loginUserInfo.name,
    email: loginUserInfo.email,
    password: loginUserInfo.password,
  };

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
      body: JSON.stringify(loginData),
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
    <Modal title="로그인" subTitle="다시 오신 것을 환영합니다.">
      <div className="modalContent">
        <form className="loginModalInputBox">
          <Input
            className="modalEmailInput"
            type="text"
            id="email"
            onChange={handleInputChange}
          />
          <InputLabel
            className="modalEmailLabel"
            label="Email"
            htmlFor="email"
          />

          <Input
            className="modalPasswordInput"
            type="password"
            id="password"
            onChange={handleInputChange}
          />
          <InputLabel
            className="modalPasswordLabel"
            label="Password"
            htmlFor="password"
          />

          <Button text="계속" onClick={handleLogin} disabled={!isValid} />
        </form>
      </div>
    </Modal>
  );
};

export default LoginModal;
