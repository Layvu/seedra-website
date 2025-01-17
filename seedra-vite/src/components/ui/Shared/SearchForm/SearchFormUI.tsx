import React from "react";

import "./SearchForm.scss";
import classNames from "classnames";

import { SearchFormUIProps } from "./type";

export const SearchFormUI: React.FC<SearchFormUIProps> = ({
  query,
  onQueryChange,
  onSubmit,
  placeholder,
  className,
}) => (
  <form
    className={classNames("search-form", className && `${className}__search-form`)}
    onSubmit={onSubmit}>
    <button className="search-form__btn" type="submit" aria-label="Search" title="Search">
      <svg>
        <use xlinkHref="img/sprite.svg#loupe"></use>
      </svg>
    </button>
    <input
      className="search-form__input"
      type="text"
      value={query}
      onChange={(e) => onQueryChange(e.target.value)}
      placeholder={placeholder}
    />
  </form>
);
