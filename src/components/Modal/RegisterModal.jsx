import React from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';
import InputLabel from '../Input/InputLabel';
import Modal from './Modal';
import ModalHead from './ModalHead';
import './RegisterModal.scss';

const RegisterModal = () => {
  const bodyContent = (
    <div className="modalContent">
      <ModalHead title="Default에 오신 것을 환영합니다." />
      <form className="registerModalInputBox">
        <Input className="modalEmailInput" type="text" id="email" />
        <InputLabel className="modalEmailLabel" label="Email" htmlFor="email" />

        <Input className="modalPasswordInput" type="password" id="password" />
        <InputLabel
          className="modalPasswordLabel"
          label="Password"
          htmlFor="password"
        />

        <Input className="modalNameInput" type="text" id="name" />
        <InputLabel className="modalNameLabel" label="Name" htmlFor="name" />

        <Button className="modalNextButton" text="계속" />
      </form>
    </div>
  );

  return <Modal title="회원가입" body={bodyContent} />;
};

export default RegisterModal;
