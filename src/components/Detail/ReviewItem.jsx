import React from 'react';
import './ReviewItem.scss';

const ReviewItem = () => {
  return (
    <div className="reviewItemContainer">
      <div className="reviewItemHeader">
        <img
          className="profileImage"
          src="https://a0.muscache.com/im/pictures/5874cae5-198f-4301-91af-d3eb137dd6c4.jpg?im_w=960"
          alt="프로필"
        />
        <div className="reviewItemProfile">
          <p className="name">용준</p>
          <p className="date">2023년 8월</p>
        </div>
      </div>
      <div className="reviewContent">
        <span>최고의숙소</span>
      </div>
    </div>
  );
};

export default ReviewItem;
