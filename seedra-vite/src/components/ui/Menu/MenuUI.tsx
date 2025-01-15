//import s from "./Menu.module.scss";
import "./Menu.scss";

import React, { useState } from "react";
import { Link } from "react-router-dom";

// import { CSSTransition } from "react-transition-group";

interface Category {
  id: number;
  name: string;
  subcategories: string[];
}

interface MenuUIProps {
  categories: Category[];
}

export const MenuUI: React.FC<MenuUIProps> = ({ categories }) => {
  const [openCategoryId, setOpenCategoryId] = useState<number | null>(null);

  const handleCategoryClick = (categoryId: number) => {
    setOpenCategoryId((prevId) => (prevId === categoryId ? null : categoryId));
  };

  // With Provider
  //<CSSTransition in={isMenuOpen} timeout={300} classNames="menu" unmountOnExit></CSSTransition>

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
            {categories.map((category) => (
              <li className="menu__item" key={category.id}>
                <button
                  className="menu__toggle btn-reset"
                  aria-expanded={openCategoryId === category.id}
                  onClick={() => handleCategoryClick(category.id)}>
                  {category.name}
                </button>

                {openCategoryId === category.id && (
                  <ul className="submenu">
                    {category.subcategories.map((subcategory, index) => (
                      <li key={index} className="submenu__item">
                        <a href="#" className="submenu__link">
                          {subcategory}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}

            <li className="menu__item">
              <Link to="/our-blog" className="menu__toggle btn-reset" aria-expanded="false">
                Our blog
              </Link>
            </li>
            <li className="menu__item">
              <Link to="/about-seedra" className="menu__toggle btn-reset" aria-expanded="false">
                About Seedra
              </Link>
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
