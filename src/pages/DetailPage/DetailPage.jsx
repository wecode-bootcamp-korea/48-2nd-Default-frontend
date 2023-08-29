import React, { useEffect, useRef, useState } from 'react';
import { BiBed } from 'react-icons/bi';
import Calendar from '../../components/Calendar/Calendar';
import ReservationBox from '../../components/Detail/ReservationBox';
import useOutsideClick from '../../hooks/useClickOutside';
import './DetailPage.scss';
import Review from '../../components/Detail/Review';

const DetailPage = () => {
  const [detailData, setDetailData] = useState([]);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);
  const calendarRef = useRef();
  const dateSelectRef = useRef();

  useOutsideClick(
    calendarRef,
    () => {
      setIsCalendarOpen(false);
    },
    dateSelectRef,
  );

  useEffect(() => {
    fetch('/data/data.json', {
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    })
      .then(res => res.json())
      .then(data => {
        setDetailData(data);
      });
  }, []);
  const calculateNights = () => {
    if (!selectedStartDate || !selectedEndDate) {
      return 0;
    }

    const timeDiff = selectedEndDate - selectedStartDate;
    const daysDiff = timeDiff / (1000 * 60 * 60 * 24);
    return Math.floor(daysDiff);
  };

  return (
    <div className="detail">
      {detailData.map(detail => (
        <div className="detailContainer" key={detail.id}>
          <div className="detailHeader">
            <div className="title">{detail.title}</div>
            <div className="subTitle">
              별점 후기 슈퍼호스트 Yeongwol-gun, 강원도, 한국
            </div>
          </div>
          <div className="detailImageBox">
            {detail.imageUrl.map(image => (
              <img
                key={image.id}
                className="detailImage"
                src={image.src}
                alt={image.alt}
              />
            ))}
          </div>
          <div className="detailContentBox">
            <div className="hostInfo">
              <div className="hostInfoHeaderBox">
                <div className="hostInfoHeader">
                  <h1 className="title">askfjlsa</h1>
                  <p className="subtitle">
                    <span>최대 인원 {detail.guestsCount}명</span>
                    <span>침실 {detail.bedroomsCount}개</span>
                    <span>wifi {detail.wifiBoolean ? '있음' : '없음'}</span>
                    <span>욕실 {detail.bathroomsCount}개</span>
                    <span>에어컨 {detail.airConditioningCount}개</span>
                  </p>
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
              <div className="description">
                <p>{detail.roomDescription}</p>
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
                <h1 className="title">
                  Yeongwol-gun에서 {calculateNights()}박
                </h1>
                <Calendar
                  selectedStartDate={selectedStartDate}
                  selectedEndDate={selectedEndDate}
                  setSelectedEndDate={setSelectedEndDate}
                  setSelectedStartDate={setSelectedStartDate}
                />
              </div>
            </div>
            <div className="paymentContainer">
              <ReservationBox
                calculatedNights={calculateNights()}
                setIsCalendarOpen={setIsCalendarOpen}
                selectedStartDate={selectedStartDate}
                selectedEndDate={selectedEndDate}
                ref={dateSelectRef}
              />
              <div className="reservationCalendarBox" ref={calendarRef}>
                {isCalendarOpen && (
                  <Calendar
                    className="calendarModal"
                    selectedStartDate={selectedStartDate}
                    selectedEndDate={selectedEndDate}
                    setSelectedEndDate={setSelectedEndDate}
                    setSelectedStartDate={setSelectedStartDate}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
      <Review />
    </div>
  );
};

export default DetailPage;
