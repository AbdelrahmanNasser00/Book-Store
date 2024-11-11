import React, { useContext } from "react";
import styled from "styled-components";
import { addProduct } from "../../store/CartSlice";
import { addToCart } from "../../api";
import { useDispatch } from "react-redux";
import { AuthContext } from "../../context/AuthContext";

const TestBtn = ({ book }) => {
  const { currentUser } = useContext(AuthContext);
  const dispatch = useDispatch();
  const handleAddToCart = async (e) => {
    e.stopPropagation();
    try {
      if (currentUser !== "guest") {
        await addToCart({ bookId: book.bookId, quantity: 1 }, currentUser);
      }
      dispatch(addProduct({ ...book, quantity: 1 }));
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <StyledWrapper>
      <button className="CartBtn" onClick={handleAddToCart}>
        <span className="IconContainer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 576 512"
            fill="rgb(17, 17, 17)"
            className="cart"
          >
            <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
          </svg>
        </span>
        <p className="text">Add to Cart</p>
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .CartBtn {
    width: 80px;
    height: 40px;
    border-radius: 12px;
    border: none;
    background-color: rgb(255, 208, 0);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition-duration: 0.5s;
    overflow: hidden;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.103);
    position: relative;
    @media (max-width: 1023px) {
      width: 130px;
    }
  }

  .IconContainer {
    position: absolute;
    left: -50px;
    width: 30px;
    height: 30px;
    background-color: transparent;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    z-index: 2;
    transition-duration: 0.5s;
  }

  .icon {
    border-radius: 1px;
  }

  .text {
    height: 100%;
    width: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgb(17, 17, 17);
    z-index: 1;
    transition-duration: 0.5s;
    font-size: 0.7em;
    font-weight: 600;
  }

  .CartBtn:hover .IconContainer {
    transform: translateX(47px);
    border-radius: 40px;
    transition-duration: 0.5s;
    @media (max-width: 1023px) {
      transform: translateX(60px);
    }
  }

  .CartBtn:hover .text {
    transform: translate(10px, 0px);
    transition-duration: 0.5s;
  }

  .CartBtn:active {
    transform: scale(0.95);
    transition-duration: 0.5s;
  }
`;

export default TestBtn;
