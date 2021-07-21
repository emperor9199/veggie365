import styled from "styled-components";

export const PrimaryNavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .nav-logo {
    flex: 0.15;
    margin-left: 2rem;
  }

  .nav-items {
    flex: 0.85;
    display: flex;
    align-items: center;

    .search-container {
      flex: 1;
      display: flex;
      align-items: center;
      border: 1px solid lightgray;
      margin: 0 3rem;

      > input {
        width: 100%;
        border: none;
        outline: none;
        padding: 0 0.5rem;
      }

      > button {
        border: none;
        color: white;
        font-weight: bold;
        font-size: 1rem;
        background-color: #4ac85d;
        padding: 0.7rem 1rem;
      }
    }

    .nav-links {
      display: flex;
      align-items: center;

      > p {
        margin-right: 2rem;
      }
    }
  }

  @media (max-width: 720px) {
    display: none;
  }
`;
