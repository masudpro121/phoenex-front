import Image from "next/image";
import React from "react";
import star from "@/assets/choose/star.png";
import starFour from "@/assets/choose/starfour.png";
import starPoint from "@/assets/choose/starpoint.png";
import Vector from "@/assets/choose/vector.png";
import Speechbubble from "@/assets/choose/speechbubble.png";
import current from "@/assets/choose/current.png";
import boxStar from "@/assets/choose/boxstar.png";
import pencel from "@/assets/choose/pencel.png";
import choose from "@/assets/choose/choose.png";
import Link from "next/link";

function Comics() {
  const options = [
    {
      icon: current,
      route: "/workspace/comics/express/upload-content",
      heading: "Express Mode",
      text: "Dive into comics creation with minimal effort! Perfect for those without a concrete idea or just looking for some fun.",
    },
    {
      icon: boxStar,
      route: "/workspace/comics/prompt/upload-content",
      heading: "Prompt Mode",
      text: "Tailored for professionals, writers, and educators: Upload prompts, get topic suggestions, refine your comic.",
    },

    {
      icon: pencel,
      route: "/",
      heading: "Customize Mode",
      text: "For comics professionals: Upload content, receive classic titles, dive into an all-in-one comics and video editor.",
    },

    // Add more objects as needed
  ];
  return (
    <>
      <div className="bg-white w-full h-full rounded-2xl flex flex-col justify-between  ">
        <div className="w-[90%] mx-auto pb-10">
          <div className="flex justify-between items-center py-4">
            <div className="pt-6">
              <Image src={star} width={30} height={30} alt="" />
            </div>
            <div className="pt-4">
              <Image src={starFour} width={30} height={30} alt="" />
            </div>
            <div>
              <Image src={Speechbubble} width={30} height={30} alt="" />
            </div>
            <div>
              <p className="text-[14px] text-center">
                Experience the Next Level of Storytelling
              </p>
              <p className="text-[22px] text-[#2B8CFF] text-center font-bold">
                Be Your Own Illustrator
              </p>
            </div>

            <div className="pt-6">
              <Image src={Vector} width={30} height={30} alt="" />
            </div>
            <div className="pt-2">
              <Image src={starPoint} width={30} height={30} alt="" />
            </div>
            <div className="pt-3">
              <Image src={star} width={30} height={30} alt="" />
            </div>
          </div>
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
            {options.map((item, index) => (
              <Link key={index} href={item.route}>
                <div
                  key={index}
                  className="border border-[#D8D8D8] rounded-xl py-6 px-4 flex flex-col justify-center items-center text-center h-[250px]"
                >
                  <div className="flex gap-3 items-center justify-center pb-3 ">
                    <div>
                      <Image src={item.icon} width={20} height={20} alt="" />
                    </div>
                    <p className="text-[18px]"> {item.heading} </p>
                  </div>
                  <p className="text-[12px]">{item.text}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="w-full h-full ">
          <div className="relative h-full w-full ">
            <Image src={choose} layout="fill" objectFit="cover" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Comics;
