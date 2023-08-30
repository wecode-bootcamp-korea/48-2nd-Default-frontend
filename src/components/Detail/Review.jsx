import React, { useRef, useState, useEffect } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { FormatDate } from '../../utils/FormatDate';
import useOutsideClick from '../../hooks/useClickOutside';
import StarRating from '../Detail/StarRating';
import ReviewItem from '../Detail/ReviewItem';
import WriteReviewModal from './WriteReviewModal';
import './Review.scss';

const Review = () => {
  const [reviewData, setReviewData] = useState([]);
  const [isReviewOpen, setIsReviewOpen] = useState(false);
  const modalRef = useRef();
  const reviewBtnRef = useRef();

  const handleOpenWriteReviews = () => {
    setIsReviewOpen(true);
  };

  const handleReviewSubmit = review => {
    // setRatingStates(prev => [...prev, review.rating]);
    // setReviewData(prev => [...prev, review]);

    fetch('http://10.58.52.95:3000/detail/createreview', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        ratings: review.ratings,
        content: review.content,
        user_id: 1,
        room_id: 2,
      }),
    })
      .then(res => res.json())
      .then(res => {
        console.log(res);
        if (res.message === 'review created') {
          getReview();
          setIsReviewOpen(false);
        }
      });
  };

  const getReview = () => {
    fetch('http://10.58.52.95:3000/detail/romreview', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    })
      .then(res => res.json())
      .then(result => {
        console.log(result);
        setReviewData(result);
      });
  };

  useEffect(() => {
    getReview();
  }, []);

  useOutsideClick(
    modalRef,
    () => {
      setIsReviewOpen(false);
    },
    reviewBtnRef,
  );

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
          ref={reviewBtnRef}
        >
          후기 작성
        </button>
        {isReviewOpen && (
          <WriteReviewModal
            ref={modalRef}
            onReviewSubmit={handleReviewSubmit}
            onClose={() => setIsReviewOpen(false)}
          />
        )}
      </div>
      <div className="reviewContent">
        {reviewData.length === 0 ? (
          <p>아직 후기가 없습니다.</p>
        ) : (
          reviewData.map(reviews => (
            <div key={reviews.id} className="reviewList">
              <StarRating
                ratingIndex={reviews.ratings}
                setRatingIndex={() => {}}
              />
              <ReviewItem
                name={reviews.name}
                profileImage={reviews.profileImage}
                date={FormatDate(reviews)}
                text={reviews.content}
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Review;
