import styled from "styled-components";

// export const BannerContainer = styled.div`
//   max-width: 1500px;
//   margin-left: auto;
//   margin-right: auto;
//   width: 1500px;
//   height: 700px;

//   .product__row {
//     display: flex;
//     z-index: 1;
//     margin: 0 5px;
//   }

//   .img__banner {
//     width: 100%;
//     height: 80vh;
//     mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
//     z-index: -1;
//     margin-bottom: -250px;

//     > img {
//       height: 100%;
//       width: 100%;
//       object-fit: fill;
//     }
//   }
// `;

export const BannerContainer = styled.div`
  width: 97vw;
  height: 60vh;
  margin-top: 3vh;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10rem;

  .banner-img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    z-index: -1;
    margin-bottom: -12rem;
    /* fade image */
    mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
  }

  .cab-card {
    display: flex;
    z-index: 1;
    margin: 0 5px;
  }

  @media (max-width: 720px) {
    width: 100vw;
    height: 25vh;
    margin-top: 0;
    margin-bottom: 6rem;
    .banner-img {
      margin-bottom: -9rem;
    }
  }
`;
