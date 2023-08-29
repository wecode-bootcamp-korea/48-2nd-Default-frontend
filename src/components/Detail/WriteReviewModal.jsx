import React from 'react';
import './WriteReviewModal.scss';

const WriteReviewModal = () => {
  return (
    <div className="writeModalContainer">
      <form className="writeModal">
        <textarea />
        <button>작성하기</button>
      </form>
    </div>
  );
};

export default WriteReviewModal;
