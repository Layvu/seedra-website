//import s from "./Header.module.scss";
import "./Header.scss";

import React from "react";
import { Link } from "react-router-dom";

import { HeaderUIProps } from "./type";

import { StaticNavigation } from "@components/Shared/StaticNavigation";
import { SearchForm } from "@components/Shared/SearchForm";
import { SvgIcon } from "@components/Shared/SvgIcon";
import { Social } from "@components/Shared/Social";

export const HeaderUI: React.FC<HeaderUIProps> = ({ onMenuToggle }) => {
  return (
    <header className="header">
      <div className="container header__container">
        <Link to="/" className="logo header__logo" aria-label="logo">
          <SvgIcon id="logo" title="Seedra logo" />
        </Link>

        <StaticNavigation className="header" />

        <Social className="header__social" />

        <SearchForm onSubmit={(query) => console.log(query)} className={"header"} />

        {/* shop-icons */}
        <ul className="shop-icons header__shop-icons">
          <li className="shop-icons__item">
            <Link to="/favorites" className="shop-icons__link" aria-label="favorites">
              <SvgIcon id="favorites" title="Favorites icon" />
            </Link>
          </li>
          <li className="shop-icons__item">
            <Link to="/cart" className="shop-icons__link" aria-label="cart">
              <SvgIcon id="cart" title="Cart icon" />
            </Link>
          </li>
        </ul>

        {/* menu__toggle */}
        <button
          className="header__menu-toggle btn-reset"
          aria-label="menu toggle"
          onClick={onMenuToggle}>
          <SvgIcon id="menu" title="Menu icon" />
        </button>
      </div>
    </header>
  );
};
