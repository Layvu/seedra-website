import "./DefaultButton.scss";
import classNames from "classnames";

import React from "react";
import { Link } from "react-router-dom";

import { DefaultButtonProps } from "types/Buttons";

export const DefaultButtonUI: React.FC<DefaultButtonProps> = ({ className, to, onClick, children }) => {
  const buttonClasses = classNames("default-btn", className);

  if (to) {
    return (
      <Link to={to} className={buttonClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={buttonClasses} onClick={onClick}>
      {children}
    </button>
  );
};
