import React, { useState, useContext } from "react";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import { useParams } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import ConfirmationModal from "./ConfirmationModal";
import { useBooks } from "../hooks/useBooks";

const Review = ({ review, onEdit }) => {
  const { id } = useParams();
  const { currentUser } = useContext(AuthContext);
  const [isModalOpen, setModalOpen] = useState(false);
  const { deleteReview } = useBooks();

  const userId = currentUser?.id;
  const reviewUserId = review?.user?._id;

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        i <= rating ? (
          <StarRoundedIcon key={i} className="text-sm text-yellow-500" />
        ) : (
          <StarBorderRoundedIcon key={i} className="text-sm text-yellow-500" />
        ),
      );
    }
    return stars;
  };

  const handleDeleteReview = async () => {
    try {
      await deleteReview(id, review._id);
      setModalOpen(false);
    } catch (err) {
      console.error("Failed to delete review:", err);
    }
  };

  return (
    <div className="flex max-h-[350px] max-w-[350px] flex-col overflow-hidden rounded-lg bg-white p-4 shadow-md">
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
      {userId === reviewUserId && (
        <div className="flex justify-end space-x-2">
          <button
            className="flex items-center rounded-md border border-transparent bg-red-700 px-3 py-1 text-xs text-gray-200 transition duration-300 hover:border-red-700 hover:bg-white hover:text-red-700"
            onClick={() => setModalOpen(true)}
          >
            <DeleteRoundedIcon className="mr-1 text-sm" /> Remove
          </button>
          <button
            className="flex items-center rounded-md border border-transparent bg-blue-500 px-3 py-1 text-xs text-gray-200 transition duration-300 hover:border-sky-800 hover:bg-white hover:text-blue-500"
            onClick={() => onEdit(review)}
          >
            <EditRoundedIcon className="mr-1 text-sm" /> Edit
          </button>
        </div>
      )}
      <ConfirmationModal
        isOpen={isModalOpen}
        message="Are you sure you want to delete this review?"
        onConfirm={handleDeleteReview}
        onCancel={() => setModalOpen(false)}
      />
    </div>
  );
};

export default Review;
