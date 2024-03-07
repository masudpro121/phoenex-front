"use client";
import React from "react";
import { IoChevronDown } from "react-icons/io5";
import { FaUpRightAndDownLeftFromCenter } from "react-icons/fa6";
import { FaDownLeftAndUpRightToCenter } from "react-icons/fa6";
import Icon from "../../../assets/icon/icon.png";
import Icon1 from "../../../assets/icon/icon1.png";
import Icon2 from "../../../assets/icon/icon2.png";
import Icon3 from "../../../assets/icon/icon3.png";
import Icon4 from "../../../assets/icon/icon4.png";
import Icon5 from "../../../assets/icon/icon5.png";
import Icon6 from "../../../assets/icon/icon6.png";
import Icon7 from "../../../assets/icon/icon7.png";
import Icon8 from "../../../assets/icon/icon8.png";

import Image from "next/legacy/image";
import MapMapFlow from "./flow";
import { ReactFlowProvider } from "reactflow";
import { useWorkspaceContext } from "../../../context/workspaceProvider";

function MainArea() {
  const {
    whiteBoard,
    setWhiteBoard,
    notesBoard,
    setNotesBoard,
    instantEvaluation,
    setInstantEvaluation,
    evaluationMatrix,
    setEvaluationMatrix,
    chats,
    setChats,
    sidebar,
  } = useWorkspaceContext();

  const maximizeView = () => {
    setEvaluationMatrix(false);
    setInstantEvaluation(false);
    setNotesBoard(false);
    setChats(false);
  };

  const minimizeView = () => {
    setEvaluationMatrix(true);
    setInstantEvaluation(true);
    setNotesBoard(true);
    setChats(true);
  };
  return (
    <div className="h-full flex flex-col justify-between bg-white rounded-[20px] overflow-hidden p-3 pb-0">
      <div className="flex justify-between items-center">
        <div className="flex justify-between gap-4 items-center">
          <p className="text-lightGray xl:text-[14px] lg:text-[12px] text-[10px]">
            Subject:
            <span className="xl:text-[14px] lg:text-[12px] text-[10px] text-black font-[600]">
              Technology
            </span>
          </p>
          <p className="text-lightGray xl:text-[14px] lg:text-[12px] text-[10px] text-nowrap">
            {" "}
            Category:{" "}
            <span className="xl:text-[14px] lg:text-[12px] text-[10px] text-black font-[600]">
              Blockchain{" "}
            </span>
          </p>
          <p className="text-lightGray xl:text-[14px] lg:text-[12px] text-[10px] text-nowrap">
            {" "}
            Module :{" "}
            <span className="xl:text-[14px] lg:text-[11px] text-[10px] text-black font-[600]">
              Web 3 Tech_Intelligence
            </span>
          </p>
        </div>
        <div className="flex justify-between items-center gap-4">
          <div className="flex border border-[#D8D8D8] bg-[#F4F8FC] rounded-full  justify-center  py-1 items-center px-2">
            <select className="border-none bg-[#F4F8FC] py-0 px-3 rounded-full xl:text-[14px] lg:text-[11px] text-[10px]">
              <option>Day 1</option>
              <option>Day 2</option>
              <option>Day 3</option>
            </select>
            <IoChevronDown className="xl:text-[14px] lg:text-[11px] text-[10px]" />{" "}
          </div>
          <div className="border-l border-lightGray h-[30px]"></div>
          {evaluationMatrix && instantEvaluation && notesBoard && chats ? (
            <button
              className="border border-[#9E9E9E] bg-[#9E9E9E] lg:p-2 p-1 rounded-md"
              onClick={maximizeView}
            >
              <FaUpRightAndDownLeftFromCenter className="text-white" />
            </button>
          ) : (
            <button
              className="border border-[#9E9E9E] bg-[#9E9E9E] lg:p-1 p-[5px] rounded-md"
              onClick={minimizeView}
            >
              <FaDownLeftAndUpRightToCenter className="text-white text-[8px]" />
            </button>
          )}
        </div>
      </div>
      <div className="bg-[#f4f8fc] h-full w-full mt-2 ">
        {/* <Flow /> */}
        {/* <PageFlowDiagran /> */}
        <ReactFlowProvider>
          <MapMapFlow />
        </ReactFlowProvider>
      </div>
      <div className="bg-[#2B8CFF] p-4 -mx-3">
        <div className="flex justify-between items-center ">
          <div className="flex justify-center items-center gap-10">
            <div className="relative h-[10px] mb-2">
              <Image
                src={Icon}
                objectFit="cover"
                width={20}
                height={20}
                alt="icon"
              />
            </div>
            <div className="relative h-[10px] mb-2">
              <Image
                src={Icon1}
                objectFit="cover"
                width={20}
                height={20}
                alt="icon"
              />
            </div>
            <div className="relative h-[10px] mb-2">
              <Image
                src={Icon2}
                objectFit="cover"
                width={20}
                height={20}
                alt="icon"
              />
            </div>
            <div className="relative h-[10px] mb-2">
              <Image
                src={Icon3}
                objectFit="cover"
                width={20}
                height={20}
                alt="icon"
              />
            </div>
            <div className="relative h-[10px] mb-2">
              <Image
                src={Icon4}
                objectFit="cover"
                width={20}
                height={20}
                alt="icon"
              />
            </div>
            <div className="relative h-[10px] mb-2">
              <Image
                src={Icon5}
                objectFit="cover"
                width={20}
                height={20}
                alt="icon"
              />
            </div>
            <div className="relative h-[10px] mb-2">
              <Image
                src={Icon6}
                objectFit="cover"
                width={20}
                height={20}
                alt="icon"
              />
            </div>

            <div className="relative h-[10px] mb-2">
              <Image
                src={Icon7}
                objectFit="cover"
                width={20}
                height={20}
                alt="icon"
              />
            </div>
          </div>

          <div className="flex gap-4 items-center">
            <div className="border-l border-white h-[30px]"></div>
            <div className="relative h-[10px] mb-2">
              <Image
                src={Icon8}
                objectFit="cover"
                width={20}
                height={20}
                alt="icon"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainArea;
