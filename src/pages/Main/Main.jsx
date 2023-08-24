import React, { useState } from 'react';
import RegisterModal from '../../components/Modal/RegisterModal';
import LoginModal from '../../components/Modal/LoginModal';

const Main = () => {
  const [modalStatus, setModalStatus] = useState();

  const MODAL_MAP = {
    login: (
      <LoginModal
        onClose={() => setModalStatus('')}
        handleRedirect={() => setModalStatus('register')}
      />
    ),
    register: (
      <RegisterModal
        onClose={() => setModalStatus('')}
        handleRedirect={() => setModalStatus('login')}
      />
    ),
  };

  return (
    <div>
      {MODAL_MAP[modalStatus]}
      <button onClick={() => setModalStatus('login')}>로그인</button>
      <button onClick={() => setModalStatus('register')}>회원가입</button>
    </div>
  );
};

export default Main;
