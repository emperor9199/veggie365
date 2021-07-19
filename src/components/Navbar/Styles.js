import styled from "styled-components";

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 7vh;
  /* border: 1px solid gray; */

  @media (max-width: 720px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`;

export const NavLogo = styled.div`
  flex: 0.25;
  margin-left: 1rem;
  /* border: 1px solid red; */
  display: flex;

  label {
    display: none;
  }

  @media (max-width: 720px) {
    width: 100vw;
    margin-left: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: white;
    z-index: 10000 !important;

    h2 {
      margin-left: 1rem;
    }

    /* hamburger */

    label {
      display: flex;
      flex-direction: column;
      width: 2.5rem;
      cursor: pointer;
      margin-right: 1rem;
    }

    label span {
      background: black;
      border-radius: 10px;
      height: 4px;
      margin: 4px 0;
      transition: 0.4s cubic-bezier(0.68, -0.6, 0.32, 1.6);
    }

    span:nth-of-type(1) {
      width: 40%;
    }

    span:nth-of-type(2) {
      width: 95%;
    }

    span:nth-of-type(3) {
      width: 75%;
    }

    input[type="checkbox"] {
      display: none;
    }

    input[type="checkbox"]:checked ~ span:nth-of-type(1) {
      transform-origin: bottom;
      transform: rotatez(45deg) translate(7px, 0px);
    }

    input[type="checkbox"]:checked ~ span:nth-of-type(2) {
      transform-origin: top;
      transform: rotatez(-45deg);
    }

    input[type="checkbox"]:checked ~ span:nth-of-type(3) {
      transform-origin: bottom;
      width: 57%;
      transform: translate(12px, -9px) rotatez(45deg);
    }
  }
`;

export const NavItems = styled.div.attrs((props) => ({
  className: props.className,
}))`
  flex: 0.75;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  /* border: 1px solid green; */

  .nav-icon {
    margin-right: 2rem;
    cursor: pointer;
  }

  @media (max-width: 720px) {
    display: none;
    position: absolute;
    /* top: -100vh; */

    &.show {
      display: flex;
      background-color: white;
      color: black;
      width: 100vw;
      flex-direction: column;
      justify-content: flex-start;
      min-height: 600vh;
      /* border: 1px solid red; */
      padding-top: 1rem;
      z-index: 10000 !important;
      margin-top: 10vh;
      top: 0;
      animation: nav-anime 0.5s;

      @keyframes nav-anime {
        0% {
          top: -5vh;
          opacity: 0;
        }
        50% {
          opacity: 0.5;
        }
        100% {
          top: 0;
          opacity: 1;
        }
      }

      .search-input {
        background: white;
        width: 70vw;
        color: black;
        margin-right: 0;
      }

      .nav-icon {
        margin: 2rem 0;
        display: flex;
        align-items: center;
      }
    }
  }
`;

export const NavSearchBar = styled.div`
  .search-input {
    display: flex;
    padding: 0.2rem;
    width: 35vw;
    margin-right: 2rem;
    border: 1px solid gray;
    border-radius: 0.3rem;
  }

  .search-input > input {
    flex: 1;
    border: none;
    outline: none;
    padding: 0 0.5rem;
  }
`;
