import React from "react";

import { SocialProps } from "types/social";
import { SocialUI } from "@components/ui/Shared/Social";

export const Social: React.FC<SocialProps> = ({ className }) => {
  return <SocialUI className={className} />;
};
