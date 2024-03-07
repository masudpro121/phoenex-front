// components/Accordion.js

import { useState } from "react";
import Image from "next/legacy/image";

const Accordion = ({ section, index }) => {
  const [openSectionIndex, setOpenSectionIndex] = useState(null);

  const toggleSection = (index) => {
    setOpenSectionIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  // console.log(section, "sh")
  return (
    <div className="accordion mt-2 ">
      <div key={index} className=" bg-white">
        <button
          className="w-full text-left p-4 focus:outline-none  border-[#D8D8D8] border-b"
          onClick={() => toggleSection(index)}
        >
          <span className="flex justify-between items-center ">
            <div className="flex items-center gap-2">
              <div
                className={`relative w-[20px] mt-[3px]   ${
                  openSectionIndex === index
                    ? "text-[#2B8CFF]"
                    : "text-[#9E9E9E]"
                } `}
              >
                {section.icon}
              </div>
              <span
                className={`${
                  openSectionIndex === index
                    ? "text-[#2B8CFF] text-16px font-semibold"
                    : "text-[#9E9E9E]"
                }`}
              >
                {section.title}
              </span>
            </div>
            <svg
              className={`w-6 h-6 transition-transform text-[#D8D8D8] ${
                openSectionIndex === index ? "transform rotate-180" : ""
              }`}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 9l-7 7-7-7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </button>
        {openSectionIndex === index && (
          <div className="py-3 overflow-y-scroll max-h-[300px]">
            {section.content}
          </div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
