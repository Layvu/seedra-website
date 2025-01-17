import React from "react";

import { MenuUI } from "@components/ui/Menu";

const categories = [
  {
    id: 1,
    name: "All vegetables",
    subcategories: ["Cucumber", "Onion", "Garlic"],
  },
  {
    id: 2,
    name: "Bundles",
    subcategories: ["Cucumber", "Onion", "Garlic"],
  },
  {
    id: 3,
    name: "Herbs",
    subcategories: ["Basil", "Parsley", "Cilantro"],
  },
  {
    id: 4,
    name: "Vegetables",
    subcategories: ["Cucumber", "Onion", "Garlic"],
  },
  {
    id: 5,
    name: "Fruits",
    subcategories: ["Apple", "Banana", "Orange"],
  },
  {
    id: 6,
    name: "Herbs",
    subcategories: ["Basil", "Parsley", "Cilantro"],
  },
];

export const Menu: React.FC = () => {
  return <MenuUI categories={categories} />;
};
