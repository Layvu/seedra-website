import React from "react";

import { SectionHeaderProps } from "types/sectionHeader";
import { SectionHeaderUI } from "@components/ui/HomePage/SectionHeader";

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  className,
  title,
  buttonText,
  buttonLink,
}) => {
  return (
    <SectionHeaderUI
      className={className}
      title={title}
      buttonText={buttonText}
      buttonLink={buttonLink}
    />
  );
};
