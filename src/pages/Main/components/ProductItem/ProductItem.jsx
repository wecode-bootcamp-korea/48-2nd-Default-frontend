import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';
import { MdArrowForwardIos } from 'react-icons/md';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import './ProductItem.scss';

const ProductItem = () => {
  return (
    <div className="productItem">
      <div className="image">
        <img src="/images/room.webp" alt="" />
        <div className="arrow">
          <button className="btnLeft">
            <MdOutlineArrowBackIosNew className="left" />
          </button>
          <button className="btnRight">
            <MdArrowForwardIos className="right" />
          </button>
        </div>
        <FaHeart className="heart" />
      </div>

      <div className="description">
        <div className="descriptionText">
          <p>중구, 한국</p>
          <div className="gray">
            <p>38km 거리</p>
            <p>9월 1일~6일</p>
          </div>
          <p>₩80,000 /박</p>
        </div>
        <div className="star">
          <AiFillStar />
          <span>4.98</span>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
