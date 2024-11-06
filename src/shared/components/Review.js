import React from "react";
import styled from "styled-components";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import { deleteReview, editReview } from "../../api";
import { useParams } from "react-router-dom";
const ReviewCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-height: 350px;
  overflow: hidden;
`;
const ReviewContent = styled.p`
  margin: 5px 0px;
  font-size: 14px;
  padding: 10px;
`;
const UserInfo = styled.div`
  display: flex;
`;
const UserAvatar = styled.div``;
const UserName = styled.h3`
  display: flex;
  align-items: start;
  flex-direction: column;
  margin-bottom: 0px;
  margin-left: 10px;
`;
const Stars = styled.div`
  display: flex;
  align-items: center;
  color: #ffc107;
`;
const TopOfReview = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;
const Date = styled.div`
  padding: 10px;
`;

const Review = ({ review }) => {
  const { id } = useParams();
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<StarRoundedIcon key={i} style={{ fontSize: "20px" }} />);
      } else {
        stars.push(
          <StarBorderRoundedIcon key={i} style={{ fontSize: "20px" }} />,
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
      console.error("Can't Edit review", err);
    }
  };

  return (
    <ReviewCard>
      <TopOfReview>
        <UserInfo>
          <AccountCircleRoundedIcon style={{ fontSize: "60px" }} />
          <UserName>
            {review.user.firstname + " " + review.user.lastname}
            <Stars>{renderStars(review.rating)}</Stars>
          </UserName>
        </UserInfo>
        <Date>
          {new window.Date(review.createdAt).toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
          })}
        </Date>
      </TopOfReview>
      <ReviewContent>{review.comment}</ReviewContent>
      <div className="flex w-full justify-end">
        <button
          className="mx-1 flex items-center rounded-md border border-transparent bg-red-700 text-xs text-gray-200 transition-all duration-300 hover:border hover:!border-red-700 hover:bg-white hover:text-red-700"
          onClick={handleDeleteReview}
        >
          <DeleteRoundedIcon style={{ fontSize: "1rem" }} />
          Remove
        </button>
        <button
          className="mx-1 flex items-center rounded-md border border-transparent bg-sky-800 text-xs text-gray-200 transition-all duration-300 hover:!border-sky-800 hover:bg-white hover:text-sky-800"
          onClick={handleEditReview}
        >
          <EditRoundedIcon style={{ fontSize: "1rem" }} /> Edit
        </button>
      </div>
    </ReviewCard>
  );
};

export default Review;
