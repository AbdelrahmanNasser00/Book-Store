import React from "react";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import { deleteReview, editReview } from "../api";
import { useParams } from "react-router-dom";

const Review = ({ review }) => {
  const { id } = useParams();

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(
          <StarRoundedIcon key={i} className="text-sm text-yellow-500" />,
        );
      } else {
        stars.push(
          <StarBorderRoundedIcon key={i} className="text-sm text-yellow-500" />,
        );
      }
    }
    return stars;
  };

  const handleDeleteReview = async () => {
    try {
      await deleteReview(id);
    } catch (err) {
      console.error("Can't delete review", err);
    }
  };

  const handleEditReview = async () => {
    try {
      await editReview(id);
    } catch (err) {
      console.error("Can't edit review", err);
    }
  };

  return (
    <div className="flex max-h-[350px] flex-col overflow-hidden rounded-lg bg-white p-4 shadow-md">
      <div className="flex items-center justify-between pb-4">
        <div className="flex items-center">
          <AccountCircleRoundedIcon className="text-6xl text-gray-700" />
          <div className="ml-4">
            <h3 className="text-lg font-semibold text-gray-800">
              {review.user.firstname + " " + review.user.lastname}
            </h3>
            <div className="flex items-center">
              {renderStars(review.rating)}
            </div>
          </div>
        </div>
        <div className="text-sm text-gray-600">
          {new window.Date(review.createdAt).toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
          })}
        </div>
      </div>
      <p className="mb-4 text-sm leading-relaxed text-gray-700">
        {review.comment}
      </p>
      <div className="flex justify-end space-x-2">
        <button
          className="flex items-center rounded-md border border-transparent bg-red-700 px-3 py-1 text-xs text-gray-200 transition duration-300 hover:border-red-700 hover:bg-white hover:text-red-700"
          onClick={handleDeleteReview}
        >
          <DeleteRoundedIcon className="mr-1 text-sm" /> Remove
        </button>
        <button
          className="flex items-center rounded-md border border-transparent bg-blue-500 px-3 py-1 text-xs text-gray-200 transition duration-300 hover:border-sky-800 hover:bg-white hover:text-blue-500"
          onClick={handleEditReview}
        >
          <EditRoundedIcon className="mr-1 text-sm" /> Edit
        </button>
      </div>
    </div>
  );
};

export default Review;
