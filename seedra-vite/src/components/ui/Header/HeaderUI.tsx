//import s from "./Header.module.scss";
import "./Header.scss";

import React from "react";
import { Link } from "react-router-dom";

interface HeaderUIProps {
  onMenuToggle: () => void;
}

export const HeaderUI: React.FC<HeaderUIProps> = ({ onMenuToggle }) => {
  return (
    <header className="header">
      <div className="container header__container">
        {/* logo */}
        <Link to="/" className="logo header__logo" aria-label="logo">
          <svg>
            <use xlinkHref="img/sprite.svg#logo"></use>
          </svg>
        </Link>

        {/* nav */}
        <nav className="nav header__nav">
          <ul className="nav__list">
            <li className="nav__item">
              <Link to="/all-products" className="nav__link nav__link_upper">
                all products
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/about-seedra" className="nav__link nav__link_upper">
                about seedra
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/our-blog" className="nav__link nav__link_upper">
                our blog
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/contacts" className="nav__link nav__link_upper">
                contacts
              </Link>
            </li>
          </ul>
        </nav>

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

        {/* shop-nav */}
        <ul className="shop-nav header__shop-nav">
          <li className="shop-nav__item">
            <Link to="/favorites" className="shop-nav__link" aria-label="favorites">
              <svg>
                <use xlinkHref="img/sprite.svg#favorites"></use>
              </svg>
            </Link>
          </li>
          <li className="shop-nav__item">
            <Link to="/cart" className="shop-nav__link" aria-label="cart">
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
