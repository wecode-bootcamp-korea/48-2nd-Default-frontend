import React, { useState } from 'react';
import Modal from './Modal';
import Button from '../Button/Button';
import Input from '../Input/Input';
import InputLabel from '../Input/InputLabel';
import './RegisterModal.scss';

const RegisterModal = () => {
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    password: '',
    isHost: false,
  });

  const registerData = {
    name: userInfo.name,
    email: userInfo.email,
    password: userInfo.password,
    isHost: userInfo.isHost,
  };

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

  if (isValid) {
    fetch('/data/data.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(registerData),
    })
      .then(res => res.json())
      .then(data => console.log('결과: ', data));
  }

  return (
    <Modal
      title="회원가입"
      subTitle="Default에 오신 것을 환영합니다."
      redirectText="로그인"
      redirectLabel="이미 회원이신가요?"
      handleRedirect={() => alert('로그인')}
    >
      <div className="modalContent">
        <form className="registerModalInputBox">
          <Input
            className="modalNameInput"
            type="text"
            id="name"
            onChange={handleInputChange}
          />
          <InputLabel
            className="modalRegisterNameLabel"
            label="Name"
            htmlFor="name"
          />

          <Input
            className="modalEmailInput"
            type="text"
            id="email"
            onChange={handleInputChange}
          />
          <InputLabel
            className="modalRegisterEmailLabel"
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
            className="modalRegisterPasswordLabel"
            label="Password"
            htmlFor="password"
          />

          <Button text="계속" disabled={!isDisabled} />
        </form>
      </div>
    </Modal>
  );
};

export default RegisterModal;
