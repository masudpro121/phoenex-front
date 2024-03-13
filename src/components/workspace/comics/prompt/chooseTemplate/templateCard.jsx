import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import avatar1 from "@/assets/comics/uploadContent/avatar1.png";
import { CiZoomIn } from "react-icons/ci";
import { CiZoomOut } from "react-icons/ci";
import { PiArrowBendDoubleUpLeft } from "react-icons/pi";
import { PiCaretDoubleLeftFill } from "react-icons/pi";
import { FaStop } from "react-icons/fa6";
import { FaPause } from "react-icons/fa";
import { FaCaretSquareRight } from "react-icons/fa";
import { PiCaretDoubleRightFill } from "react-icons/pi";
import { PiArrowBendDoubleUpRightBold } from "react-icons/pi";
import { AiOutlineSound } from "react-icons/ai";
import Image from "next/image";
import { BsStars } from "react-icons/bs";
import { PiStarFourFill } from "react-icons/pi";
function TemplateCard({ item, setTemplate }) {
  return (
    <div className="flex flex-col gap-2 justify-between border border-[#D8D8D8] text-[14px] leading-[21px] p-3 rounded-3xl ">
      <div className="grid grid-row-2 gap-y-2 ">
        <Image
          src={item.image}
          alt={item.topic}
          className=" w-full h-[200px]"
        />
        <div className=" grid grid-cols-2 gap-2">
          <div className="flex flex-col">
            <label className="font-bold mb-2">Topic</label>
            <p className="">{item.topic}</p>
          </div>
          <div className="flex flex-col">
            <label className="font-bold mb-2">Style</label>
            <p className="">{item.style}</p>
          </div>
        </div>
      </div>
      <div className=" flex flex-col gap-3 justify-between">
        <div className="flex flex-col">
          <label className="font-bold mb-2">Titles</label>
          <div className="grid grid-cols-2 gap-2">
            {item.titles.map((x, index) => (
              <div className="flex" key={index}>
                <PiStarFourFill className="text-[#2B8CFF] mt-1 mr-1" />{" "}
                <label className="">{x}</label>
              </div>
            ))}
          </div>
        </div>
        <button className=" bottom-0 w-full h-[38px] bg-[#2B8CFF] rounded-2xl text-white ">
          See details
        </button>
      </div>
    </div>
  );
}

export default TemplateCard;
