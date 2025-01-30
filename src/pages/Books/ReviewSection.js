import React, { useState } from "react";
import ReviewForm from "./ReviewForm";
import ReviewsContainer from "./ReviewsContainer";

const ReviewSection = () => {
  const [selectedReview, setSelectedReview] = useState(null);
  return (
    <div className="mt-16">
      <h2 className="mb-6 text-2xl font-semibold text-gray-800">
        Customer Reviews
      </h2>
      <ReviewForm
        selectedReview={selectedReview}
        onReset={() => setSelectedReview(null)}
      />
      <ReviewsContainer onEdit={(review) => setSelectedReview(review)} />
    </div>
  );
};

export default ReviewSection;
