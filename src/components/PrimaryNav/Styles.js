import styled from "styled-components";

export const PrimaryNavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;

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

      .nav-specific-link {
        margin-right: 2rem;
        display: flex;
        align-items: center;
        text-decoration: none;
        color: black;
      }

      .user-profile {
        position: relative;
        margin-right: 2rem;
        display: flex;
        align-items: center;
        text-decoration: none;
        color: black;

        .profile-options {
          display: none;
        }

        .no-profile-options {
          display: none;
        }
      }

      .user-profile:hover {
        .profile-options {
          display: inline;
          position: absolute;
          top: 1.5rem;
          left: -3rem;
          background-color: white;
          width: 13vw;
          z-index: 1;
          border-radius: 5px;
        }

        .profile-options > p {
          padding: 0.6rem 0 1rem 0;
          display: flex;
          justify-content: center;
          align-items: center;
          /* border-bottom: 1px solid gray; */
        }
      }
    }
  }

  @media (max-width: 1024px) and (min-width: 725px) {
    .nav-logo > h1 {
      font-size: 1.3rem;
    }
  }
  @media (max-width: 720px) {
    display: none;
  }
`;
