export interface ProductCardProps {
  id: string;
  img: string;
  alt: string;
  reviewRating: number;
  reviewsCount: number;
  title: string;
  price: string;
  isFavorite?: boolean;
  onFavoriteToggle?: () => void;
  onAddToCart?: () => void;
}
