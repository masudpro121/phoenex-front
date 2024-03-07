"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/legacy/image";
import { useState } from "react";

import cn from "../../../utils/class-names";

// import dp from "@/assets/header/dp.png";
import iconUser from "@/assets/icon/iconuser.png";
// import iconCrown from "../../../assets/icon/IconCrown1.svg";
// import icon2 from "../../../assets/icon/IconCrown2.svg";
// import icon3 from "../../../assets/icon/IconCrown3.svg";

import sidebar35 from "../../../assets/icon/sidebar35.svg";
import semblyIcon from "../../../assets/icon/sembly.png";
import airgramIcon from "../../../assets/icon/airgram.png";
import otterIcon from "../../../assets/icon/otter.png";
import krispIcon from "../../../assets/icon/krisp.png";

import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { FaYoutube } from "react-icons/fa";
import { GiNetworkBars } from "react-icons/gi";
import { SlBadge } from "react-icons/sl";

import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import { RiVoiceprintFill } from "react-icons/ri";
import { AiFillPicture } from "react-icons/ai";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useWorkspaceContext } from "../../../context/workspaceProvider";
// import StatusBadge from "@/components/get-status-badge";
import { GiSpellBook } from "react-icons/gi";
import { MdVideoLibrary } from "react-icons/md";
import { TbChartInfographic } from "react-icons/tb";
import { GiBrain } from "react-icons/gi";
import { MdManageHistory } from "react-icons/md";
import { ImSmile2 } from "react-icons/im";
import { BsFileEarmarkBarGraphFill } from "react-icons/bs";
import { ImFolderUpload } from "react-icons/im";
import { PiBrainFill } from "react-icons/pi";
import { FaUser } from "react-icons/fa";
import { GiStarFormation } from "react-icons/gi";
import { FaCloudUploadAlt } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { BsSoundwave } from "react-icons/bs";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const templates = [
  {
    label: "VISUAL ASSETS",
    icon: <FaEye className="eye_icons" />,
    options: [
      {
        label: "Inroduction Video",
        route: "/",
        icon: <FaYoutube className="eye_icons" />,
      },
      {
        label: "Pictures",
        route: "/",
        icon: <AiFillPicture className="eye_icons" />,
      },
      {
        label: "Comics",
        route: "/workspace/comics",
        icon: <GiSpellBook className="eye_icons" />,
      },
      {
        label: "Video series",
        route: "/",
        icon: <MdVideoLibrary className="eye_icons" />,
      },
    ],
  },
  {
    label: "VOICES",
    icon: <BsSoundwave className="eye_icons" />,
    options: [
      {
        label: "Inroduction Video",
        route: "/",
        icon: <FaYoutube className="eye_icons" />,
      },
      {
        label: "Pictures",
        route: "/",
        icon: <AiFillPicture className="eye_icons" />,
      },
      {
        label: "Comics",
        route: "/",
        icon: <GiSpellBook className="eye_icons" />,
      },
      {
        label: "Video series",
        route: "/",
        icon: <MdVideoLibrary className="eye_icons" />,
      },
    ],
  },
  {
    label: "INFORGRAPHICS",
    icon: <TbChartInfographic className="eye_icons" />,
    options: [
      {
        label: "Inroduction Video",
        route: "/",
        icon: <FaYoutube className="eye_icons" />,
      },
      {
        label: "Pictures",
        route: "/",
        icon: <AiFillPicture className="eye_icons" />,
      },
      {
        label: "Comics",
        route: "/",
        icon: <GiSpellBook className="eye_icons" />,
      },
      {
        label: "Video series",
        route: "/",
        icon: <MdVideoLibrary className="eye_icons" />,
      },
    ],
  },
  {
    label: "WRITING FORMATS",
    icon: <GiNetworkBars className="eye_icons" />,
    options: [
      {
        label: "Inroduction Video",
        route: "/",
        icon: <FaYoutube className="eye_icons" />,
      },
      {
        label: "Pictures",
        route: "/",
        icon: <AiFillPicture className="eye_icons" />,
      },
      {
        label: "Comics",
        route: "/",
        icon: <GiSpellBook className="eye_icons" />,
      },
      {
        label: "Video series",
        route: "/",
        icon: <MdVideoLibrary className="eye_icons" />,
      },
    ],
  },
  {
    label: "EXPERTS",
    icon: <SlBadge className="eye_icons" />,
    options: [
      {
        label: "Inroduction Video",
        route: "/",
        icon: <FaYoutube className="eye_icons" />,
      },
      {
        label: "Pictures",
        route: "/",
        icon: <AiFillPicture className="eye_icons" />,
      },
      {
        label: "Comics",
        route: "/",
        icon: <GiSpellBook className="eye_icons" />,
      },
      {
        label: "Video series",
        route: "/",
        icon: <MdVideoLibrary className="eye_icons" />,
      },
    ],
  },
  {
    label: "CRITICAL THINKING",
    icon: <GiBrain className="eye_icons" />,
    options: [
      {
        label: "Inroduction Video",
        route: "/",
        icon: <FaYoutube className="eye_icons" />,
      },
      {
        label: "Pictures",
        route: "/",
        icon: <AiFillPicture className="eye_icons" />,
      },
      {
        label: "Comics",
        route: "/",
        icon: <GiSpellBook className="eye_icons" />,
      },
      {
        label: "Video series",
        route: "/",
        icon: <MdVideoLibrary className="eye_icons" />,
      },
    ],
  },
  {
    label: "TEST PREP",
    icon: <BsFileEarmarkBarGraphFill className="eye_icons" />,
    options: [
      {
        label: "Inroduction Video",
        route: "/",
        icon: <FaYoutube className="eye_icons" />,
      },
      {
        label: "Pictures",
        route: "/",
        icon: <AiFillPicture className="eye_icons" />,
      },
      {
        label: "Comics",
        route: "/",
        icon: <GiSpellBook className="eye_icons" />,
      },
      {
        label: "Video series",
        route: "/",
        icon: <MdVideoLibrary className="eye_icons" />,
      },
    ],
  },
  {
    label: "KNOWLEDGE MANAGEMENT",
    icon: <MdManageHistory className="eye_icons" />,
    options: [
      {
        label: "Inroduction Video",
        route: "/",
        icon: <FaYoutube className="eye_icons" />,
      },
      {
        label: "Pictures",
        route: "/",
        icon: <AiFillPicture className="eye_icons" />,
      },
      {
        label: "Comics",
        route: "/",
        icon: <GiSpellBook className="eye_icons" />,
      },
      {
        label: "Video series",
        route: "/",
        icon: <MdVideoLibrary className="eye_icons" />,
      },
    ],
  },
  {
    label: "BEHAVIORAL OPTIMIZATION",
    icon: <ImSmile2 className="eye_icons" />,
    options: [
      {
        label: "Inroduction Video",
        route: "/",
        icon: <FaYoutube className="eye_icons" />,
      },
      {
        label: "Pictures",
        route: "/",
        icon: <AiFillPicture className="eye_icons" />,
      },
      {
        label: "Comics",
        route: "/",
        icon: <GiSpellBook className="eye_icons" />,
      },
      {
        label: "Video series",
        route: "/",
        icon: <MdVideoLibrary className="eye_icons" />,
      },
    ],
  },
];

