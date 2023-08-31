import React from 'react';
import './Payment.scss';

const Payment = () => {
  return (
    <div className="paymentPageContainer">
      <div className="header">
        <p className="goToBackBtn">&lt;</p>
        <h1>확인 및 결제</h1>
      </div>
      <div className="contentContainer">
        <div className="reservationBox">
          <div className="reservationInfo">
            <h1 className="title">예약 정보</h1>
            <div className="dateBox">
              <h2>날짜</h2>
              <p>9월 3일 ~ 8일</p>
            </div>
          </div>
          <div className="pay">
            <h1 className="title">결제</h1>
            <div className="pointBox">
              <div className="pointBoxContent">
                <h2>총 포인트</h2>
                <p>100000포인트</p>
              </div>
              <div className="pointBoxContent">
                <h2>사용 포인트</h2>
                <p>-50000포인트</p>
              </div>
              <div className="pointBoxContent">
                <h2>잔여 포인트</h2>
                <p>50000포인트</p>
              </div>
            </div>
          </div>
          <div className="reserveBtnBox">
            <button className="reserveBtn">예약 요청</button>
          </div>
        </div>
        <div className="detailInfo">
          <div className="placeInfoBox">
            <img
              src="https://a0.muscache.com/im/pictures/9af12dcc-48fb-446f-aab4-44109cea3576.jpg?aki_policy=large"
              alt="장소"
              className="placeImage"
            />
            <div className="placeInfo">
              <h1>title</h1>
              <p>rating</p>
            </div>
          </div>
          <div className="priceInfoContainer">
            <h1 className="title">요금 세부정보</h1>
            <div className="priceInfoBox">
              <div className="priceInfo">
                <p>￦360000 x 5박</p>
                <p>￦180000</p>
              </div>
              <div className="priceInfo">
                <p>에어비앤비 서비스 수수료</p>
                <p>￦279531</p>
              </div>
            </div>
          </div>
          <div className="totalPriceInfoBox">
            <h2 className="title">총 합계</h2>
            <p>￦123812739182</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
