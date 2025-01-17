import React from "react";

import { DefaultButtonProps } from "types/Buttons";
import { DefaultButtonUI } from "@components/ui/Shared/DefaultButton";

export const DefaultButton: React.FC<DefaultButtonProps> = ({ className, to, onClick, children }) => {
  return (
    <DefaultButtonUI className={className} to={to} onClick={onClick}>
      {children}
    </DefaultButtonUI>
  );
};
