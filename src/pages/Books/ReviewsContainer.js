import React, { useEffect } from "react";
import styled from "styled-components";
import Review from "../../shared/components/Review";
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
  grid-gap: 20px;
  padding: 20px;
  border-radius: 10px;
`;

const ReviewsHeader = styled.h2`
  padding: 20px;
`;

const Reviews = () => {
  const { id } = useParams();
  useEffect(() => {
    const getReviews = async () => {
      try {
        const reviews = await fetchReviews(id);
        if (reviews.err) {
          console.error(reviews.err);
        } else {
          console.log(reviews);
        }
      } catch (error) {
        console.error("Failed to fetch books:", error);
      }
    };
    getReviews();
  }, []);

  return (
    <Container>
      <ReviewsHeader> Customers Reviews</ReviewsHeader>
      <Wrapper>
        <Review />
        <Review />
      </Wrapper>
    </Container>
  );
};

export default Reviews;
