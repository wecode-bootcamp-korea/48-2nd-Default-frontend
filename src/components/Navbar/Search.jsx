import React, { useRef } from 'react';
import { ImSearch } from 'react-icons/im';
import useOutsideClick from '../../hooks/useClickOutside';
import './Search.scss';

const Search = ({
  handleSearchClick,
  setIsToggleCountryMenu,
  setIsExpanded,
}) => {
  const searchRef = useRef();
  const exceptionRef = useRef();

  useOutsideClick(
    searchRef,
    () => {
      setIsExpanded(false);
      setIsToggleCountryMenu(false);
    },
    exceptionRef,
  );

  return (
    <div
      className="searchContainer"
      onClick={handleSearchClick}
      ref={searchRef}
    >
      <p className="searchInputName">어느 나라 어디든지 여행하세요</p>
      <div className="searchIconBox">
        <ImSearch className="searchIcon" size={14} />
      </div>
    </div>
  );
};

export default Search;
