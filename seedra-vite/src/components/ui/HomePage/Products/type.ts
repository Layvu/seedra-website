import { ProductCardProps } from "types/product";

interface Category {
  name: string;
  icon: string;
}

export interface ProductsUIProps {
  categories: Category[];
  products: ProductCardProps[];
}
