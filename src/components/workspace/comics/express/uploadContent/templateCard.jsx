import React from "react";
import Image from "next/image";

function TemplateCard({ item }) {
  return (
    <div className="flex flex-row text-[14px] leading-[21px] p-2 rounded-3xl bg-white">
      <Image
        src={item.image}
        alt={item.topic}
        className=" w-[200px] h-[200px] rounded-2xl"
      />
      <div className="p-4 flex flex-col w-full justify-between gap-2 ">
        <div className=" flex flex-row justify-between w-full">
          <div className="flex flex-col gap-2">
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
        <button className=" w-[140px] h-[38px] bg-[#2B8CFF] rounded-2xl text-white ">
          See details
        </button>
      </div>
    </div>
  );
}

export default TemplateCard;
