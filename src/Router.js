import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
import DetailPage from './pages/DetailPage/DetailPage';
import Navbar from './components/Navbar/Navbar';
import Main from './pages/Main/Main';
import WireFrame from './components/Navbar/WireFrame';

const Router = () => {
  return (
    <CookiesProvider>
      <BrowserRouter>
        <Navbar />
        <WireFrame />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/detail" element={<DetailPage />} />
        </Routes>
      </BrowserRouter>
    </CookiesProvider>
  );
};

export default Router;
