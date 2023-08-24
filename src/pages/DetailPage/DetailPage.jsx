import React from 'react';
import { MdOutlineMeetingRoom } from 'react-icons/md';
import './DetailPage.scss';

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
              <h1>Geumju 님이 호스팅하는 통나무집 전체</h1>
              <p className="subtitle">최대 인원 7명침실 2개침대 4개욕실 0개</p>
            </div>
            <img
              src="https://a0.muscache.com/im/pictures/5874cae5-198f-4301-91af-d3eb137dd6c4.jpg?im_w=960"
              alt="프로필"
            />
          </div>
          <div className="itemInfo">
            <div>
              <MdOutlineMeetingRoom size={18} />
              <p>셀프 체크인</p>
            </div>
            <div />
            <div />
          </div>
          <div className="place">침실 공간</div>
          <div className="convenient">숙소 편의시설</div>
          <div className="calendar">Yeongwol-gun에서 6박</div>
          <div className="review">
            650개 후기에서 별 5개 만점에 4.96개 4.96 · 후기 650개
          </div>
        </div>
        <div className="pay">hihi</div>
      </div>
    </div>
  );
};

export default DetailPage;
