"use client";
import React from "react";
import EvaluationMatrixCard from "./evaluationMatrixCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ChartHeader from "../chartHeader";
import { useWorkspaceContext } from "../../../context/workspaceProvider";

function EvaluationMatrix() {
  const { setEvaluationMatrix } = useWorkspaceContext();

  const EvaluationList = [
    {
      Rank: "1st",
      Date: "11/19/2023",
      Speed: "speed",
      SpeedRange: "25%",
      Accuracy: "Accuracy",
      AccuracyRange: "32%",
      Duration: "Duration",
      hour: "4 Hours",
    },

    {
      Rank: "2st",
      Date: "10/28/2023",
      Speed: "speed",
      SpeedRange: "45%",
      Accuracy: "Accuracy",
      AccuracyRange: "82%",
      Duration: "Duration",
      hour: "48 Hours",
    },

    {
      Rank: "3st",
      Date: "12/24/2024",
      Speed: "speed",
      SpeedRange: "85%",
      Accuracy: "Accuracy",
      AccuracyRange: "102%",
      Duration: "Duration",
      hour: "54 Hours",
    },

    {
      Rank: "4st",
      Date: "8/11/2024",
      Speed: "speed",
      SpeedRange: "15%",
      Accuracy: "Accuracy",
      AccuracyRange: "2%",
      Duration: "Duration",
      hour: "5 Hours",
    },
  ];

  return (
    <div className="bg-white rounded-[20px] px-4 h-full pt-2 w-full flex flex-col ">
      <ChartHeader
        title={"Evaluation Matrix"}
        closeHandler={() => setEvaluationMatrix(false)}
      />

      <div className="flex h-full mb-2  overflow-x-scroll scrollable-div">
        {EvaluationList.map((item, index) => (
          <EvaluationMatrixCard key={index} item={item} index={index} />
        ))}
      </div>
    </div>
  );
}

export default EvaluationMatrix;
