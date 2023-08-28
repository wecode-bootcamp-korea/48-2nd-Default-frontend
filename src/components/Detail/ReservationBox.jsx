import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiFillStar } from 'react-icons/ai';
import { REVIEWS } from '../../utils/constant';
import './ReservationBox.scss';

const ReservationBox = ({
  setIsCalendarOpen,
  selectedStartDate,
  selectedEndDate,
  calculateNights,
}) => {
  const [gradientPosition, setGradientPosition] = useState({ x: 0, y: 0 });
  const navigate = useNavigate();

  const handleMouseMove = event => {
    const x = event.nativeEvent.offsetX;
    const y = event.nativeEvent.offsetY;

    setGradientPosition({ x, y });
  };

  const handleCalendarOpen = () => {
    setIsCalendarOpen(prev => !prev);
  };

  const handleReservationSubmit = e => {
    e.preventDefault();
  };

  const price = 360000;
  const pricePerNight = price.toLocaleString();

  const totalPrice = () => {
    if (!selectedStartDate || !selectedEndDate) {
      return 0;
    }
    const numericPricePerNight = parseInt(pricePerNight.replace(/,/g, ''), 10);
    return (numericPricePerNight * calculateNights).toLocaleString();
  };

  return (
    <div className="reservationContainer">
      <div className="reservationHeader">
        <p className="priceBox">
          <b className="price">￦{pricePerNight}</b>
          <span className="night">/ 박</span>
        </p>
        <div className="rating">
          <AiFillStar />
          <p>4.85</p>
          <p className="ratingReview">후기 {REVIEWS.length}개</p>
        </div>
      </div>
      <div className="reservationBody">
        <form className="checkDateBox" onSubmit={handleReservationSubmit}>
          <button className="checkDate" onClick={handleCalendarOpen}>
            <div>
              <p>체크인</p>
              <p>
                {selectedStartDate
                  ? selectedStartDate.toLocaleDateString()
                  : '날짜 선택'}
              </p>
            </div>
            <div>
              <p>체크아웃</p>
              <p>
                {selectedEndDate
                  ? selectedEndDate.toLocaleDateString()
                  : '날짜 선택'}
              </p>
            </div>
          </button>
          <button
            className="reserveBtn"
            onClick={() => navigate('/payment')}
            onMouseMove={handleMouseMove}
            style={{
              background: `radial-gradient(circle at ${gradientPosition.x}px ${gradientPosition.y}px, #FF385C, #E61E4D, #E31C5F, #D70466, #BD1E59, #BD1E59)`,
            }}
          >
            예약하기
          </button>
        </form>
        <p className="subText">예약 확정 전에는 요금이 청구되지 않습니다.</p>
        <div className="reservationInfoBox">
          <div className="reservationInfo">
            <p>
              ￦{pricePerNight} x {calculateNights}박
            </p>
            <p>￦{totalPrice()}</p>
          </div>
          <div className="reservationInfo">
            <p>에어비앤비 서비스 수수료</p>
            <p>￦279,531</p>
          </div>
        </div>
      </div>
      <div className="reservationFooter">
        <p>총 합계</p>
        <p>￦2,079,531</p>
      </div>
    </div>
  );
};

export default ReservationBox;
