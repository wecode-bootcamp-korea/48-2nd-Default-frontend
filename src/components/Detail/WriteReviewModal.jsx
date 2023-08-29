import React from 'react';
import './WriteReviewModal.scss';

const WriteReviewModal = () => {
  return (
    <div className="writeModalContainer">
      <form className="writeModal">
        <textarea
          className="writeTextArea"
          placeholder="내용을 입력해 주세요."
        />
        <button className="wirteBtn">작성하기</button>
      </form>
    </div>
  );
};

export default WriteReviewModal;
