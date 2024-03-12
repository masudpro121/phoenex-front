"use client";
import React from "react";

import { Fragment, useState } from "react";
import { Menu, Transition, Popover } from "@headlessui/react";

import avatar1 from "@/assets/comics/uploadContent/avatar3.png";
import avatar5 from "@/assets/comics/uploadContent/avatar5.png";
import avatar7 from "@/assets/comics/uploadContent/avatar7.png";
import avatar9 from "@/assets/comics/uploadContent/avatar8.png";
import avatar6 from "@/assets/comics/uploadContent/avatar6.png";
import avatar8 from "@/assets/comics/uploadContent/avatar4.png";
import { useWorkspaceContext } from "@/context/workspaceProvider";
import { BiSolidEditAlt } from "react-icons/bi";
import { LiaCloudMeatballSolid } from "react-icons/lia";
import { FaRegTrashAlt } from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";
import { PiDotsNineBold } from "react-icons/pi";
import { IoMdCloseCircle } from "react-icons/io";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import Link from "next/link";

const items = [
  {
    topic: "Adventure in Wonderland",
    panels: "46",
    style: "Vibrant Cartoon",
    image: avatar1,
    titles: ["Whimsical Wonders ", "Mystical Creatures' Realm", "Confrontation"],
  },
  {
    topic: "Space Odyssey",
    panels: "32",
    style: "Sci-Fi Futuristic",
    image: avatar5,
    titles: ["Galactic Frontier", "Journey Beyond Stars", "Cosmic Conundrums", "Adventures"],
  },
  {
    topic: "Mystery Mansion",
    panels: "38    ",
    style: "Dark Noir",
    image: avatar7,
    titles: ["Whispers in Shadows", "Noir Enigma", "Sinister Secrets", "Haunted Chronicles"],
  },
  {
    topic: "Time Travel Chronicles",
    panels: "20",
    style: "Retro Pixel Art",
    image: avatar9,
    titles: ["Pixelated Time Warp", "Chronicles of Time"],
  },
  {
    topic: "Magical Quest",
    panels: "30",
    style: "Whimsical Fantasy",
    image: avatar6,
    titles: ["Fantasy Fables", "Magical Adventures"],
  },
  {
    topic: "Superhero Showdown",
    panels: "45",
    style: "Bold Comic Book",
    image: avatar8,
    titles: ["Heroic Clash", "Epic Showdown"],
  },
  {
    topic: "Adventure in Wonderland",
    panels: "46",
    style: "Vibrant Cartoon",
    image: avatar1,
    titles: ["Whimsical Wonders ", "Mystical Creatures' Realm", "Confrontation"],
  },
  {
    topic: "Space Odyssey",
    panels: "32",
    style: "Sci-Fi Futuristic",
    image: avatar5,
    titles: ["Galactic Frontier", "Journey Beyond Stars", "Cosmic Conundrums", "Adventures"],
  },
  {
    topic: "Mystery Mansion",
    panels: "38    ",
    style: "Dark Noir",
    image: avatar7,
    titles: ["Whispers in Shadows", "Noir Enigma", "Sinister Secrets", "Haunted Chronicles"],
  },
];

