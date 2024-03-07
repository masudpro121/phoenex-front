"use client";
import React, { useState } from "react";
import { BsFacebook } from "react-icons/bs";
import Select from "react-select";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Img from "@/assets/download/img.png";
import ImgOne from "@/assets/download/img1.png";
import ImgTwo from "@/assets/download/img2.png";
import ImgThreee from "@/assets/download/img3.png";
import Image from "next/image";

function DownloadPage() {
  const options = [
    { value: "apple", label: "Facebook", icon: <BsFacebook /> },
    { value: "banana", label: "Youtube", icon: <FaYoutube /> },
    { value: "orange", label: "Instragram", icon: <FaInstagram /> },
  ];

  const formatOptionLabel = ({ value, label, icon }) => (
    <div className="flex gap-1 items-center text-[16px] ">
      {icon && (
        <span style={{ marginRight: "8px", color: "gray" }}>{icon}</span>
      )}
      {label}
    </div>
  );
  return (
    <div className="bg-white w-full h-full rounded-2xl">
      <div className="w-[95%] mx-auto pt-6">
        <button className="border border-[#D8D8D8] py-2 px-6 rounded-xl flex justify-center items-center text-[13px] text-[#D8D8D8]">
          Back to design
        </button>
      </div>

      <div className="w-[75%] mx-auto pt-6 text-center">
        <div className="flex justify-center items-center flex-col ">
          <div>
            <h1 className="text-[42px] font-bold text-[#333333]">
              Save and Share Your Masterpiece
            </h1>
            <p className="text-[14px] text-[#666666] text-center">
              Congratulations! You &apos;ve crafted a unique comic that &apos; s
              ready to be shared with the world
            </p>
          </div>
        </div>

        <h1 className="text-[24px] font-bold text-[#333333] text-center py-8">
          Download Rendered Files
        </h1>

        <div className="grid grid-cols-3 gap-8 items-center text-left">
          <div>
            <p className="text-[13px] ">Select Social Media Format</p>
            <Select
              options={options}
              isSearchable={false}
              formatOptionLabel={formatOptionLabel}
            />
          </div>

          <div>
            <p className="text-[13px]">Dimensions</p>
            <Select
              options={options}
              isSearchable={false}
              formatOptionLabel={formatOptionLabel}
            />
          </div>

          <div className="pt-4">
            <button className="bg-[#2B8CFF] rounded-xl text-white py-2 px-12 text-[16px]">
              Download
            </button>
          </div>
        </div>

        <div className="flex justify-center items-center flex-col pt-8 ">
          <div>
            <h1 className="text-[24px] font-bold text-[#333333]">
              Share on Social Media
            </h1>
            <p className="text-[14px] text-[#666666] text-center pt-1 ">
              Spread the joy by sharing your comic on various social media
              platforms. Connect with friends and fellow creators!
            </p>
          </div>

          <div className="flex gap-3 pt-8">
            <div className="bg-[#F4F8FC] rounded-lg border border-[#D8D8D8] p-3 flex justify-center items-center">
              <Image
                src={Img}
                height={30}
                width={30}
                objectFit="contain"
                alt=""
              />
            </div>
            <div className="bg-[#F4F8FC] rounded-lg border border-[#D8D8D8] p-3 flex justify-center items-center">
              <Image
                src={ImgOne}
                height={30}
                width={30}
                objectFit="contain"
                alt=""
              />
            </div>
            <div className="bg-[#F4F8FC] rounded-lg border border-[#D8D8D8] p-3 flex justify-center items-center">
              <Image
                src={ImgTwo}
                height={30}
                width={30}
                objectFit="contain"
                alt=""
              />
            </div>
            <div className="bg-[#F4F8FC] rounded-lg border border-[#D8D8D8] p-3 flex justify-center items-center">
              <Image
                src={ImgThreee}
                height={30}
                width={30}
                objectFit="contain"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DownloadPage;
