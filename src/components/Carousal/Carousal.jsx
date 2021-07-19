import React from "react";
import { ImgStyle } from "./Styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import one from "../../img/one.jpg";
import two from "../../img/two.jpg";
import three from "../../img/three.jpg";

const Carousal = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Slider {...settings}>
      <ImgStyle>
        <img src={one} alt="imgOne" />
      </ImgStyle>
      <ImgStyle>
        <img src={two} alt="imgTwo" />
      </ImgStyle>
      <ImgStyle>
        <img src={three} alt="imgThree" />
      </ImgStyle>
    </Slider>
  );
};

export default Carousal;
