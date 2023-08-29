import React, { useState } from 'react';
import StarRating from './StarRating';
import './WriteReviewModal.scss';

const WriteReviewModal = ({ onReviewSubmit }) => {
  const [reviewContent, setReviewContent] = useState('');
  const [ratingIndex, setRatingIndex] = useState(0);

  const handleReviewChange = e => {
    const { value } = e.target;
    setReviewContent(value);
  };

  const handleReviewSubmit = e => {
    e.preventDefault();

    onReviewSubmit({ rating: ratingIndex, content: reviewContent });

    // fetch('', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json;charset=utf-8',
    //   },
    //   body: JSON.stringify({ rating: ratingIndex, content: reviewContent }),
    // })
    //   .then(res => res.json())
    //   .then(data => {
    //     console.log(data);

    //     onReviewSubmit({
    //       rating: ratingIndex,
    //       content: reviewContent,
    //     });
    //   });
  };

  return (
    <div className="writeModalContainer">
      <div className="writeModalHeader">
        <h1 className="title">후기 작성하기</h1>
        <StarRating ratingIndex={ratingIndex} setRatingIndex={setRatingIndex} />
      </div>
      <form className="writeModal">
        <textarea
          className="writeTextArea"
          placeholder="내용을 입력해 주세요."
          onChange={handleReviewChange}
        />
        <button className="wirteBtn" onClick={handleReviewSubmit}>
          작성하기
        </button>
      </form>
    </div>
  );
};

export default WriteReviewModal;
