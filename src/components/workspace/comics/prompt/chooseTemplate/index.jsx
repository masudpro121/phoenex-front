"use client";
import React from "react";
import TemplateCard from "./templateCard";
import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

import avatar1 from "@/assets/comics/uploadContent/avatar3.png";
import avatar5 from "@/assets/comics/uploadContent/avatar5.png";
import avatar7 from "@/assets/comics/uploadContent/avatar7.png";
import avatar9 from "@/assets/comics/uploadContent/avatar8.png";
import avatar6 from "@/assets/comics/uploadContent/avatar6.png";
import avatar8 from "@/assets/comics/uploadContent/avatar4.png";

import { useWorkspaceContext } from "@/context/workspaceProvider";
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

function ChooseTemplatePage() {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  const [template, setTemplate] = useState();
  const [original, setOriginal] = useState(true);
  const { sidebar, setSidebar } = useWorkspaceContext();

  return (
    <div className="bg-[white] flex flex-col p-4 w-full rounded-3xl h-full">
      <div className="w-full justify-between flex text-[16px] font-semibold border-b-2 pb-4 mb-4 border-[#D8D8D8]">
        <div className="w-[75%] flex items-center">
          <button className=" border-[2px] bg-[#F4F8FC] text-[#2B8CFF] border-[#2B8CFF] rounded-2xl w-[15%] py-2">
            Story
          </button>
          <div className="border-4 h-2 w-[5%] bg-[#2B8CFF] border-[#2B8CFF]"></div>
          <button className=" border-[2px] bg-[#F4F8FC] text-[#2B8CFF] border-[#2B8CFF] rounded-2xl w-[15%] py-2">
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
          <button className=" border-[4px] bg-[#2B8CFF] text-white border-[#F4F8FC] rounded-2xl w-[50%] py-2">
            Next
          </button>
        </div>
      </div>
      <div className="w-full flex flex-col pl-4 rounded-3xl">
        <div className="flex p-4 mb-4 flex-row w-full bg-[#F4F8FC] rounded-3xl justify-between items-center ">
          <h3 className="text-[28px] font-semibold text-[#2B8CFF] ">Recommended Topics</h3>
          <div className=" w-[45%]  flex flex-row text-[14px] items-center gap-4 text-center">
            <input
              placeholder="Search here..."
              className=" placeholder:text-[#666666] w-[40%] placeholder:text-[14px] py-2  rounded-3xl border-none outline-none"
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
                                active ? "bg-gray-100 text-gray-900" : "text-gray-700",
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
            <button className="bg-[#2B8CFF] py-2 w-[30%] rounded-3xl text-white">Continue</button>
          </div>
        </div>
        <div
          className={` ${
            sidebar ? "grid-cols-3" : "grid-cols-4"
          } grid gap-4 pt-4 overflow-y-auto h-[75vh] border-t border-[#D8D8D8]  `}
        >
          {items.map((item, index) => (
            <TemplateCard key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ChooseTemplatePage;
