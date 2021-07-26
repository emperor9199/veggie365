import styled from "styled-components";

export const CartContainer = styled.div`
  display: flex;
  margin: 1rem 2rem;

  .cart-left {
    flex-basis: 75%;
    background-color: white;
    margin: 0 1rem;
    padding: 1rem;
  }

  .cart-right {
    flex-basis: 25%;
    background-color: white;
    margin: 0 1rem;
    padding: 1rem;
    height: fit-content;
    line-height: 2rem;

    > .place-order-btn {
      border: none;
      padding: 0.5rem 1rem;
      background-color: #50c85e;
      color: white;
      font-size: 1.2rem;
      font-weight: bold;
    }
  }

  .cart-inner-container {
    display: flex;
    border-bottom: 1px solid lightgray;

    .cart-item-img {
      flex-basis: 25%;
      display: flex;
      justify-content: center;
      align-items: center;

      > img {
        height: 85%;
        width: 85%;
        object-fit: contain;
      }
    }

    .cart-item-details {
      flex-basis: 55%;
      padding: 1rem;

      > button {
        border: 1px solid gray;
        border-radius: 20%;
        outline: none;
        background-color: white;
        color: black;
        font-size: 1.3rem;
        padding: 0 0.5rem;
        margin: 0 0.5rem;
        cursor: pointer;
      }

      > span {
        font-weight: bold;
      }
    }

    .cart-item-delivery-details {
      flex-basis: 20%;
      padding: 2rem 1rem;
      color: green;
    }
  }
`;
