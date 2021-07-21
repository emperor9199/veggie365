import styled from "styled-components";

export const CabContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  max-height: 25rem;
  min-width: 6.25rem;
  margin: 5rem;
  padding: 1rem;
  z-index: 1;
  border-radius: 5px;

  .cab-left {
    flex: 0.4;
    display: flex;
    justify-content: center;

    > img {
      height: 30vh;
      object-fit: contain;
    }
  }

  .cab-right {
    flex: 0.6;
    padding-left: 3rem;
    padding-right: 2rem;

    h1 {
      margin: 0;
      padding: 0;
    }

    p {
      text-align: justify;
    }

    > button {
      border: none;
      background-color: #4ac85d;
      color: white;
      padding: 0.7rem 1.2rem;
      font-weight: bold;
      font-size: 1rem;
      border-radius: 5px;
    }
  }
`;
