import styled from "styled-components";

export const AboutContainer = styled.div`
  .context {
    width: 70vw;
    height: 80vh;
    position: absolute;
    background-color: white;
    border-radius: 0.5rem;
    top: 70%;
    left: 50%;
    transform: translate(-50%, -60%);
    /* top: 50vh; */
    display: flex;

    .about-detail {
      flex: 0.55;
      padding: 0 2rem;
      text-align: justify;
      /* background-color: rgb(55, 176, 151); */
      background: #212121;
      border-bottom-right-radius: 14rem;
      color: white;
      height: 100%;
    }

    .about-img {
      flex: 0.45;
      display: flex;
      flex-direction: column;
    }

    .about-img > img {
      height: 30vw;
      width: 65vh;
      /* opacity: 0.7; */
    }

    .about-img .social-icon {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      margin-bottom: 2rem;
    }

    /* .about-img .social-icon .social-sub {
      cursor: pointer;
    } */

    .about-btn {
      margin-top: 2rem;
      padding: 0.5rem 1rem;
      border: none;
      background-color: white;
      color: #212121;
      font-size: 1.1rem;
      border-radius: 5px;
      cursor: pointer;
    }

    .about-btn:hover {
      background: linear-gradient(#37b097, limegreen);
    }
  }

  .area {
    background: #f1f3f6;
    background: -webkit-linear-gradient(to left, #11998e, #38ef7d);
    width: 100vw;
    height: 100vh;
  }

  .circles {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .circles li {
    position: absolute;
    display: block;
    list-style: none;
    width: 20px;
    height: 20px;
    background: rgba(255, 255, 255, 0.2);
    animation: animate 25s linear infinite;
    bottom: -150px;
  }

  .circles li:nth-child(1) {
    left: 25%;
    width: 80px;
    height: 80px;
    animation-delay: 0s;
  }

  .circles li:nth-child(2) {
    left: 10%;
    width: 20px;
    height: 20px;
    animation-delay: 2s;
    animation-duration: 12s;
  }

  .circles li:nth-child(3) {
    left: 70%;
    width: 20px;
    height: 20px;
    animation-delay: 4s;
  }

  .circles li:nth-child(4) {
    left: 40%;
    width: 60px;
    height: 60px;
    animation-delay: 0s;
    animation-duration: 18s;
  }

  .circles li:nth-child(5) {
    left: 65%;
    width: 20px;
    height: 20px;
    animation-delay: 0s;
  }

  .circles li:nth-child(6) {
    left: 75%;
    width: 110px;
    height: 110px;
    animation-delay: 3s;
  }

  .circles li:nth-child(7) {
    left: 35%;
    width: 150px;
    height: 150px;
    animation-delay: 7s;
  }

  .circles li:nth-child(8) {
    left: 50%;
    width: 25px;
    height: 25px;
    animation-delay: 15s;
    animation-duration: 45s;
  }

  .circles li:nth-child(9) {
    left: 20%;
    width: 15px;
    height: 15px;
    animation-delay: 2s;
    animation-duration: 35s;
  }

  .circles li:nth-child(10) {
    left: 85%;
    width: 150px;
    height: 150px;
    animation-delay: 0s;
    animation-duration: 11s;
  }

  @keyframes animate {
    0% {
      transform: translateY(0) rotate(0deg);
      opacity: 1;
      border-radius: 0;
    }

    100% {
      transform: translateY(-1000px) rotate(720deg);
      opacity: 0;
      border-radius: 50%;
    }
  }

  @media (max-width: 720px) {
    overflow-y: scroll;

    .context {
      margin-top: 9vh;
      width: 100%;
      height: 100%;
      display: block;
    }

    .context .about-img {
      display: none;
    }

    .area {
      height: 100%;
      overflow-y: scroll;
    }
  }
`;
