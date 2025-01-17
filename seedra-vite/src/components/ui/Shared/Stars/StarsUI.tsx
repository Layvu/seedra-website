import React from "react";
import classNames from "classnames";
import "./Stars.scss";

import { StarsProps } from "types/stars";
import { SvgIcon } from "@components/Shared/SvgIcon";

export const StarsUI: React.FC<StarsProps> = ({ rating, className }) => {
  const starClass = className ? `${className}__star` : "";

  return (
    <ul className={classNames("stars", className && `${className}__stars`)}>
      {[...Array(5)].map((_, index) => (
        <li key={index} className={classNames("stars__star", starClass, { filled: index < rating })}>
          <SvgIcon id="star" title="Star icon" />
        </li>
      ))}
    </ul>
  );
};
