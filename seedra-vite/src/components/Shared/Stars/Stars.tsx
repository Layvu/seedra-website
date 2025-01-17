import React from "react";

import { StarsProps } from "types/stars";
import { StarsUI } from "@components/ui/Shared/Stars";

export const Stars: React.FC<StarsProps> = ({ rating, className }) => {
  return <StarsUI rating={rating} className={className} />;
};
