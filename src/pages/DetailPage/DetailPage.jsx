import React, { useEffect } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { BiBed } from 'react-icons/bi';
import Calendar from '../../components/Calendar/Calendar';
import './DetailPage.scss';
import ReviewItem from '../../components/Detail/ReviewItem';

const IMAGES = [
  {
    id: 1,
    src: 'https://a0.muscache.com/im/pictures/5874cae5-198f-4301-91af-d3eb137dd6c4.jpg?im_w=960',
    alt: '상품 상세',
  },
  {
    id: 2,
    src: 'https://a0.muscache.com/im/pictures/5874cae5-198f-4301-91af-d3eb137dd6c4.jpg?im_w=960',
    alt: '상품 상세',
  },
  {
    id: 3,
    src: 'https://a0.muscache.com/im/pictures/5874cae5-198f-4301-91af-d3eb137dd6c4.jpg?im_w=960',
    alt: '상품 상세',
  },
  {
    id: 4,
    src: 'https://a0.muscache.com/im/pictures/5874cae5-198f-4301-91af-d3eb137dd6c4.jpg?im_w=960',
    alt: '상품 상세',
  },
  {
    id: 5,
    src: 'https://a0.muscache.com/im/pictures/5874cae5-198f-4301-91af-d3eb137dd6c4.jpg?im_w=960',
    alt: '상품 상세',
  },
];

const DetailPage = () => {
  useEffect(() => {
    fetch('', {
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    }).then(res => res.json());
  }, []);

  return (
    <div className="detailContainer">
      <div className="detailHeader">
        <div className="title">강원도 영월에 위치한 통나무집 A</div>
        <div className="subTitle">
          별점 후기 슈퍼호스트 Yeongwol-gun, 강원도, 한국
        </div>
      </div>
      <div className="detailImageBox">
        {IMAGES.map(image => (
          <img
            className="detailImage"
            key={image.id}
            src={image.src}
            alt={image.alt}
          />
        ))}
      </div>
      <div className="detailContentBox">
        <div className="hostInfo">
          <div className="hostInfoHeaderBox">
            <div className="hostInfoHeader">
              <h1 className="title">Geumju 님이 호스팅하는 통나무집 전체</h1>
              <p className="subtitle">최대 인원 7명침실 2개침대 4개욕실 0개</p>
            </div>
            <img
              src="https://a0.muscache.com/im/pictures/5874cae5-198f-4301-91af-d3eb137dd6c4.jpg?im_w=960"
              alt="프로필"
            />
          </div>
          <div className="itemInfo">
            <div className="infoIcon">
              <BiBed size={30} />
              <p className="infoIconText">셀프 체크인</p>
            </div>
            <div className="infoIcon">
              <BiBed size={30} />
              <p className="infoIconText">유자님은 슈퍼호스트입니다</p>
            </div>
            <div className="infoIcon">
              <BiBed size={30} />
              <p className="infoIconText">
                8월 26일 오후 12:00 전까지 무료로 취소하실 수 있습니다.
              </p>
            </div>
          </div>
          <div className="place">
            <h1 className="title">숙박 장소</h1>
            <div className="placeInfoContent">
              <BiBed size={30} />
              <p className="contentTitle">침실</p>
              <p className="contentDetail">퀸사이즈 침대 1개</p>
            </div>
          </div>
          <div className="convenient">
            <h1 className="title">숙소 편의시설</h1>
            <div className="convenientContent">
              <div className="contentIcon">
                <BiBed size={30} />
                <p>강 전망</p>
              </div>
              <div className="contentIcon">
                <BiBed size={30} />
                <p>전용 온수 욕조</p>
              </div>
              <div className="contentIcon">
                <BiBed size={30} />
                <p>공용 수영장</p>
              </div>
              <div className="contentIcon">
                <BiBed size={30} />
                <p>140인치 HDTV</p>
              </div>
            </div>
          </div>
          <div className="calendarReservation">
            <h1 className="title">Yeongwol-gun에서 6박</h1>
            <Calendar />
          </div>
          <div className="review">
            <div className="reviewHeader">
              <AiFillStar size={22} />
              <p>4.90</p>
              <p>후기 240개</p>
            </div>
            <div className="reviewContent">
              <ReviewItem />
              <ReviewItem />
            </div>
          </div>
        </div>
        <div className="paymentContainer">hihi</div>
      </div>
    </div>
  );
};

export default DetailPage;
