import React from "react";
import styled from "styled-components";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
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
const Review = () => {
  return (
    <ReviewCard>
      <TopOfReview>
        <UserInfo>
          <AccountCircleRoundedIcon style={{ fontSize: "60px" }} />
          <UserName>
            Abdelrahman{" "}
            <Stars>
              <StarRoundedIcon style={{ fontSize: "20px" }} />
              <StarRoundedIcon style={{ fontSize: "20px" }} />
              <StarRoundedIcon style={{ fontSize: "20px" }} />
              <StarRoundedIcon style={{ fontSize: "20px" }} />
              <StarBorderRoundedIcon style={{ fontSize: "20px" }} />
            </Stars>
          </UserName>
        </UserInfo>
        <Date>July 11,2020</Date>
      </TopOfReview>
      <ReviewContent>
        The European languages are members of the same family. Their separate
        existence is a myth. For science, music, sport, etc, Europe uses the
        same vocabulary. The languages only differ in their grammar, their
        pronunciation and their most common words. Everyone realizes why a new
        common language would be desirable: one could refuse to pay expensive
        translators.
      </ReviewContent>
    </ReviewCard>
  );
};

export default Review;
