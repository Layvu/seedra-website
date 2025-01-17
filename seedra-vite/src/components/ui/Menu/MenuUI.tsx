//import s from "./Menu.module.scss";
// import { CSSTransition } from "react-transition-group";
import "./Menu.scss";

import React, { useState } from "react";
import { Link } from "react-router-dom";

import { MenuUIProps } from "./type";

import { StaticNavigation } from "@components/Shared/StaticNavigation";
import { SearchForm } from "@components/Shared/SearchForm";
import { Social } from "@components/Shared/Social";

export const MenuUI: React.FC<MenuUIProps> = ({ categories }) => {
  const [openCategoryId, setOpenCategoryId] = useState<number | null>(null);

  const handleCategoryClick = (categoryId: number) => {
    setOpenCategoryId((prevId) => (prevId === categoryId ? null : categoryId));
  };

  // With Provider
  //<CSSTransition in={isMenuOpen} timeout={300} classNames="menu" unmountOnExit></CSSTransition>

  return (
    <div className="menu">
      <div className="menu__overlay"></div>
      <div className="container menu__container">
        <SearchForm onSubmit={(query) => console.log(query)} className={"menu"} />

        {/* Categories Menu */}
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
                      <Link
                        // fix to=
                        to={`/all-products?filter=${category}+${subcategory}`}
                        className="submenu__link">
                        {subcategory}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        <StaticNavigation className={"menu"} isUppercase={false} />

        <Social className="menu__social" />
      </div>
    </div>
  );
};
