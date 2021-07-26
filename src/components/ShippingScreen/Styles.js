import styled from "styled-components";

export const ShippingContainer = styled.div`
  width: 95%;
  padding: 0.5rem;
  /* border: 1px solid red; */

  .form-section {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 95%;
  }

  .form-section > div {
    margin: 0.5rem 1rem;
    flex: 1;
  }

  .form-section > div > input {
    padding: 0.5rem 0.4rem;
    width: 25.5vw;
  }

  .form-section > div > input:focus {
    border: 2px solid #4ac85d;
    outline: none;
  }

  .form-address-section {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 95%;
    margin-top: 0.5rem;
  }

  .form-address-section textarea {
    /* width: 100%; */
    /* padding: 0.3rem 0.4rem; */
    padding: 0.5rem 0.4rem;
    width: 55vw;
  }

  .form-address-section textarea:focus {
    border: 2px solid #4ac85d;
    outline: none;
  }

  .continue-shipping-btn > button {
    background-color: #4ac85d;
    padding: 0.6rem;
    width: 96%;
    margin-left: 1rem;
    margin-top: 1rem;
    border: none;
    outline: none;
    color: white;
    font-size: 1rem;
    font-weight: bold;
    border-radius: 5px;
    cursor: pointer;
  }
`;