function StoryboardRefinementPage() {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  const [original, setOriginal] = useState(true);

  const { sidebar, setSidebar } = useWorkspaceContext();
  const [data, setData] = useState({
    chapters: [
      {
        chapter: "chapter 1",
        pages: [
          {
            panels: [
              "An ordinary living room with a sofa, a lamp, and a closed front door.",
              "Write here..",
            ],
          },
          {
            panels: [
              "Door slightly ajar, revealing a mysterious silhouette.",
              "The silhouette steps into the room",
              "The kitten looks around curiously.",
            ],
          },
        ],
      },
      {
        chapter: "chapter 2",
        pages: [
          {
            panels: [
              "An ordinary living room with a sofa, a lamp, and a closed front door.",
              "Write here..",
            ],
          },
          {
            panels: [
              "Door slightly ajar, revealing a mysterious silhouette.",
              "The silhouette steps into the room",
              "The kitten looks around curiously.",
            ],
          },
        ],
      },
      {
        chapter: "chapter 3",
        pages: [
          {
            panels: [
              "An ordinary living room with a sofa, a lamp, and a closed front door.",
              "Write here..",
            ],
          },
          {
            panels: [
              "Door slightly ajar, revealing a mysterious silhouette.",
              "The silhouette steps into the room",
              "The kitten looks around curiously.",
            ],
          },
        ],
      },
      {
        chapter: "chapter 4",
        pages: [
          {
            panels: [
              "An ordinary living room with a sofa, a lamp, and a closed front door.",
              "Write here..",
            ],
          },
          {
            panels: [
              "Door slightly ajar, revealing a mysterious silhouette.",
              "The silhouette steps into the room",
              "The kitten looks around curiously.",
            ],
          },
        ],
      },
    ],
  });
  return (
    <div className="bg-[white] flex flex-col p-4 w-full rounded-3xl h-full">
      <div className="w-full justify-between flex text-[16px] font-semibold border-b-2 pb-4 mb-4 border-[#D8D8D8]">
        <div className="w-[75%] flex items-center">
          <button className=" border-[2px] bg-[#F4F8FC] text-[#2B8CFF] border-[#2B8CFF] rounded-2xl w-[15%] py-2">
            Story
          </button>
          <div className="border-4 h-2 w-[5%] bg-[#F4F8FC] border-[#F4F8FC]"></div>
          <button className=" border-[2px] bg-[#F4F8FC] text-[#9E9E9E] border-[#F4F8FC] rounded-2xl w-[15%] py-2">
            Choose Template
          </button>
          <div className="border-4 h-2 w-[5%] bg-[#F4F8FC] border-[#F4F8FC]"></div>
          <button className=" border-[2px] bg-[#F4F8FC] text-[#9E9E9E] border-[#F4F8FC] rounded-2xl w-[15%] py-2">
            Character Design
          </button>
          <div className="border-4 h-2 w-[5%] bg-[#F4F8FC] border-[#F4F8FC]"></div>
          <button className=" border-[2px] bg-[#F4F8FC] text-[#9E9E9E] border-[#F4F8FC] rounded-2xl w-[15%] py-2">
            Panel
          </button>
          <div className="border-4 h-2 w-[5%] bg-[#F4F8FC] border-[#F4F8FC]"></div>
          <button className=" border-[2px] bg-[#F4F8FC] text-[#9E9E9E] border-[#F4F8FC] rounded-2xl w-[15%] py-2">
            Editor
          </button>
        </div>
        <div className="w-[20%] flex gap-3 ">
          <button className=" border-[4px] bg-white text-[#D8D8D8] border-[#F4F8FC] rounded-2xl w-[50%] py-2">
            Skip
          </button>
          <Link
            href={"choose-template"}
            className=" text-center border-[4px] bg-[#2B8CFF] text-white border-[#F4F8FC] rounded-2xl w-[50%] py-2"
          >
            Next
          </Link>
        </div>
      </div>
      <div className=" flex w-full gap-4">
        <div className="w-[15%] bg-[#F4F8FC] h-full items-center justify-center text-center p-4 rounded-3xl ">
          <div className="flex flex-row w-full justify-between items-center pb-2 border-b border-[#D8D8D8] ">
            <h3 className="text-[16px] font-semibold">Chapters</h3>
          </div>
          <div className="flex flex-col ">
            <div className=" overflow-y-auto over h-[60vh]">
              <button className="border-2 flex justify-center gap-2 items-center my-6 text-[#2B8CFF] border-[#2B8CFF] rounded-2xl w-full  py-2">
                <IoMdAddCircle className="text-[18px]" /> New Chapter
              </button>
              <div className="flex flex-col gap-3">
                {data.chapters.map((chapters, index) => (
                  <div
                    key={index}
                    className="flex  bg-white p-3 rounded-2xl items-center justify-between text-[#9E9E9E] text-[14px]"
                  >
                    <label>Chapter {index + 1}</label>
                    <div className="flex gap-2 text-[18px]">
                      <button>
                        <BiSolidEditAlt />
                      </button>
                      <button>
                        <FaRegTrashAlt />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="w-[85%] bg-[#F4F8FC] flex flex-col p-4 rounded-3xl">
          <div className="flex flex-row w-full justify-between items-center border-b border-[#D8D8D8] ">
            <h3 className="text-[24px] font-semibold">
              Get a glimpse of your story`&apos;`s new visual life
            </h3>
            <div
              className={` w-[40%] overflow-hidden mb-4 p-2 bg-white text-[14px] text-[#9E9E9E]  flex justify-between rounded-xl `}
            >
              <button
                onClick={() => {
                  setOriginal(true);
                }}
                className={`
                    ${
                      original ? "bg-[#2B8CFF] text-white " : `bg-transparent`
                    } rounded-xl  flex w-[50%] gap-2 items-center justify-center py-3`}
              >
                <BiSolidEditAlt className="text-[24px]" /> Add Content
              </button>
              <button
                onClick={() => {
                  setOriginal(false);
                }}
                className={`${
                  original ? "bg-transparent" : `bg-[#2B8CFF] text-white `
                }  rounded-xl flex w-[50%] gap-2 items-center justify-center py-3`}
              >
                <LiaCloudMeatballSolid className="text-[24px]" /> AI Generation
              </button>
            </div>
          </div>
          <div className={` flex flex-col gap-8 pt-4 pr-4 overflow-y-auto h-[60vh] w-full`}>
            {data.chapters[0].pages.map((panels, index) => (
              <div className=" flex flex-col w-full gap-4" key={index}>
                <div className="flex items-center bg-white rounded-2xl p-3 h-min w-full gap-3 font-bold">
                  <button className=" rounded-lg h-full px-2 text-[#D8D8D8] bg-[#F4F8FC] text-[20px]">
                    <PiDotsNineBold />
                  </button>
                  <label> Page {index + 1} </label>
                </div>
                {panels.panels.map((panel, index2) => (
                  <>
                    <div
                      key={index2}
                      className=" flex text-left items-center bg-white rounded-2xl p-3 h-full w-full gap-3"
                    >
                      <button className=" rounded-lg h-full px-2 text-[#D8D8D8] bg-[#F4F8FC] text-[20px]">
                        <PiDotsNineBold />
                      </button>
                      <div className="flex flex-col">
                        <label className=" text-[#2B8CFF] font-bold">Panel {index2 + 1}</label>
                        <p className="leading-[30px]">{panel}</p>
                      </div>
                      <div className="ml-auto text-[18px] p-2 h-full rounded-2xl flex flex-col gap-2 bg-[#F4F8FC]">
                        <div className="flex gap-2 text-[#D8D8D8]">
                          <button>
                            <LiaCloudMeatballSolid />
                          </button>
                          <button>
                            <FaRegTrashAlt />
                          </button>
                        </div>
                        <Popover as="div" className="relative block   ">
                          <Popover.Button
                            className={` flex justify-center text-[#2B8CFF] bg-white py-1 rounded-lg  w-full h-full`}
                          >
                            <IoMdAddCircle />
                          </Popover.Button>
                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                          >
                            <Popover.Panel className="absolute right-16 bottom-14  z-[1000] w-[15rem] h-[15rem] origin-top-right rounded-3xl bg-white shadow-lg ring-black ring-opacity-5 focus:outline-none">
                              <div className="p-3 w-full h-full flex flex-col ">
                                <Popover.Button className="ml-auto text-[#9E9E9E] cursor-pointer focus:outline-none ">
                                  <IoMdCloseCircle />
                                </Popover.Button>
                                <div className="flex h-full flex-col justify-between mt-2">
                                  <div className="flex flex-col gap-3">
                                    <label>{panel}</label>
                                    <Popover.Button className="bg-[#2B8CFF] text-white border-[#F4F8FC] rounded-xl w-[40%] py-2">
                                      Use
                                    </Popover.Button>
                                  </div>
                                  <div className="flex items-center justify-between">
                                    <label className="text-[#9E9E9E]">
                                      <span className="text-black">1</span> of 4
                                    </label>
                                    <div className="flex gap-2 text-[20px]">
                                      <button>
                                        <HiOutlineArrowNarrowLeft />
                                      </button>
                                      <button>
                                        <HiOutlineArrowNarrowRight />
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Popover.Panel>
                          </Transition>
                        </Popover>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default StoryboardRefinementPage;
