import React from "react";

import { NavigationProps } from "types/navigation";
import { StaticNavigationUI } from "@components/ui/Shared/StaticNavigation";
import { staticNavItems } from "constants/navigation";

export const StaticNavigation: React.FC<NavigationProps> = ({
  items = staticNavItems.slice(0, 4),
  className,
  isUppercase,
}) => {
  return <StaticNavigationUI items={items} className={className} isUppercase={isUppercase} />;
};
