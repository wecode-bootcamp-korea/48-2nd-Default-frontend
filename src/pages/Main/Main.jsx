import React from 'react';
import Category from './components/Category/Category';
import ProductItem from './components/ProductItem/ProductItem';
import './Main.scss';

const Main = () => {
  return (
    <div className="main">
      <Category />
      <div className="items">
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </div>
    </div>
  );

};

export default Main;
