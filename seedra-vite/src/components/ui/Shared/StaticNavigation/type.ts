import { NavigationItem } from "types/navigation";

export interface NavigationProps {
  items: NavigationItem[];
  className: string;
  isUppercase?: boolean;
}
