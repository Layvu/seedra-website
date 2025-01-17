import React from "react";

import classNames from "classnames";
import "./SectionHeader.scss";

import { SectionHeaderProps } from "types/sectionHeader";
import { DefaultButton } from "@components/Shared/DefaultButton";

export const SectionHeaderUI: React.FC<SectionHeaderProps> = ({
  className,
  title,
  buttonText,
  buttonLink,
}) => {
  return (
    <div className={classNames("section-header", className)}>
      <h2 className="section-header__title">{title}</h2>

      <DefaultButton to={buttonLink}>{buttonText}</DefaultButton>
    </div>
  );
};
