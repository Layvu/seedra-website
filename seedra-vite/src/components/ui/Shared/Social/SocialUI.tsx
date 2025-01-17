import React from "react";

import classNames from "classnames";
import "./Social.scss";

import { SocialProps } from "types/social";
import { SvgIcon } from "@components/Shared/SvgIcon";

export const SocialUI: React.FC<SocialProps> = ({ className }) => {
  return (
    <ul className={classNames("social", className)}>
      <li className="social__item">
        <a href="#" className="social__link">
          <SvgIcon id="inst" title="Instagram icon" />
        </a>
      </li>
      <li className="social__item">
        <a href="#" className="social__link">
          <SvgIcon id="facebook" title="Facebook icon" />
        </a>
      </li>
    </ul>
  );
};
