"use client";

import React, { useState } from "react";
import ChartHeader from "./chartHeader";
import Image from "next/legacy/image";
import learning2 from "../../assets/icon/profile.png";
import learning3 from "../../assets/icon/profile2.png";
import { useWorkspaceContext } from "../../context/workspaceProvider";
import { FaMicrophone } from "react-icons/fa6";
import { BiLogoTelegram } from "react-icons/bi";
import { BsSoundwave } from "react-icons/bs";

function SchoolWork() {
  const { setChats } = useWorkspaceContext();
  const [messgaeData, setMessgaeData] = useState();
  const [chatRoom, setChatRoom] = useState([
    {
      user: "person",
      message: "Hey! Did you know we&apos;re planning to send ",
      image: learning2,
    },

    {
      user: "user",
      message: "Hey! Did you know we&apos;re planning to send ",
      image: learning3,
    },

    {
      user: "person",
      message: (
        <>
          <div className="bg-[#F4F8FC] rounded-lg p-2 flex">
            <BsSoundwave className="text-[20px]" />
            <BsSoundwave className="text-[20px]" />
            <BsSoundwave className="text-[20px]" />
            <BsSoundwave className="text-[20px]" />
            <BsSoundwave className="text-[20px]" />
            <BsSoundwave className="text-[20px]" />
            <BsSoundwave className="text-[20px]" />
            <BsSoundwave className="text-[20px]" />
            <BsSoundwave className="text-[20px]" />
          </div>{" "}
        </>
      ),
      image: learning2,
    },
  ]);

  // console.log(chatRoom, "chatRoom");

  return (
    <div className="bg-white h-full rounded-[20px]  px-4  py-2 w-full flex flex-col justify-between">
      <ChartHeader
        title={"School Work"}
        chat={"Interactive"}
        closeHandler={() => setChats(false)}
      />

      <div className="py-4 flex flex-col justify-start h-full gap-10 items-start overflow-y-auto ">
        {chatRoom.map((item, index) => (
          <div
            key={index}
            className={`flex gap-3 w-full ${
              item.user === "user" ? "flex-row-reverse " : ""
            } `}
          >
            <div className="border border-lightGray  relative h-[35px] w-[40px] rounded-full">
              <Image
                src={item.image}
                alt="profile"
                objectFit="cover"
                className="rounded-full"
                layout="fill"
              />
            </div>
            <div className="bg-[#F4F8FC] rounded-lg p-2 relative w-full">
              {/* <div> */}
                <span className="text-[11px] text-[#9E9E9E] ">{item.message}</span>
              {/* </div> */}
              <div
                className={`absolute bottom-[-25px] ${
                  item.user === "user" ? "left-2" : "right-2"
                }  border border-lightGray bg-white py-[1px] px-2 rounded-full`}
              >
                🤩 👍
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-[#E1E1E1] flex gap-4 pt-2 justify-start">
        <div className=" w-full">
          <textarea
            className="bg-[#F4F8FC] p-1 rounded-md border-none w-full"
            onChange={(e) => setMessgaeData(e.target.value)}
          />
        </div>

        <div className="flex items-center gap-4">
          <div className="flex bg-[#F4F8FC] text-[#2B8CFF] justify-center items-center p-2 rounded-full border-[#E1E1E1]">
            <FaMicrophone />
          </div>

          <div
            className="flex bg-[#2B8CFF] text-[#F4F8FC] justify-center items-center p-2 rounded-full"
            onClick={() =>
              setChatRoom([
                ...chatRoom,
                { user: "user", message: messgaeData, image: learning3 },
              ])
            }
          >
            <BiLogoTelegram />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SchoolWork;
