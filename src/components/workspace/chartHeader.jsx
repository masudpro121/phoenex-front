import React from "react";
import { FaDownLeftAndUpRightToCenter } from "react-icons/fa6";

function ChartHeader({ title, chat, closeHandler }) {
  return (
    <div className="flex justify-between items-center py-2  border-b border-[#E1E1E1] shadow-b-md  ">
      <h2 className="text-[16px] font-semibold py-2"> {title} </h2>
      <p className="text-[16px] font-semibold text-[#9E9E9E] py-2"> {chat} </p>
      <button
        className="border border-[#9E9E9E] bg-[#9E9E9E] p-[3px] rounded-md"
        onClick={closeHandler}
      >
        <FaDownLeftAndUpRightToCenter className="text-white text-[12px]" />
      </button>
    </div>
  );
}

export default ChartHeader;
