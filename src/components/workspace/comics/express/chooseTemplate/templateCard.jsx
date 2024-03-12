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

function TemplateCard({item ,setTemplate}) {
  return (
    <div className="flex flex-col justify-between gap-y-2 bg-[#F4F8FC] text-[14px] leading-[21px] p-3 rounded-3xl ">
      <Image src={item.image} alt={item.topic} className=" w-full h-[200px] rounded-2xl" />
      <div className="flex flex-col gap-y-2 ">
      <div className=" flex flex-row justify-between">
        <div className=" flex flex-col gap-5">
          <div className="flex flex-col">
            <label className="font-bold mb-2">Topic</label>
            <p className="">{item.topic}</p>
          </div>
          <div className="flex flex-col">
            <label className="font-bold mb-2">Style</label>
            <p className="">{item.style}</p>
          </div>
        </div>
        <div className="flex flex-col">
          <label className="font-bold mb-2">Panels</label>
          <p className="">{item.panels}</p>
        </div>
      </div>
      <button onClick={()=>setTemplate(item.detail)} className=" bottom-0 w-full h-[38px] bg-[#2B8CFF] rounded-2xl text-white ">See details</button>
      </div>
    </div>
  );
}

export default TemplateCard;
