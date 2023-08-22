import React from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';
import InputLabel from '../Input/InputLabel';
import Modal from './Modal';
import ModalHead from './ModalHead';
import './LoginModal.scss';

const LoginModal = () => {
  const bodyContent = (
    <div className="ModalContent">
      <ModalHead title="다시 오신 것을 환영합니다." />
      <form className="ModalInputBox">
        <Input className="ModalEmailInput" type="text" id="email" />
        <InputLabel className="ModalEmailLabel" label="Email" htmlFor="email" />

        <Input className="ModalPasswordInput" type="password" id="password" />
        <InputLabel
          className="ModalPasswordLabel"
          label="Password"
          htmlFor="password"
        />

        <Button className="ModalNextButton" text="계속" />
      </form>
    </div>
  );

  return <Modal title="로그인" body={bodyContent} />;
};

export default LoginModal;
