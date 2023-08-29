import React, { useRef, useState } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { FormatDate } from '../../utils/FormatDate';
import useOutsideClick from '../../hooks/useClickOutside';
import StarRating from '../Detail/StarRating';
import ReviewItem from '../Detail/ReviewItem';
import WriteReviewModal from './WriteReviewModal';
import './Review.scss';

const Review = () => {
  const [ratingStates, setRatingStates] = useState([]);
  const [reviewData, setReviewData] = useState([]);
  const [isReviewOpen, setIsReviewOpen] = useState(false);
  const reviewRef = useRef();

  const handleOpenWriteReviews = () => {
    setIsReviewOpen(true);
  };

  const handleReviewSubmit = review => {
    console.log(ratingStates);
    setRatingStates(prev => [...prev, review.rating]);
    setReviewData(prev => [...prev, review]);
    setIsReviewOpen(false);

    // fetch('/data/reviewData.json', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json;charset=utf-8',
    //   },
    //   body: JSON.stringify(),
    // })
    //   .then(res => res.json())
    //   .then(data => {
    //     setRatingStates(prev => [...prev, review.rating]);
    //     setReviewData(prev => [...prev, review]);
    //     setIsReviewOpen(false);
    //   });
  };

  useOutsideClick(reviewRef, () => {
    setIsReviewOpen(false);
  });

  return (
    <div className="review">
      <div className="reviewHeader">
        <div className="reviewInfo">
          <AiFillStar size={22} />
          <p>4.90</p>
          <p>후기 {reviewData.length}개</p>
        </div>
        <button
          className="writeReviewBtn"
          onClick={handleOpenWriteReviews}
          ref={reviewRef}
        >
          후기 작성
        </button>
        {isReviewOpen && (
          <WriteReviewModal onReviewSubmit={handleReviewSubmit} />
        )}
      </div>
      <div className="reviewContent">
        {reviewData.map(review => (
          <div key={review.id} className="reviewList">
            <StarRating
              ratingIndex={review.ratings}
              setRatingIndex={() => {}}
            />
            <ReviewItem
              key={review.roomId}
              profileImage={review.profileImage}
              name={review.name}
              date={FormatDate(review)}
              text={review.content}
            />
          </div>
        ))}
        {/* {newReviewList.map((review, index) => (
          <div key={index} className="newReviewList">
            <StarRating ratingIndex={review.rating} setRatingIndex={() => {}} />
            <ReviewItem
              name={review.name}
              profileImage={review.profileImage}
              date={review.createdAt}
              text={review.content}
            />
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default Review;
