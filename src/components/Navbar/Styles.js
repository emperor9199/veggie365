import styled from "styled-components";

export const NavContainer = styled.div.attrs((props) => ({
  className: props.className,
}))`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 7vh;
  position: fixed;
  width: 100vw;
  z-index: 10000 !important;
  color: white;
  background-color: rgba(33, 111, 92, 0.5);
  /* transition: all ease-in 0.5s; */
  /* border: 1px solid gray; */

  &.show-color {
    background-color: #1e6f5c;
  }

  @media (max-width: 720px) {
    flex-direction: column;
    justify-content: flex-start;
    color: black;
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
    height: 7vh;
    margin-left: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #1e6f5c;
    color: white;
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
      background: white;
      border-radius: 10px;
      height: 4px;
      margin: 3px 0;
      transition: 0.4s cubic-bezier(0.68, -0.6, 0.32, 1.6);
    }

    span:nth-of-type(1) {
      width: 41%;
    }

    span:nth-of-type(2) {
      width: 80%;
    }

    span:nth-of-type(3) {
      width: 75%;
    }

    input[type="checkbox"] {
      display: none;
    }

    input[type="checkbox"]:checked ~ span:nth-of-type(1) {
      transform-origin: bottom;
      transform: rotatez(45deg) translate(5px, 0px);
    }

    input[type="checkbox"]:checked ~ span:nth-of-type(2) {
      transform-origin: top;
      transform: rotatez(-45deg);
    }

    input[type="checkbox"]:checked ~ span:nth-of-type(3) {
      transform-origin: bottom;
      width: 58%;
      transform: translate(8px, -9px) rotatez(45deg);
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

  @media (min-width: 720px) {
    .nav-links {
      display: flex;
      align-items: center;
    }
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
      margin-top: 7vh;
      top: 0;
      animation: nav-anime 0.5s;
      color: white;
      background-color: rgba(33, 111, 92, 0.9);

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

      .nav-icon {
        font-size: 1.2rem;
        font-weight: bold;
        padding: 1rem;
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
    padding: 0.1rem;
    /* width: 35vw; */
    margin-right: 2rem;
    border: 1px solid gray;
    border-radius: 0.3rem;

    /* transparent */
    background-color: white;
    color: black;
  }

  .search-input > input {
    flex: 1;
    border: none;
    outline: none;
    padding: 0 0.5rem;
  }

  @media (min-width: 720px) {
    flex: 1;
  }
`;
