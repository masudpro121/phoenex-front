"use client";
import React from "react";
import TemplateCard from "./templateCard";
import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

import { IoDocumentAttach } from "react-icons/io5";
import { MdKeyboardVoice } from "react-icons/md";

import { FaFilePdf } from "react-icons/fa";

import avatar1 from "@/assets/workspace/uploadContent/avatar1.png";
import avatar5 from "@/assets/workspace/uploadContent/avatar5.png";
import avatar7 from "@/assets/workspace/uploadContent/avatar7.png";
import avatar9 from "@/assets/workspace/uploadContent/avatar9.png";
import avatar6 from "@/assets/workspace/uploadContent/avatar6.png";
import avatar8 from "@/assets/workspace/uploadContent/avatar8.png";
import { useWorkspaceContext } from "@/context/workspaceProvider";
import Link from "next/link";

const items = [
  {
    topic: "Adventure in Wonderland",
    panels: "46",
    style: "Vibrant Cartoon",
    image: avatar1,
  },
  {
    topic: "Space Odyssey",
    panels: "32",
    style: "Sci-Fi Futuristic",
    image: avatar5,
  },
  {
    topic: "Mystery Mansion",
    panels: "38    ",
    style: "Dark Noir",
    image: avatar7,
  },
  {
    topic: "Time Travel Chronicles",
    panels: "20",
    style: "Retro Pixel Art",
    image: avatar9,
  },
  {
    topic: "Magical Quest",
    panels: "30",
    style: "Whimsical Fantasy",
    image: avatar6,
  },
  {
    topic: "Superhero Showdown",
    panels: "45",
    style: "Bold Comic Book",
    image: avatar8,
  },
  {
    topic: "Adventure in Wonderland",
    panels: "46",
    style: "Vibrant Cartoon",
    image: avatar1,
  },
  {
    topic: "Space Odyssey",
    panels: "32",
    style: "Sci-Fi Futuristic",
    image: avatar5,
  },
  {
    topic: "Mystery Mansion",
    panels: "38    ",
    style: "Dark Noir",
    image: avatar7,
  },
];

function UploadContentPage() {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  const { sidebar, setSidebar } = useWorkspaceContext();
  
  return (
    <div className="bg-[white] flex flex-col p-4 w-full rounded-3xl h-full">
      <div className="w-full shape items-center justify-center text-center mb-3 ">
        <h1 className="text-[28px] font-bold mb-3">Upload Content</h1>
        <label className="text-[18px] ">
          Experience the Next Level of Storytelling - Be Your Own Illustrator
        </label>
      </div>
      <div className="flex font-semibold flex-row my-4 w-full gap-2 items-center justify-between text-center">
        <input
          placeholder="Enter your story here..."
          className=" placeholder:text-[#666666] w-[45%] bg-[#F4F8FC] rounded-2xl border-none outline-none"
        />
        <button className="bg-[#F4F8FC] flex items-center justify-center text-[#2B8CFF] py-2 w-[12%] rounded-3xl">
          <MdKeyboardVoice className="text-2xl mr-1" />
          Voice
        </button>
        <button className="bg-[#F4F8FC] flex items-center justify-center text-[#2B8CFF] py-2 w-[12%] rounded-3xl">
          <FaFilePdf className="text-2xl mr-1" /> Pictures
        </button>
        <button className="bg-[#F4F8FC] flex items-center justify-center text-[#2B8CFF] py-2 w-[12%] rounded-3xl">
          <IoDocumentAttach className="text-2xl mr-1" />
          Attach file
        </button>
        {/* <button className="bg-[#2B8CFF] py-2 w-[14%] rounded-3xl text-white"> */}
         <Link className="bg-[#2B8CFF] py-2 w-[14%] rounded-3xl text-white" href={'choose-template'}>  Continue
         
         </Link>
        
        {/* </button> */}
      </div>
      <div className="flex flex-col p-4 bg-[#F4F8FC] rounded-3xl">
        <div className="flex flex-row w-full justify-between items-center border-b border-[#D8D8D8] pb-4">
          <h3 className="text-[28px] font-bold">Templates</h3>
          <div className=" w-[45%] flex flex-row text-[14px] items-center gap-4 text-center">
            <input
              placeholder="Search here..."
              className=" placeholder:text-[#666666] w-[40%] placeholder:text-[14px] py-2 bg-white rounded-3xl border-none outline-none"
            />
            <Menu as="div" className="relative block text-left ml-auto w-[30%]">
              {({ open }) => (
                <>
                  <div className="w-full">
                    <Menu.Button
                      className={` w-full inline-flex text-[14px] items-center justify-center py-2  rounded-3xl  bg-white shadow-sm ring-1 ring-inset ring-gray-300 `}
                    >
                      Catogaries
                      <ChevronDownIcon
                        className={`${
                          open ? "rotate-180" : ""
                        } h-5 w-5 transform transition duration-300 `}
                        aria-hidden="true"
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute mt-2 right-0 z-[1000] w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-1">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              option
                            </a>
                          )}
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Transition>
                </>
              )}
            </Menu>
            <button className="bg-[#2B8CFF] py-2 w-[30%] rounded-3xl text-white">
              Continue
            </button>
          </div>
        </div>
        <div
          className={` ${
            sidebar ? "grid-cols-3" : "grid-cols-3"
          } grid gap-4 pt-4 overflow-y-auto h-[500px] `}
        >
          {items.map((item, index) => (
            <TemplateCard key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default UploadContentPage;
