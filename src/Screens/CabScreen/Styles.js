import styled from "styled-components";

export const CabContainer = styled.div`
  background-color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 60%;
  margin: auto;
  margin-top: 2.5rem;
  border-radius: 5px;
  box-shadow: 0px 1px 7px 1px lightgray;

  .sub-sec {
    display: flex;
    flex-direction: column;
    margin: 2rem 0;

    > button {
      border: none;
      outline: none;
      padding: 0.5rem;
      background-color: #4ac85d;
      color: white;
      font-size: 1.1rem;
      border-radius: 5px;
      cursor: pointer;
    }

    > button:hover {
      background-color: #3eab4e;
    }
  }

  @media (max-width: 720px) {
    .cab-left {
      display: none;
    }

    flex-direction: column;
    width: 90%;
    .cab-right {
      .sub-sec > h1 {
        text-align: center;
      }
    }
  }
`;
