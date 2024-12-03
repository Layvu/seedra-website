import React from "react";

const Menu: React.FC = () => {
  return (
    <div className="menu">
      <div className="container menu__container">
        {/* Search Form */}
        <form action="#" className="search-form menu__search-form">
          <button className="search-form__btn">
            <svg>
              <use xlinkHref="img/sprite.svg#loupe" />
            </svg>
          </button>
          <input type="text" className="search-form__input" placeholder="Search" />
        </form>

        {/* Navigation Menu */}
        <nav className="menu__nav">
          <ul className="menu__list">
            <li className="menu__item">
              <button className="menu__toggle btn-reset" aria-expanded="false">
                All vegetables
              </button>
            </li>
            <li className="menu__item">
              <button className="menu__toggle btn-reset" aria-expanded="false">
                Bundles
              </button>
            </li>
            <li className="menu__item">
              <button className="menu__toggle btn-reset" aria-expanded="false">
                Herbs
              </button>
            </li>

            <li className="menu__item">
              <button className="menu__toggle btn-reset" aria-expanded="false">
                Vegetables
              </button>
              <ul className="submenu">
                <li className="submenu__item">
                  <a href="#" className="submenu__link">
                    Cucumber
                  </a>
                </li>
                <li className="submenu__item">
                  <a href="#" className="submenu__link">
                    Onion
                  </a>
                </li>
                <li className="submenu__item">
                  <a href="#" className="submenu__link">
                    Garlic
                  </a>
                </li>
              </ul>
            </li>

            <li className="menu__item">
              <button className="menu__toggle btn-reset" aria-expanded="false">
                Fruits
              </button>
            </li>
            <li className="menu__item">
              <button className="menu__toggle btn-reset" aria-expanded="false">
                Supplies
              </button>
            </li>
            <li className="menu__item">
              <button className="menu__toggle btn-reset" aria-expanded="false">
                Flowers
              </button>
            </li>
            <li className="menu__item">
              <button className="menu__toggle btn-reset" aria-expanded="false">
                Our blog
              </button>
            </li>
            <li className="menu__item">
              <button className="menu__toggle btn-reset" aria-expanded="false">
                About Seedra
              </button>
            </li>
          </ul>
        </nav>

        {/* Social Icons */}
        <ul className="social menu__social">
          <li className="social__item">
            <a href="#" className="social__link">
              <svg>
                <use xlinkHref="img/sprite.svg#inst" />
              </svg>
            </a>
          </li>
          <li className="social__item">
            <a href="#" className="social__link">
              <svg>
                <use xlinkHref="img/sprite.svg#facebook" />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
