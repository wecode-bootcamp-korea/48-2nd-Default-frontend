import React, { useState } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { REVIEWS } from '../../utils/constant';
import StarRating from '../Detail/StarRating';
import ReviewItem from '../Detail/ReviewItem';
import WriteReviewModal from './WriteReviewModal';
import './Review.scss';

const Review = () => {
  const [ratingStates, setRatingStates] = useState([]);
  const [isReviewOpen, setIsReviewOpen] = useState(false);

  const handleOpenWriteReviews = () => {
    setIsReviewOpen(true);
  };

  return (
    <div className="review">
      <div className="reviewHeader">
        <div className="reviewInfo">
          <AiFillStar size={22} />
          <p>4.90</p>
          <p>후기 {REVIEWS.length}개</p>
        </div>
        <button className="writeReviewBtn" onClick={handleOpenWriteReviews}>
          후기 작성
        </button>
        {isReviewOpen && <WriteReviewModal />}
      </div>
      <div className="reviewContent">
        {REVIEWS.map((review, index) => (
          <div key={review.id}>
            <StarRating
              ratingIndex={ratingStates[index]}
              setRatingIndex={data => {
                const newRatingStates = [...ratingStates];
                newRatingStates[index] = data;
                setRatingStates(newRatingStates);
              }}
            />
            <ReviewItem
              key={review.id}
              name={review.name}
              date={review.date}
              text={review.text}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
