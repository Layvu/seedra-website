import React from "react";
import { Link } from "react-router-dom";

import classNames from "classnames";
import "./SectionHeader.scss";

import { SectionHeaderProps } from "types/sectionHeader";

export const SectionHeaderUI: React.FC<SectionHeaderProps> = ({
  className,
  title,
  buttonText,
  buttonLink,
}) => {
  return (
    <div className={classNames("section-header", className)}>
      <h2 className="section-header__title">{title}</h2>
      <Link to={buttonLink} className="btn-reset default-btn">
        {buttonText}
      </Link>
    </div>
  );
};
