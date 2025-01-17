import React from "react";

import { ReviewCardUI } from "@components/ui/HomePage/Reviews";
import { ReviewCardProps } from "@components/ui/HomePage/Reviews/type";

export const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  return <ReviewCardUI review={review} />;
};
