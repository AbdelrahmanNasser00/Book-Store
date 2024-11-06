import { Rating } from "@mui/material";
import { MDBTextArea } from "mdb-react-ui-kit";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { submitReview } from "../../api";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: start;
  height: auto;
  box-sizing: border-box;
  padding: 20px 0px 20px 0px;
`;

const Wrapper = styled.div`
  background-color: white;
  border-radius: 12px;
  border: 0.5px solid #eee;
  padding: 20px;
  width: 50%;
  max-width: 1320px;
  /* box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1); */
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const Label = styled.label`
  margin-bottom: 10px;
  font-weight: bold;
  font-size: 16px;
`;

const SubmitBtn = styled.button`
  width: 100%;
  padding: 12px;
  font-size: 16px;
  background-color: #4caf50; /* Primary blue color */
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s ease;

  &:hover {
    background-color: #45a049; /* Darker blue on hover */
    transform: scale(1.02); /* Slight zoom effect */
  }

  &:focus {
    outline: none; /* Remove focus outline */
  }

  &:active {
    transform: scale(0.98); /* Slight shrink on click */
  }
`;

const UserReview = () => {
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);
  const { id } = useParams();

  const handleOnSubmitReview = async () => {
    const reviewData = {
      comment,
      rating,
    };
    const response = await submitReview(id, reviewData);
    setRating(0);
    setComment("");
  };

  return (
    <div className="container">
      <Container>
        <Wrapper>
          {/* Rating Section */}
          <FormGroup>
            <Label>Rating</Label>
            <Rating
              name="half-rating"
              defaultValue={0}
              precision={1}
              size="large"
              value={rating}
              onChange={(event, value) => setRating(value)}
            />
          </FormGroup>
          <FormGroup>
            <MDBTextArea
              label="Write your review"
              rows={6}
              style={{ fontSize: "14px" }}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </FormGroup>
          <SubmitBtn color="primary" onClick={handleOnSubmitReview}>
            Submit Review
          </SubmitBtn>
        </Wrapper>
      </Container>
    </div>
  );
};

export default UserReview;
