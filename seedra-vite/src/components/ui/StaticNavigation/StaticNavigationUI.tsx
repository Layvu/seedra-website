//import s from "./Navigation.module.scss";
import "./StaticNavigation.scss";

import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";

import { NavigationProps } from "./type";

export const StaticNavigationUI: React.FC<NavigationProps> = ({
  items,
  className,
  isUppercase = true,
}) => (
  <nav className={classNames("base-nav", `${className}__nav`)}>
    <ul className={classNames("base-nav__list", `${className}__list`)}>
      {items.map((item, index) => (
        <li key={index} className={classNames("base-nav__item", `${className}__item`)}>
          <Link
            to={item.href}
            className={classNames("base-nav__link", `${className}__link`, {
              "base-nav__link_upper": isUppercase,
            })}>
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);
