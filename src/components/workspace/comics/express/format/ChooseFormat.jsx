"use client";
import { useWorkspaceContext } from "@/context/workspaceProvider";
import React from "react";

import Image from "next/image";
import Link from "next/link";

function ChooseFormat({ setPreview, preview, chooseFormatList }) {
  const { sidebar } = useWorkspaceContext();

  return (
    <div className="w-full px-4 flex flex-col">
      <div className="px-4 py-3 border-b  border-[#D8D8D8] flex justify-between items-center">
        <p className="text-[22px] font-bold"> Choose Format</p>
        <Link href="download">
          <button className="bg-[#2B8CFF] rounded-xl text-white py-2 px-6 text-[16px]">
            Continue
          </button>
        </Link>
      </div>

      <div
        className={`grid ${
          !preview
            ? "xl:grid-cols-5 2xl:grid-cols-5 md:grid-cols-2"
            : sidebar
            ? "  xl:grid-cols-2  2xl:grid-cols-3  "
            : " lg:grid-cols-4 2xl:grid-cols-4 md:grid-cols-1"
        } gap-4 py-[20px] px-[14px] h-full overflow-y-auto`}
      >
        {chooseFormatList.map((item, index) => (
          <div
            key={index}
            onClick={() => setPreview(item)}
            className="bg-Light cursor-pointer p-3 rounded-xl "
          >
            <div className="bg-white py-3 px-6 w-full rounded-xl">
              <div className="h-[120px] flex justify-center items-center relative ">
                <Image
                  src={item.image}
                  alt="logo"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
            <div className="flex justify-between items-center pt-3">
              <p
                className={`${
                  sidebar ? "text-[12px]" : "text-[14px]"
                }  text-[black] font-bold`}
              >
                {" "}
                {item.socialMedia}{" "}
              </p>
              <p
                className={`${
                  sidebar ? "text-[12px]" : "text-[14px]"
                }  text-[#666666]`}
              >
                {item.Post}{" "}
              </p>
            </div>
            <div className="flex justify-between items-center pt-3 ">
              <p
                className={`${
                  sidebar ? "text-[12px]" : "text-[14px]"
                }  text-[black] font-bold`}
              >
                {" "}
                {item.Dimensions}{" "}
              </p>
              <p
                className={`${
                  sidebar ? "text-[12px]" : "text-[14px]"
                }  text-[#666666] `}
              >
                {" "}
                {item.w} X {item.h}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChooseFormat;
