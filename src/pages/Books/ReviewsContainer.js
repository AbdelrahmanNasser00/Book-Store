import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Review from "../../components/Review";
import { useParams } from "react-router-dom";
import { fetchReviews } from "../../api";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #eee;
  padding: 10px;
  border-radius: 10px;
  width: 100%;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  /* max-width: 350px; */
  grid-gap: 20px;
  padding: 20px;
  border-radius: 10px;
  @media (max-width: 668px) {
    padding: 0px;
  }
`;

const ReviewsHeader = styled.h2`
  padding: 20px;
`;

const ReviewsContainer = ({ onEdit }) => {
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const getReviews = async () => {
      try {
        const reviews = await fetchReviews(id);
        if (reviews) {
          setReviews(reviews.data.reviews);
        }
      } catch (error) {
        console.error("Failed to fetch books:", error);
        setReviews([]);
      }
    };
    getReviews();
  }, [id]);

  return (
    <Container>
      <ReviewsHeader> Customers Reviews</ReviewsHeader>
      <Wrapper>
        {reviews.map((review) => (
          <Review key={review._id} review={review} onEdit={onEdit} />
        ))}
      </Wrapper>
    </Container>
  );
};

export default ReviewsContainer;
