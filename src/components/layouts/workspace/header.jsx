"use client";

import cn from "../../../utils/class-names";
import { useIsMounted } from "../../../hooks/use-is-mounted";
import { useWindowScroll } from "../../../hooks/use-window-scroll";
import { Fragment, useRef, useState } from "react";
import { Menu, Transition } from "@headlessui/react";

import Image from "next/legacy/image";
import profile2 from "../../../assets/header/profile2.png";
import profile from "../../../assets/header/profile.png";
import cloud from "../../../assets/icon/cloud.png";
import icon from "../../../assets/icon/burger-menu.png";
import forwardIcon from "../../../assets/icon/forward.png";
import backwordIcon from "../../../assets/icon/backward.png";
import printIcon from "../../../assets/icon/printicon.png";
import shareIcon from "../../../assets/icon/shareicon.png";
import { FaBell, FaPlus, FaCheck } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { WorkspaceContext, useWorkspaceContext } from "../../../context/workspaceProvider";

import readIcon from "../../../assets/icon/read.svg";
import quizIcon from "../../../assets/icon/quiz.svg";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const notification = [
  {
    head: "Time for a quiz!",
    desc: "Enter “Blockchain” quiz",
    time: "10:23AM",
    icon: readIcon,
  },
  {
    head: "Study 2nd after 20 minutes",
    desc: "Review “Blockchain” WikitText",
    time: "10:23AM",
    icon: quizIcon,
  },
  {
    head: "Study 3rd at 09:30 AM",
    desc: "Review “Blockchain” WikitText",
    time: "6:30AM",

    icon: quizIcon,
  },
  {
    head: "Time for a quiz!",
    desc: "Enter “Blockchain” quiz",
    time: "10:23AM",
    icon: readIcon,
  },
  {
    head: "Time for a quiz!",
    desc: "Enter “Blockchain” quiz",
    time: "10:23AM",
    icon: readIcon,
  },
  {
    head: "Study 2nd after 20 minutes",
    desc: "Review “Blockchain” WikitText",
    time: "10:23AM",
    icon: quizIcon,
  },
];
export function Dropdown({ label, options, icon, bg, style, auto }) {
  const { nextRoute } = useWorkspaceContext();
  const router = useRouter();
  return (
    <Menu as="div" className="relative text-[16px] text-left">
      <div>
        <Menu.Button
          className={`w-full flex items-center  justify-between  px-4 py-3 text-[16px] bg-${bg} rounded-full  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50`}
        >
          {label}
          {/* <ChevronDownIcon
                className="-mr-1 h-5 w-5 text-gray-400"
                aria-hidden="true"
              /> */}
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
        <Menu.Items
          className={` ${style} absolute right-0 flex flex-nowrap z-[1000] mt-2  origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
        >
          {({ active }) => (
            <div className="py-1">
              {auto
                ? options.map((j, index) => (
                    // <Menu.Item key={index}>
                    <a
                      key={index}
                      onClick={j.onclick}
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block cursor-pointer px-4 py-2 text-sm"
                      )}
                    >
                      {j.label}
                    </a>
                    // </Menu.Item>
                  ))
                : options.map((j, index) => (
                    <Menu.Item key={index}>
                      <a
                        key={index}
                        onClick={j.onclick}
                        className={classNames(
                          active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                          "block cursor-pointer px-4 py-2 text-sm"
                        )}
                      >
                        {j.label}
                      </a>
                    </Menu.Item>
                  ))}
            </div>
          )}
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default function Header() {
  const isMounted = useIsMounted();
  const windowScroll = useWindowScroll();

  const {
    whiteBoard,
    setWhiteBoard,
    notesBoard,
    setNotesBoard,
    instantEvaluation,
    setInstantEvaluation,
    evaluationMatrix,
    setEvaluationMatrix,
    chats,
    setChats,
    sidebar,
    setSidebar,
    namespace,
    setNamespace,
  } = useWorkspaceContext();

  const inputRef = useRef();

  const [file, setFile] = useState(null);

  const handleChooseFile = () => {
    inputRef.current.click();
  };
  function loadPdf(f) {
    const form = new FormData();
    form.append("file", f);
    fetch("/api/store-pdf-to-vectordb", {
      method: "POST",
      body: form,
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res, "result");
        localStorage.setItem("book-namespace", JSON.stringify(res.namespace));
        setNamespace(res.namespace);
        setFile(null);
      });
  }
  const changeHandler = async (e) => {
    setFile(e.target.files[0]);
    loadPdf(e.target.files[0]);
  };
  const router = useRouter();
  const { nextRoute } = useWorkspaceContext();

  return (
    <header
      className={cn(
        "sticky top-4 z-[1000] flex items-center  mx-4 my-4 rounded-[25px] backdrop-blur-xl md:px-5 lg:px-6 2xl:py-5 3xl:px-8 4xl:px-10 bg-white min-h-16 ",
        (isMounted && windowScroll.y) > 2 ? "card-shadow" : ""
      )}
    >
      <div className="flex items-center w-full justify-between">
        <button
          onClick={() => {
            setSidebar((prev) => !prev);
          }}
          className="block pr-4 "
        >
          <Image src={icon} alt="icon" width="30" height="30" />
        </button>
        <div className="flex justify-around items-center h-8 w-[20%]">
          <Dropdown label={"Home"} options={[]} />
          <Dropdown
            label={"File"}
            options={[
              {
                label: "option1",
                route: "/",
              },
              {
                label: "option1",
                route: "/",
              },
            ]}
          />
          <Dropdown
            label={"Workspace"}
            style={"w-48 left-0"}
            auto="true"
            options={[
              // {
              //   label: whiteBoard ? (
              //     <>
              //       <div className="flex gap-2 items-center">
              //         <FaCheck /> <p>White Board</p>
              //       </div>
              //     </>
              //   ) : (
              //     <label className="ml-5">White Board</label>
              //   ),
              //   route: "/",
              //   onclick: () => {
              //     setWhiteBoard((prev) => !prev);
              //   },
              // },
              {
                label: notesBoard ? (
                  <>
                    <div className="flex gap-2 items-center">
                      <FaCheck /> <p>Notes Board</p>
                    </div>
                  </>
                ) : (
                  <label className="ml-5">Notes Board</label>
                ),
                route: "/",
                onclick: () => setNotesBoard((prev) => !prev),
              },
              {
                label: instantEvaluation ? (
                  <>
                    <div className="flex gap-2 items-center">
                      <FaCheck /> <p>Instant Evaluation</p>
                    </div>
                  </>
                ) : (
                  <label className="ml-5">Instant Evaluation</label>
                ),
                route: "/",
                onclick: () => setInstantEvaluation((prev) => !prev),
              },
              {
                label: evaluationMatrix ? (
                  <>
                    <div className="flex gap-2 items-center">
                      <FaCheck /> <p>Evaluation Matrix</p>
                    </div>
                  </>
                ) : (
                  <label className="ml-5">Evaluation Matrix</label>
                ),
                route: "/",
                onclick: () => setEvaluationMatrix((prev) => !prev),
              },
              {
                label: chats ? (
                  <>
                    <div className="flex gap-2 items-center">
                      <FaCheck /> <p>Chats</p>
                    </div>
                  </>
                ) : (
                  <label className="ml-5">Chats</label>
                ),
                route: "/",
                onclick: () => setChats((prev) => !prev),
              },
            ]}
          />
        </div>
        <div className="h-10 border-[#D8D8D8] border-r-[2px] rounded-ss rounded-es rounded-ee rounded-se " />
        <div
          className="flex items-center justify-around w-[20%] cursor-pointer"
          onClick={handleChooseFile}
        >
          <button className="bg-[#F4F8FC] text-[16px] rounded-3xl py-3 px-3 max-w-[250px] whitespace-nowrap truncate">
            {file ? file.name : "No File Choosen"}
          </button>
          <Image src={cloud} alt="cloud" width={30} height={20} />
          <input
            type="file"
            onChange={changeHandler}
            ref={inputRef}
            className="hidden"
            accept=".pdf"
          />
        </div>
        <div className="h-10 border-[#D8D8D8] border-r-[2px] rounded-ss rounded-es rounded-ee rounded-se " />
        <div className="flex items-center justify-between w-[20%]">
          <div className="flex items-center  justify-around w-[30%]">
         
            <button onClick={() => router.back()} className="cursor-pointer">
              <Image src={backwordIcon} alt="backwordIcon" width={30} height={20} />
            </button>
            {nextRoute == null ? (
              <></>
            ) : (
              <button onClick={() => router.push(nextRoute)} className="cursor-pointer">
                <Image src={forwardIcon} alt="forwardIcon" width={30} height={20} />
              </button>
            )}
          </div>
          {/* <button className="relative flex bg-[#F4F8FC] rounded-full  h-[40px] w-[40px] items-center justify-center">
            <span className="absolute rounded-full mt-[-14px] ml-[-10px] border-[1px] border-white bg-[#2B8CFF] text-xs h-[16px] w-[16px] flex items-center justify-center text-white">
              2
            </span>
            <FaBell color="#2B8CFF" fontSize={25} />
          </button> */}
          <Menu as="div" className="relative text-[16px] text-left">
            <div>
              <Menu.Button
                className={`relative flex bg-[#F4F8FC] rounded-full  h-[40px] w-[40px] items-center justify-center shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50`}
              >
                <span className="absolute rounded-full mt-[-14px] ml-[-10px] border-[1px] border-white bg-[#2B8CFF] text-xs h-[16px] w-[16px] flex items-center justify-center text-white">
                  2
                </span>
                <FaBell color="#2B8CFF" fontSize={25} />
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
              <Menu.Items
                className={`absolute right-0 w-64 flex flex-nowrap z-[1000] mt-2  origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
              >
                <div className=" w-full flex flex-col p-3 ">
                  <div className="  items-center flex justify-between mb-3 ">
                    <h4 className=" text-[14px] font-semibold text-[#2B8CFF]">Today</h4>
                    <label className=" cursor-pointer text-[10px] text-[#9E9E9E]">
                      Mark as all read
                    </label>
                  </div>
                  {notification.map((j, index) => (
                    <Menu.Item key={index}>
                      {({ active }) => (
                        <div className="cursor-pointer w-full flex items-center text-[#666666] pb-2 mb-2 border-b border-[#9E9E9E]">
                          <Image src={j.icon} alt={j.label} className=" w-8 h-8 mr-2" />
                          <div
                            onClick={j.onclick}
                            className={classNames(
                              active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                              "cursor-pointer text-sm flex flex-col w-full"
                            )}
                          >
                            <label className="text-[12px] cursor-pointer">{j.head}</label>
                            <div className="flex leading-[0.6rem] text-[9px] w-full justify-between text-[#9E9E9E]">
                              <label className="cursor-pointer">{j.desc}</label>
                              <label className="cursor-pointer text-[8px] text-black">
                                {j.time}
                              </label>
                            </div>
                          </div>
                        </div>
                      )}
                    </Menu.Item>
                  ))}
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
        <div className="h-10 border-[#D8D8D8] border-r-[2px] rounded-ss rounded-es rounded-ee rounded-se " />
        <div className="flex items-center justify-around w-[10%]">
          <div className="flex">
            <Image src={profile} alt="profile" width={40} height={40} />
            <Image alt="profile2" className="ml-[-8px]" src={profile2} width={40} height={40} />
            <button className="ml-[-8px] flex bg-[#2B8CFF] rounded-full  h-[40px] w-[40px] items-center justify-center">
              <FaPlus color="white" />
            </button>
          </div>
        </div>
        <div className="h-10 border-[#D8D8D8] border-r-[2px] rounded-ss rounded-es rounded-ee rounded-se " />
        <div className="flex items-center justify-around w-[20%]">
          <Dropdown
            icon={shareIcon}
            bg={"[#F4F8FC]"}
            label={"Print Assets"}
            options={[
              {
                label: "option1",
                route: "/",
              },
              {
                label: "option1",
                route: "/",
              },
            ]}
          />
          <Dropdown
            icon={printIcon}
            bg={"[#F4F8FC]"}
            label={"Share"}
            options={[
              {
                label: "option1",
                route: "/",
              },
              {
                label: "option1",
                route: "/",
              },
            ]}
          />
        </div>
      </div>
    </header>
  );
}
