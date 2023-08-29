import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ImSearch } from 'react-icons/im';
import useOutsideClick from '../../hooks/useClickOutside';
import Logo from './Logo';
import Search from './Search';
import UserMenu from './UserMenu';
import CountryList from './CountryList';
import './Navbar.scss';

const Navbar = () => {
  const [expanded, setExpanded] = useState(false);
  const [isToggleCountryMenu, setIsToggleCountryMenu] = useState(false);
  const navbarContentRef = useRef();
  const exceptionRef = useRef();

  const handleToggleCountryMenu = () => {
    setIsToggleCountryMenu(prev => !prev);
  };

  const handleSearchClick = () => {
    setExpanded(true);
  };

  useOutsideClick(
    navbarContentRef,
    () => {
      setExpanded(false);
      setIsToggleCountryMenu(false);
    },
    exceptionRef,
  );

  return (
    <div className="navbarContainer">
      <div className="navbarContentBox" ref={navbarContentRef}>
        <Link to="/">
          <Logo />
        </Link>
        {!expanded ? (
          <Search handleSearchClick={handleSearchClick} />
        ) : (
          <div className="fullExpanded">
            <p className="searchTitle">숙소</p>
            <div
              className="expandedSearchContainer"
              onClick={handleToggleCountryMenu}
            >
              <div className="searchCountryBox">
                <p className="expandedSearchInputName">
                  어느 나라로 여행하실래요?
                </p>
                <p>국가 검색</p>
              </div>
              <div className="expandedSearchIconBox">
                <ImSearch className="expandedSearchIcon" size={14} />
                <span className="searchText">검색</span>
              </div>
            </div>
            {isToggleCountryMenu && <CountryList />}
          </div>
        )}
        <UserMenu />
      </div>
    </div>
  );
};

export default Navbar;
