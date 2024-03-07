"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/legacy/image";
import { useState } from "react";

import cn from "../../../utils/class-names";

import dp from "../../../assets/header/dp.png";
import iconUser from "../../../assets/icon/iconuser.png";
// import iconCrown from "../../../assets/icon/IconCrown1.svg";
// import icon2 from "../../../assets/icon/IconCrown2.svg";
// import icon3 from "../../../assets/icon/IconCrown3.svg";
// import icon4 from "../../../assets/icon/IconCrown4.svg";
// import icon5 from "../../../assets/icon/IconLearing5.svg";
// import icon6 from "../../../assets/icon/IconCrown6.svg";
// import icon7 from "../../../assets/icon/IconCrown7.svg";
// import logout from "../../../assets/icon/logout.svg";

import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";


import { ChevronUpIcon } from "@heroicons/react/20/solid";

import Logo from "../../../components/logo";
import {
  WorkspaceContext,
  useWorkspaceContext,
} from "../../../context/workspaceProvider";
import { Disclosure } from "@headlessui/react";

// import StatusBadge from "../../../components/get-status-badge";

import { FaCrown } from "react-icons/fa";
import { RiHome6Fill } from "react-icons/ri";
import { FaAward } from "react-icons/fa6";
import { PiBrainFill } from "react-icons/pi";
import { GiSpellBook } from "react-icons/gi";
import { IoLibrary } from "react-icons/io5";
import { HiTemplate } from "react-icons/hi";
import { IoLogIn } from "react-icons/io5";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const sidebarData = [
  {
    label: "Learning Assets",
    icon: <PiBrainFill className="eye_icons" />,
    data: [
      {
        label: "option1",
        route: "/",
      },
      {
        label: "option2",
        route: "/",
      },
    ],
  },
  {
    label: "Learning Profile",
    icon: <GiSpellBook className="eye_icons" />,
    data: [
      {
        label: "option1",
        route: "/",
      },
      {
        label: "option2",
        route: "/",
      },
    ],
  },
  {
    label: "Library",
    icon: <IoLibrary className="eye_icons" />,
    data: [
      {
        label: "option1",
        route: "/",
      },
      {
        label: "option2",
        route: "/",
      },
    ],
  },
  {
    label: "Templates",
    icon: <HiTemplate className="eye_icons" />,
    data: [
      {
        label: "option1",
        route: "/",
      },
      {
        label: "option2",
        route: "/",
      },
    ],
  },
];
const sidebarButtons = [
  {
    label: "Try PhoenEdx Pro",
    routes: "/",
    icon: <FaCrown className="eye_icons" />,
  },
  {
    label: "Home",
    routes: "/",
    icon: <RiHome6Fill className="eye_icons" />,
  },
  {
    label: "Award Winning",
    routes: "/",
    icon: <FaAward className="eye_icons" />,
  },
];
export default function Sidebar({ className }) {
  const { sidebar, setSidebar } = useWorkspaceContext();

  const pathname = usePathname();
  return (
    <aside
      className={cn(
        `${
          sidebar ? "w-[270px] 2xl:w-72" : "w-0"
        } transform-width duration-500 fixed overflow-hidden bottom-0 start-0 z-50 h-[85vh] border-gray-100 rounded-[30px] bg-white  dark:bg-gray-100/50 mt-10 mx-4`,
        className
      )}
    >
      <div className=" min-w-[270px] top-0 z-40 bg-gray-0/10 overflow-hidden  pb-5 pt-2  dark:bg-gray-100/5">
        <div className="w-full px-2 flex flex-col ">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className=" border-b-2 border-b-[#9E9E9E] flex w-[94%] mx-auto justify-between py-4 text-left text-sm font-medium focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                  <div className="flex items-center ">
                    <Image alt={"DP"} src={dp} width="50" height="50" />
                    <div className="flex flex-col items-start ml-3">
                      <label className="text-[#666666] font-semibold text-[16px] mb-1">
                        Shayan Ali
                      </label>

                      <label className="flex items-center text-[#9E9E9E] ">
                        Free.
                        <Image
                          alt={""}
                          src={iconUser}
                          width="20"
                          height="20"
                          className="mx-2"
                        />
                        1
                      </label>
                    </div>
                  </div>

                  <ChevronUpIcon
                    className={`${
                      open ? "" : "rotate-180"
                    } h-5 w-5 transform transition duration-300 `}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pb-2  text-sm text-gray-500">
                  <Disclosure.Button className="flex w-full rounded-2xl justify-between mt-2 px-2 py-3 text-left text-[#9E9E9E]  focus:outline-none hover:text-white hover:bg-[#2B8CFF] focus-visible:ring focus-visible:ring-purple-500/75">
                    <button className="flex items-center w-full ">
                      {/* <Image
                            src={items.icon}
                            alt={items.label}
                            width="40"
                            height="40"
                            className={`h-6 w-6 `}
                          /> */}
                      <div className="flex flex-col items-start ml-6">
                        <label className="text-[16px]">Options</label>
                      </div>
                    </button>
                  </Disclosure.Button>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <div
            className={` text-[16px] fon mx-auto w-full max-w-md px-2 overflow-y-auto bg-white  h-[65vh] `}
          >
            {sidebarButtons.map((items) => (
              <button
                key={items.label}
                className=" visual_assests flex w-full rounded-2xl justify-between mt-2 px-2 py-3 text-left text-[#9E9E9E]  focus:outline-none hover:text-white hover:bg-[#2B8CFF] focus-visible:ring focus-visible:ring-purple-500/75"
              >
                <div className="flex items-center ">
                  <div className="">{items.icon}</div>

                  <div className="flex flex-col items-start ml-3">
                    <label className="">{items.label}</label>
                  </div>
                </div>
              </button>
            ))}
            {sidebarData.map((item) => (
              <Disclosure key={item.label}>
                {({ open }) => (
                  <>
                    <Disclosure.Button
                      className={` visual_assests ${
                        open ? "text-black active" : "text-[#9E9E9E]"
                      }   rounded-2xl flex w-full justify-between mt-2 px-2 py-3 text-lefttext-[#666666] hover:text-white hover:bg-[#2B8CFF] focus:outline-none focus-visible:ring-[#2B8CFF] focus-visible:ring-purple-500/75`}
                    >
                      <div className="flex items-center ">
                        <div className="">{item.icon}</div>
                        <div className="flex flex-col items-start ml-3">
                          <label className="  mb-1">{item.label}</label>
                        </div>
                      </div>

                      <ChevronUpIcon
                        className={`${
                          open ? "" : "rotate-180"
                        } h-5 w-5 transform transition duration-300 `}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pb-2  text-sm text-gray-500">
                      <button className="flex w-full rounded-2xl justify-between mt-2 px-2 py-3 text-left text-[#9E9E9E]  focus:outline-none hover:text-white hover:bg-[#2B8CFF] focus-visible:ring focus-visible:ring-purple-500/75">
                        <div className="flex items-center ">
                          {/* <Image
                            src={items.icon}
                            alt={items.label}
                            width="40"
                            height="40"
                            className={`h-6 w-6 `}
                          /> */}
                          <div className="flex flex-col items-start ml-6">
                            <label className="text-[16px]">Options</label>
                          </div>
                        </div>
                      </button>
                      <button className="flex w-full rounded-2xl justify-between mt-2 px-2 py-3 text-left text-[#9E9E9E]  focus:outline-none hover:text-white hover:bg-[#2B8CFF] focus-visible:ring focus-visible:ring-purple-500/75">
                        <div className="flex items-center ">
                          {/* <Image
                            src={items.icon}
                            alt={items.label}
                            width="40"
                            height="40"
                            className={`h-6 w-6 `}
                          /> */}
                          <div className="flex flex-col items-start ml-6">
                            <label className="text-[16px]">Options2</label>
                          </div>
                        </div>
                      </button>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </div>
          <button className=" visual_assests flex w-full rounded-2xl justify-between mt-2 px-2 py-3 text-left text-[#9E9E9E]  focus:outline-none hover:text-white hover:bg-[#2B8CFF] focus-visible:ring focus-visible:ring-purple-500/75">
            <div className="flex items-center ">
              <IoLogIn className="eye_icons" />
              <div className="flex flex-col items-start ml-6">
                <label className="text-[16px]">Logout</label>
              </div>
            </div>
          </button>
        </div>
      </div>

      {/* Content here */}
    </aside>
  );
}
