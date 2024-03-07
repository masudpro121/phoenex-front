"use client";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from "./card";
import learning1 from "../../assets/learningAssets/learning1.png";
import learning2 from "../../assets/learningAssets/learning2.png";

function LearningModulesSlider() {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6.5,
    slidesToScroll: 1,
    spaceBetween: 20,
    initialSlide: 0,
  };
  return (
    <div>
      <p className="text-[18px] py-4 font-[500] text-lightGray ">
        Try PhoenEdX Choice Learning Modules
      </p>
      <div>
        <Slider {...settings}>
          <Card learning={learning1} />
          <Card learning={learning2} />
          <Card learning={learning1} />
          <Card learning={learning2} />
          <Card learning={learning1} />
          <Card learning={learning2} />
          <Card learning={learning1} />
          <Card learning={learning2} />
        </Slider>
      </div>
    </div>
  );
}

export default LearningModulesSlider;
