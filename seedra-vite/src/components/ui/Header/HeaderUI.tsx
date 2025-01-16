//import s from "./Header.module.scss";
import React from "react";
import { Link } from "react-router-dom";

import { StaticNavigation } from "@components/StaticNavigation";

import "./Header.scss";

interface HeaderUIProps {
  onMenuToggle: () => void;
}

export const HeaderUI: React.FC<HeaderUIProps> = ({ onMenuToggle }) => {
  return (
    <header className="header">
      <div className="container header__container">
        <Link to="/" className="logo header__logo" aria-label="logo">
          <svg>
            <use xlinkHref="img/sprite.svg#logo"></use>
          </svg>
        </Link>

        <StaticNavigation className="header" />

        {/* social */}
        <ul className="social header__social">
          <li className="social__item">
            <a href="#" className="social__link">
              <svg>
                <use xlinkHref="img/sprite.svg#inst"></use>
              </svg>
            </a>
          </li>
          <li className="social__item">
            <a href="#" className="social__link">
              <svg>
                <use xlinkHref="img/sprite.svg#facebook"></use>
              </svg>
            </a>
          </li>
        </ul>

        {/* search */}
        <form action="#" className="search-form header__search-form">
          <button className="search-form__btn">
            <svg>
              <use xlinkHref="img/sprite.svg#loupe"></use>
            </svg>
          </button>
          <input type="text" className="search-form__input" placeholder="Search" />
        </form>

        {/* shop-icons */}
        <ul className="shop-icons header__shop-icons">
          <li className="shop-icons__item">
            <Link to="/favorites" className="shop-icons__link" aria-label="favorites">
              <svg>
                <use xlinkHref="img/sprite.svg#favorites"></use>
              </svg>
            </Link>
          </li>
          <li className="shop-icons__item">
            <Link to="/cart" className="shop-icons__link" aria-label="cart">
              <svg>
                <use xlinkHref="img/sprite.svg#cart"></use>
              </svg>
            </Link>
          </li>
        </ul>

        {/* menu__toggle */}
        <button
          className="header__menu-toggle btn-reset"
          aria-label="menu toggle"
          onClick={onMenuToggle}>
          <svg>
            <use xlinkHref="img/sprite.svg#menu"></use>
          </svg>
        </button>
      </div>
    </header>
  );
};
