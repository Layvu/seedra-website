interface Category {
  name: string;
  icon: string;
}

interface Product {
  img: string;
  alt: string;
  title: string;
  price: string;
  reviewsCount: number;
  reviewRating: number;
}

export interface ProductsUIProps {
  categories: Category[];
  products: Product[];
}
