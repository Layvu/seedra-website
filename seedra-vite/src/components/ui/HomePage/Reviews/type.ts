export interface Review {
  id: number;
  name: string;
  date: string;
  rating: number;
  description: string;
  avatar: string;
}

export interface ReviewsUIProps {
  reviews: Review[];
}

export interface ReviewCardProps {
  review: Review;
}
