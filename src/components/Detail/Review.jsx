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
  const [newReviewList, setNewReviewList] = useState([]);

  const handleOpenWriteReviews = () => {
    setIsReviewOpen(true);
  };

  const handleReviewSubmit = review => {
    setRatingStates(prev => [...prev, review.rating]);
    setNewReviewList(prev => [...prev, review]);
    setIsReviewOpen(false);
  };

  return (
    <div className="review">
      <div className="reviewHeader">
        <div className="reviewInfo">
          <AiFillStar size={22} />
          <p>4.90</p>
          <p>후기 {REVIEWS.length + newReviewList.length}개</p>
        </div>
        <button className="writeReviewBtn" onClick={handleOpenWriteReviews}>
          후기 작성
        </button>
        {isReviewOpen && (
          <WriteReviewModal onReviewSubmit={handleReviewSubmit} />
        )}
      </div>
      <div className="reviewContent">
        {REVIEWS.map((review, index) => (
          <div key={review.id}>
            <StarRating ratingIndex={review.rating} setRatingIndex={() => {}} />
            <ReviewItem
              key={review.id}
              name={review.name}
              date={review.createdAt}
              text={review.content}
            />
          </div>
        ))}
        {newReviewList.map((review, index) => (
          <div key={index} className="newReviewList">
            <StarRating ratingIndex={review.rating} setRatingIndex={() => {}} />
            <ReviewItem
              name={review.name}
              date={review.createdAt}
              text={review.content}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
