import React, { useState, forwardRef } from 'react';
import StarRating from './StarRating';
import './WriteReviewModal.scss';

const WriteReviewModal = forwardRef(({ onReviewSubmit }, ref) => {
  const [reviewContent, setReviewContent] = useState('');
  const [ratingIndex, setRatingIndex] = useState(0);

  const handleReviewChange = e => {
    const { value } = e.target;
    setReviewContent(value);
  };

  const handleReviewSubmit = e => {
    e.preventDefault();
    if (!reviewContent) return;

    console.log(ratingIndex);

    onReviewSubmit({
      ratings: ratingIndex,
      content: reviewContent,
    });

    // fetch('', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json;charset=utf-8',
    //   },
    //   body: JSON.stringify({ rating: ratingIndex, content: reviewContent }),
    // })
    //   .then(res => res.json())
    //   .then(data => console.log(data));
    //   .then(data => {
    //     console.log(data);

    //     onReviewSubmit({
    //       rating: ratingIndex,
    //       content: reviewContent,
    //     });
    //   });
  };

  return (
    <form ref={ref} className="writeModalContainer">
      <div className="writeModalHeader">
        <h1 className="title">후기 작성하기</h1>
        <StarRating ratingIndex={ratingIndex} setRatingIndex={setRatingIndex} />
      </div>
      <div className="writeModal">
        <textarea
          className="writeTextArea"
          placeholder="내용을 입력해 주세요."
          onChange={handleReviewChange}
        />
        <button className="wirteBtn" onClick={handleReviewSubmit}>
          작성하기
        </button>
      </div>
    </form>
  );
});

export default WriteReviewModal;
