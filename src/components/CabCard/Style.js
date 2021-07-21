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

  @media (max-width: 720px) {
    max-height: 6rem;
    width: 18rem;
    margin-left: auto;
    margin-right: auto;
    padding: 1rem 0;

    .cab-left {
      > img {
        height: 10vh;
        object-fit: contain;
      }
    }

    .cab-right {
      padding: 0;
      text-align: center;
      h1 {
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
      }
      p {
        display: none;
      }
      button {
        padding: 0.5rem;
      }
    }
  }
`;
