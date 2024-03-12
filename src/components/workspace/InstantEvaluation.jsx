"use client";
import React, { useState } from "react";
import ChartHeader from "./chartHeader";
import { useWorkspaceContext } from "../../context/workspaceProvider";

import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

function InstantEvaluation() {
  const [series] = useState([
    {
      name: "Series 1",
      data: [80, 50, 30, 40, 100, 20],
    },
  ]);

  const [options] = useState({
    chart: {
      height: 300,
      type: "radar",
      dropShadow: {
        enabled: false,
        blur: 1,
        left: 1,
        top: 1,
      },
      toolbar: {
        show: false,
      },
    },

    stroke: {
      width: 2,
    },
    fill: {
      opacity: 0.1,
    },
    markers: {
      size: 0,
    },
    xaxis: {
      categories: ["Critical Thinking", "DT", "RC", "KM", "Others"],
    },
  });

  const instantEvaluationList = [
    {
      name: "Critical Thinking:",
      range: "80%",
    },
    {
      name: "Design Thinking",
      range: "70%",
    },
    {
      name: "Arguments",
      range: "60%",
    },
    {
      name: "Reading Comprehension:",
      range: "50%",
    },
    {
      name: "Knowledge Management:",
      range: "90%",
    },
    {
      name: "Other Measurements",
      range: "N/A",
    },
    {
      name: "Total Time Spent:",
      range: "4 hours",
    },
    {
      name: "Evaluation Scores:",
      range: "85%",
    },
  ];

  const { setInstantEvaluation } = useWorkspaceContext();

  return (
    <div className="bg-white rounded-[20px]  px-4  py-2 w-full h-full">
      <ChartHeader
        title={"Instant Evaluation-Day 4"}
        closeHandler={() => setInstantEvaluation(false)}
      />

      <div className="py-4 flex justify-between gap-4 items-start">
        <div>
          {instantEvaluationList.map((items, index) => (
            <p className="text-[12px] text-lightGray" key={index}>
              {items.name}
              <span
                className={`${
                  instantEvaluationList.length - 2 < index + 1 ? "text-blue-500" : "  text-black"
                }`}
              >
                {items.range}
              </span>
            </p>
          ))}
        </div>
        <div className="bg-[#F4F8FC]  rounded-lg h-[180px]">
          <ReactApexChart options={options} series={series} type="radar" height={200} width={200} />
        </div>
      </div>
    </div>
  );
}

export default InstantEvaluation;
