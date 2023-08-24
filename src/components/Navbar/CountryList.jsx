import React from 'react';
import CountryListItem from './CountryListItem';
import './CountryList.scss';

const CountryList = () => {
  return (
    <div className="countryLisContainer">
      <div className="countryLisBox">
        <div className="boxHeader">지역으로 검색하기</div>
        <div className="boxBody">
          <CountryListItem />
          <CountryListItem />
          <CountryListItem />
          <CountryListItem />
          <CountryListItem />
          <CountryListItem />
        </div>
      </div>
    </div>
  );
};

export default CountryList;
