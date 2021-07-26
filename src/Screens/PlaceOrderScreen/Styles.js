import styled from "styled-components";

export const PlaceOrderContainer = styled.div`
  display: flex;
  margin: 0 3rem;

  .accordian-container {
    flex: 0.75;
    margin: 1rem;
  }

  .price-summary-container {
    flex: 0.25;
    background-color: white;
    padding: 1rem;
    margin: 1rem;
    height: fit-content;
    /* position: fixed; */
    /* right: 0; */
    width: 20.4%;
    box-shadow: 0 5px 4px 1px lightgray;
  }
`;
