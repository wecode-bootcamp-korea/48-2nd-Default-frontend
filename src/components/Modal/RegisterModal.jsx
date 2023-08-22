import React from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';
import InputLabel from '../Input/InputLabel';
import Modal from './Modal';
import ModalHead from './ModalHead';
import './RegisterModal.scss';

const RegisterModal = () => {
  const bodyContent = (
    <div className="ModalContent">
      <ModalHead title="Default에 오신 것을 환영합니다." />
      <form className="ModalInputBox">
        <Input className="ModalEmailInput" type="email" id="email" />
        <InputLabel className="ModalEmailLabel" label="Email" htmlFor="email" />

        <Input className="ModalPasswordInput" type="password" id="password" />
        <InputLabel
          className="ModalPasswordLabel"
          label="Password"
          htmlFor="password"
        />

        <Input className="ModalNameInput" type="text" id="name" />
        <InputLabel className="ModalNameLabel" label="Name" htmlFor="name" />

        <Button className="ModalNextButton" text="계속" />
      </form>
    </div>
  );

  return <Modal title="회원가입" body={bodyContent} />;
};

export default RegisterModal;
