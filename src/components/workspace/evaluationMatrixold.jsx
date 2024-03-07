"use Client";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ChartHeader from "../chartHeader";
import EvaluationMatrixCard from "./evaluationMatrix/evaluationMatrixCard";

function EvaluationMatrix() {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3.5,
    slidesToScroll: 1,
    spaceBetween: 20,
    initialSlide: 0,
  };
  return (
    <div className="bg-white rounded-lg px-4  py-2">
      <ChartHeader title={"Evaluation Matrix"} />
      <div>
        <Slider {...settings}>
          <EvaluationMatrixCard />
          <EvaluationMatrixCard />
          <EvaluationMatrixCard />
          <EvaluationMatrixCard />
          <EvaluationMatrixCard />
          <EvaluationMatrixCard />
          <EvaluationMatrixCard />
          <EvaluationMatrixCard />
        </Slider>
      </div>
    </div>
  );
}

export default EvaluationMatrix;