const studyToolkit = [
  {
    label: "NOTE TAKING TOOLS",
    options: [
      {
        label: "Sembly AI",
        route: "/",
        icon: semblyIcon,
      },
      {
        label: "Otter AI",
        route: "/",
        icon: otterIcon,
      },
      {
        label: "Krisp AI",
        route: "/",
        icon: krispIcon,
      },
      {
        label: "Airgram AI",
        route: "/",
        icon: airgramIcon,
      },
    ],
  },
  {
    label: "TUTOT_GPT",
    options: [
      {
        label: "Sembly AI",
        route: "/",
        icon: semblyIcon,
      },
      {
        label: "Otter AI",
        route: "/",
        icon: otterIcon,
      },
      {
        label: "Krisp AI",
        route: "/",
        icon: krispIcon,
      },
      {
        label: "Airgram AI",
        route: "/",
        icon: airgramIcon,
      },
    ],
  },
  {
    label: "TRANSLATOR/ INTERPRETER_GPT",
    options: [
      {
        label: "Sembly AI",
        route: "/",
        icon: semblyIcon,
      },
      {
        label: "Otter AI",
        route: "/",
        icon: otterIcon,
      },
      {
        label: "Krisp AI",
        route: "/",
        icon: krispIcon,
      },
      {
        label: "Airgram AI",
        route: "/",
        icon: airgramIcon,
      },
    ],
  },
  {
    label: "TOOLKIT FOR KIDS",
    options: [
      {
        label: "Sembly AI",
        route: "/",
        icon: semblyIcon,
      },
      {
        label: "Otter AI",
        route: "/",
        icon: otterIcon,
      },
      {
        label: "Krisp AI",
        route: "/",
        icon: krispIcon,
      },
      {
        label: "Airgram AI",
        route: "/",
        icon: airgramIcon,
      },
    ],
  },
];

