import styled from "styled-components";

export const SecondaryNavContainer = styled.div.attrs((props) => ({
  className: props.className,
}))`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #212121;
  color: white;
  z-index: 1000;

  &.active {
    position: fixed;
    top: 0;
    width: 100%; //if there comes extra space then put 100% here;
  }

  .nav-items {
    flex: 0.8;
    display: flex;
    align-items: center;
    margin-left: 3rem;

    p {
      margin-right: 3rem;
    }

    .not-show {
      display: none;
    }

    .search-container {
      flex: 1;
      display: flex;
      align-items: center;
      margin: 0 2rem;
      background-color: white;

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
        padding: 0.5rem 1rem;
      }
    }
  }

  .s-logo {
    flex: 0.2;
    text-align: center;
    background-color: #4ac85d;
    color: white;
    padding: 1rem 0;
  }

  .mobile-nav-container {
    display: none;
  }
  @media (max-width: 720px) {
    .nav-items {
      display: none;
    }

    .s-logo {
      display: none;
    }

    .mobile-nav-container {
      display: flex;
      flex-direction: column;
      width: 100vw;
      font-weight: bold;

      .mobile-nav-logo {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 1.5rem;
        /* height: 3vh; */

        > button {
          background-color: #212121;
          color: white;
          border: none;
          font-size: 2rem;
          outline: none;
        }
      }

      .mobile-nav-items-no-show {
        display: none;
      }

      .mobile-nav-items {
        background-color: #4ac85d;
        padding-top: 3vh;
        height: 900px;
        text-align: center;
        animation: nav-amination 0.7s;

        @keyframes nav-amination {
          0% {
            height: 0;
            opacity: 0;
          }
          50% {
            height: 500px;
            opacity: 0.7;
          }
          100% {
            height: 900px;
            opacity: 1;
          }
        }

        > p {
          padding: 1rem 0;
        }

        .mobile-search-container {
          flex: 1;
          display: flex;
          align-items: center;
          margin: 0 2rem;
          background-color: white;

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
            background-color: #212121;
            padding: 0.4rem 0.8rem;
          }
        }
      }
    }
  }
`;
