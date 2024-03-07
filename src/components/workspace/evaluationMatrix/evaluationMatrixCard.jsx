import React from "react";
import ChartHeader from "../chartHeader";

function EvaluationMatrixCard({item, index}) {
  return (
    <div key={index} className="bg-[#F4F8FC] rounded-2xl p-2 mt-4 mr-4 min-w-[200px] h-[190px] flex flex-col justify-between">
      <div className="flex items-center justify-between gap-4">
        <p className="text-[12px]"> {item.Rank}  </p>
        <p className="text-[12px] text-lightGray"> {item.Date}</p>
      </div>
      <div>
        {" "}
        <div className="flex items-center justify-between gap-4">
          <p className="text-[12px] text-lightGray">{item.Speed} </p>
          <p className="text-[12px] text-[#2B8CFF]">{item.SpeedRange}</p>
        </div>
        <input type="range" className="w-full" />
        <div className="flex items-center justify-between gap-4">
          <p className="text-[12px] text-lightGray">{item.Accuracy}</p>
          <p className="text-[12px] text-[#2B8CFF]">{item.AccuracyRange}</p>
        </div>
        <div>
          <input type="range" className="w-full" />
        </div>
      </div>

      <div className="flex items-center gap-2 ">
        <p className="text-[12px] text-lightGray">{item.Duration}</p>
        <p className="text-[12px] text-[#2B8CFF]">{item.hour}</p>
      </div>
    </div>
  );
}

export default EvaluationMatrixCard;
