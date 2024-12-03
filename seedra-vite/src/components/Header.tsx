import React from "react";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container header__container">
        {/* logo */}
        <a href="#" className="logo header__logo" aria-label="logo">
          <svg>
            <use xlinkHref="img/sprite.svg#logo"></use>
          </svg>
        </a>

        {/* nav */}
        <nav className="nav header__nav">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#" className="nav__link nav__link_upper">
                all products
              </a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link nav__link_upper">
                about seedra
              </a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link nav__link_upper">
                our blog
              </a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link nav__link_upper">
                contacts
              </a>
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
            <a href="#" className="shop-nav__link" aria-label="favorites">
              <svg>
                <use xlinkHref="img/sprite.svg#favorites"></use>
              </svg>
            </a>
          </li>
          <li className="shop-nav__item">
            <a href="#" className="shop-nav__link" aria-label="cart">
              <svg>
                <use xlinkHref="img/sprite.svg#cart"></use>
              </svg>
            </a>
          </li>
        </ul>

        {/* menu__toggle */}
        <button className="header__menu-toggle btn-reset" aria-label="menu toggle">
          <svg>
            <use xlinkHref="img/sprite.svg#menu"></use>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
