import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { editReview, submitReview } from "../../api";
import { Rating } from "@mui/material";

const ReviewForm = ({ selectedReview, onReset }) => {
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);
  const { id } = useParams();

  useEffect(() => {
    if (selectedReview) {
      setComment(selectedReview.comment);
      setRating(selectedReview.rating);
    }
  }, [selectedReview]);

  const handleOnSubmitReview = async () => {
    const reviewData = {
      comment,
      rating,
    };
    if (selectedReview) {
      await editReview(id, reviewData);
    } else await submitReview(id, reviewData);
    window.location.reload();
    setRating(0);
    setComment("");
  };

  return (
    <div className="flex w-full flex-col items-start py-5">
      <div className="flex w-full max-w-4xl flex-col gap-5 rounded-lg border border-gray-200 bg-white p-5">
        <div className="mb-5 flex flex-col">
          <label className="mb-2 text-lg font-bold">Rating</label>
          <Rating
            name="half-rating"
            defaultValue={0}
            precision={1}
            size="large"
            value={rating}
            onChange={(event, value) => setRating(value)}
          />
        </div>
        <div className="mb-5 flex flex-col">
          <label className="mb-2 text-lg font-bold">Write your review</label>
          <textarea
            rows={6}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="w-full rounded-md border border-gray-300 p-2 outline-none transition-all duration-200 focus:!border-indigo-600 focus:ring-4 focus:ring-indigo-600 focus:ring-opacity-20"
          />
        </div>
        {selectedReview ? (
          <button
            onClick={handleOnSubmitReview}
            className="w-full rounded-lg bg-blue-600 py-3 text-lg font-bold text-white transition duration-300 hover:bg-blue-500 focus:outline-none active:scale-95"
          >
            Update Review
          </button>
        ) : (
          <button
            onClick={handleOnSubmitReview}
            className="w-full rounded-lg bg-green-600 py-3 text-lg font-bold text-white transition duration-300 hover:bg-green-500 focus:outline-none active:scale-95"
          >
            Submit Review
          </button>
        )}
      </div>
    </div>
  );
};

export default ReviewForm;
