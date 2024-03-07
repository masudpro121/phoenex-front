import React from "react";

function Text() {
  return (
    <div className="flex justify-center items-center p-3 border border-[#D8D8D8] rounded-xl mx-2">
      <div className="bg-[#2B8CFF] w-[20px] h-[20px] rounded-full flex justify-center items-center">
        <span className="text-[20px] text-white">+</span>
      </div>
      <button className="text-[#2B8CFF] ml-2 text-[14px] font-medium">
        Add a text box
      </button>
    </div>
  );
}

export default Text;
