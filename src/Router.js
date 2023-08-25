import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Main from './pages/Main/Main';
import WireFrame from './components/Navbar/WireFrame';

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <WireFrame />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