const recentSearch = ["UI Design", "word", "UI Develop", "mobile", "UI Design"];

export default function Sidebar({ className }) {
  const pathname = usePathname();
  const [template, setTemplate] = useState(true);
  // const [sidebar, setSidebar] = useState(true);
  const { sidebar, setSidebar } = useWorkspaceContext();
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3.5,
    slidesToScroll: 1,
    spaceBetween: 20,
    initialSlide: 0,
  };
  return (
    <aside
      className={cn(
        "fixed bottom-0 start-0 z-50 w-[400px] border-gray-100 rounded-[30px] dark:bg-gray-100/50  mx-4 h-full",
        className
      )}
    >
      <div className="relative flex flex-row h-full ">
        <div
          className={`${
            sidebar ? "w-[150px]" : "w-[100px]"
          } transition-width h-full  duration-500 bg-[#2B8CFF] rounded-[30px] py-10`}
        >
          <div className="flex flex-col h-full justify-between w-[100px]">
            <div className="flex flex-col h-fit gap-8 text-sm font-light justify-around">
              <button className="flex flex-col items-center text-[#aad1ff] hover:text-white">
                <FaUser className="w-8 h-8 mb-2" />
                Profile
              </button>
              <button
                // onClick={() => {
                //   setSidebar(!sidebar);
                // }}
                className="flex flex-col items-center text-white hover:text-white"
              >
                <PiBrainFill className="w-8 h-8 mb-2" />
                Learning <br /> Assets
              </button>
              <button className="flex flex-col items-center text-[#aad1ff] hover:text-white">
                <FaCloudUploadAlt className="w-8 h-8 mb-2" />
                Upload <br />
                File
              </button>
            </div>
            <div className="flex cursor-pointer flex-col py-4 w-[60px] h-[220px] bg-white mx-auto  items-center rounded-2xl">
              <Image
                src={sidebar35}
                alt={"items.label"}
                width="40"
                height="40"
                className={`h-8 w-8 bg-transparent mb-3`}
              />
              <span className="flex flex-row  text-[#2B8CFF] -rotate-90 mt-14 text-center justify-center w-max h-[20px] font-semibold">
                Try PhoenEdx Pro
              </span>
            </div>
          </div>
        </div>
        <div
          className={`${
            sidebar ? "w-[calc(100%-100px)] " : "w-[0%]"
          } overflow-hidden duration-500 absolute h-full transition-width left-[100px]  top-0 z-40 bg-gray-0/10 rounded-[30px] bg-white pb-5 pt-2  dark:bg-gray-100/5`}
        >
          <div
            className={`${
              sidebar ? "flex" : ""
            } min-w-[calc(300px)] h-full px-4 pt-2 flex-col`}
          >
            <div className="border-[#D8D8D8] border-b w-full">
              <div className="mb-4 bg-[#F4F8FC] border border-[#D8D8D8] text-[14px] text-[#9E9E9E] w-full flex justify-between rounded-3xl">
                <button
                  onClick={() => {
                    setTemplate(true);
                  }}
                  className={`
                    ${
                      template ? "bg-[#2B8CFF] text-white " : `bg-transparent`
                    } rounded-3xl w-[50%]  py-3`}
                >
                  Templates
                </button>
                <button
                  onClick={() => {
                    setTemplate(false);
                  }}
                  className={`${
                    template ? "bg-transparent" : `bg-[#2B8CFF] text-white `
                  }  rounded-3xl  w-[50%] py-3`}
                >
                  Study Toolkit
                </button>
              </div>
              <input
                className="bg-[#F4F8FC] mb-4 border-none text-[14px] text-[#9E9E9E] w-full flex justify-between rounded-3xl"
                type="text"
                placeholder="Search"
              />
              <div
                className={`${
                  sidebar ? "" : "overflow-hidden"
                }  mb-4 bg-transparent text-[11px] w-full text-[#9E9E9E] `}
              >
                <Slider {...settings}>
                  {recentSearch.map((item, index) => (
                    <div
                      key={index}
                      className={`${
                        sidebar ? "" : "overflow-hidden"
                      }  mb-4 bg-transparent text-[11px] w-full text-[#9E9E9E]   `}
                    >
                      <label className=" flex cursor-pointer items-center justify-center gap-4 bg-[#F4F8FC] mr-2 rounded-3xl p-[6px] ">
                        {item}
                      </label>
                    </div>
                  ))}
                </Slider>
              </div>

              {/* <Slider {...settings}>
                {recentSearch.map((item, index) => (
                  <div
                    className={`${
                      sidebar ? "" : "overflow-hidden"
                    }  mb-4 bg-transparent text-[11px] w-full text-[#9E9E9E]   `}
                  >
                    <label className=" flex cursor-pointer items-center justify-center gap-4 bg-[#F4F8FC] mr-2 rounded-3xl p-[6px] ">
                   {item} 
                    </label>
                  </div>
                ))}
              </Slider> */}
            </div>
            <div className="mx-auto w-full max-w-md h-full bg-white overflow-y-auto ">
              {template
                ? templates.map((item, index) => (
                    <Disclosure key={index}>
                      {({ open }) => (
                        <>
                          <Disclosure.Button
                            className={` visual_assests  ${
                              open ? "text-black active" : "text-[#9E9E9E]"
                            } rounded-2xl flex w-full justify-between mt-2 px-2 py-3 text-left  hover:text-white hover:bg-[#2b8cff] focus:outline-none focus-visible:ring-[#2B8CFF] focus-visible:ring-purple-500/75`}
                          >
                            <div className="flex items-center">
                              <div className="">{item.icon}</div>
                              <div className="flex flex-col items-start ml-3">
                                <label className=" text-[14px] mb-1">
                                  {item.label}
                                </label>
                              </div>
                            </div>
                          </Disclosure.Button>
                          <Disclosure.Panel className="px-4 pb-2  text-sm text-gray-500">
                            {item.options.map((option, index2) => (
                              <button
                                key={index2}
                                className="flex w-full rounded-2xl justify-between mt-2 px-2 py-3 text-left text-[#9E9E9E]  focus:outline-none hover:text-white hover:bg-[#2B8CFF] focus-visible:ring focus-visible:ring-purple-500/75"
                              >
                                <Link href={option.route}>
                                <div className="flex items-center ">
                                  <div>{option.icon}</div>
                                  <div className="flex flex-col items-start ml-6">
                                    
                                    <label className="text-[14px]">
                                      {option.label}
                                    </label>
                                  </div>
                                </div>
                                </Link>
                                
                              </button>
                            ))}

                            {/* <button className="flex w-full rounded-2xl justify-between mt-2 px-2 py-3 text-left text-[#9E9E9E]  focus:outline-none hover:text-white hover:bg-[#2B8CFF] focus-visible:ring focus-visible:ring-purple-500/75">
                          <div className="flex items-center ">
                            <Image
                            src={items.icon}
                            alt={items.label}
                            width="40"
                            height="40"
                            className={`h-6 w-6 `}
                          />
                            <div className="flex flex-col items-start ml-6">
                              <label className="text-[16px]">Options2</label>
                            </div>
                          </div>
                        </button> */}
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  ))
                : studyToolkit.map((item, index) => (
                    <Disclosure key={index}>
                      {({ open }) => (
                        <>
                          <Disclosure.Button
                            className={` visual_assests  ${
                              open ? "text-black active" : "text-[#9E9E9E]"
                            } rounded-2xl flex w-full justify-between mt-2 px-2 py-3 text-left  hover:text-white hover:bg-[#2b8cff] focus:outline-none focus-visible:ring-[#2B8CFF] focus-visible:ring-purple-500/75`}
                          >
                            <div className="flex items-start">
                              <div className="flex flex-col items-start ">
                                <label className=" text-[14px] mb-1">
                                  {item.label}
                                </label>
                              </div>
                            </div>
                            <ChevronUpIcon
                              className={`${
                                open ? "" : "rotate-180"
                              } h-5 w-5 transform transition duration-300 `}
                            />
                          </Disclosure.Button>
                          <Disclosure.Panel className="px-2 pb-2 flex flex-wrap text-sm text-gray-500">
                            {item.options.map((option, index2) => (
                              <button
                                key={index2}
                                className="block bg-[#F4F8FC] rounded-xl justify-between mt-2 ml-2 p-2 text-[#9E9E9E]  focus:outline-none hover:text-white hover:bg-[#2B8CFF] focus-visible:ring focus-visible:ring-purple-500/75"
                              >
                                <div className="flex flex-col justify-center items-center m-auto h-14 w-14  ">
                                  <Image
                                    src={option.icon}
                                    alt={option.label}
                                    width="40"
                                    height="40"
                                    className={`h-[40px] w-[40px] `}
                                  />
                                  <label className="text-[10px]">
                                    {option.label}
                                  </label>
                                </div>
                              </button>
                            ))}
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  ))}
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}