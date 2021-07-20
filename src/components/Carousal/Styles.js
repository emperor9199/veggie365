import styled from "styled-components";

export const ImgStyle = styled.div`
  height: 75vh;
  width: 100vw;

  img {
    height: 100%;
    width: 100%;
    filter: brightness(90%);
    object-fit: cover;
  }

  @media (max-width: 720px) {
    height: 35vh;
  }
`;
