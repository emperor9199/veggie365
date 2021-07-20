import React from "react";
import { ImgStyle } from "./Styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import four from "../../img/four.jpg";
import seven from "../../img/seven.jpg";
import six from "../../img/six.jpg";

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
        <img src={four} alt="imgOne" />
      </ImgStyle>
      <ImgStyle>
        <img src={seven} alt="imgTwo" />
      </ImgStyle>
      <ImgStyle>
        <img src={six} alt="imgThree" />
      </ImgStyle>
    </Slider>
  );
};

export default Carousal;
