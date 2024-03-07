import React from "react";
import { CiSearch } from "react-icons/ci";

function Banner() {
  return (
    <div className="banr-sec pl-6 pt-2">
      <h2 className="text-white text-[38px] font-[700] pt-4">
        Revolutionize Your Learning Experience
      </h2>
      <p className="text-white text-[16px] pt-1 lg:w-[50%] w-[70%] leading-[40px]">
        Unlock your potential with our tailored learning hub—offering smart
        insights, interactive lessons, and collaborative tools for a
        transformative education experience.
      </p>
      <div className="bg-white rounded-[30px] flex items-center justify-between mt-5 w-[50%] px-4 p-1">
        <input
          className=" border-none outline-none rounded-2xl w-full"
          placeholder="Create Your Own Learning Assets using Prompts"
        />
        <div>
          <CiSearch className="text-[22px]" />
        </div>
      </div>
    </div>
  );
}

export default Banner;
