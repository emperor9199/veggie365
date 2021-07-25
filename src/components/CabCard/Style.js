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
    flex-direction: column;
    align-items: center;
    background-color: transparent;
    width: 22rem;
    margin: 0;
    margin-left: auto;
    margin-right: auto;
    margin-top: 2rem;
    justify-content: center;

    .cab-left {
      > img {
        height: 25vh;
        object-fit: contain;
        width: 100%;
      }
    }

    .cab-right {
      background-color: white;
      padding: 0.5rem;
      text-align: center;
      h1 {
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
      }

      button {
        padding: 0.5rem;
      }
    }
  }
  /* tablet view */
  @media (max-width: 1024px) and (min-width: 725px) {
    width: 65rem;
    margin-top: -10rem;

    .cab-left {
      > img {
        height: 35vh;
        object-fit: contain;
        width: 100%;
      }
    }

    .cab-right {
      background-color: white;
      padding: 0.5rem;
      text-align: center;
      h1 {
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
      }

      button {
        padding: 0.5rem;
      }
    }
  }
`;
