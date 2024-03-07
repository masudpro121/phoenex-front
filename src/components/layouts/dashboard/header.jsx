"use client";

import cn from "../../../utils/class-names";
import { useIsMounted } from "../../../hooks/use-is-mounted";
import { useWindowScroll } from "../../../hooks/use-window-scroll";

import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { ChevronRightIcon } from "@heroicons/react/20/solid";

import Image from "next/legacy/image";
import dp from "../../../assets/header/dp.png";
import bg from "../../../assets/header/bg.png";
import icon from "../../../assets/icon/burger-menu.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { useWorkspaceContext } from "../../../context/workspaceProvider";
const navData = [
  {
    label: "PhoenEdX",
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
    label: "Education",
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
    label: "Business",
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
    label: "A.I. Library",
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
    label: "Marketplace",
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
    label: "Community & Workshops",
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
    label: "Research Labs",
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
    label: "Roadmap",
    data: [
      {
        label: "option 10",
        route: "/",
      },
      {
        label: "option 11",
        route: "/",
      },
    ],
  },
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export default function Header() {
  const isMounted = useIsMounted();
  const windowScroll = useWindowScroll();
  const { sidebar, setSidebar } = useWorkspaceContext();

  return (
    <header
      className={cn(
        "sticky top-0 z-[1000] flex items-center bg-[#f4f8fc]  ",
        (isMounted && windowScroll.y) > 2 ? "card-shadow" : ""
      )}
    >
      <div className="h-full w-full flex flex-row bg-white  mx-4 mt-4 backdrop-blur-xl md:px-5 lg:px-6 2xl:py-5 3xl:px-8 4xl:px-10 rounded-[25px]   min-h-16">
        <div className="flex items-center w-full ">
          <button
            onClick={() => {
              setSidebar((prev) => !prev);
            }}
            className="block pr-4 "
          >
            <Image src={icon} alt={"dash"} width="30" height="30" />
          </button>
          <div className=" block px-4">
            <Image src={bg} alt={"icon"} width="40" height="40" />
          </div>
          <div className="hidden justify-around lg:w-[80%] w-[80%] lg:flex md:hidden">
            {navData.map((i, index) => (
              <Menu
                key={index}
                as="div"
                className="relative inline-block text-left"
              >
                {({ open }) => (
                  <>
                    <div>
                      <Menu.Button className="inline-flex w-full items-center justify-center gap-x-1.5 rounded-md bg-white px-1 text-[14px]  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                        {i.label}
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
                      <Menu.Items className="absolute right-0 z-[1000] mt-2 w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="py-1">
                          {i.data.map((j, flass) => (
                            <Menu.Item key={flass}>
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
                                  {j.label}
                                </a>
                              )}
                            </Menu.Item>
                          ))}
                        </div>
                      </Menu.Items>
                    </Transition>
                  </>
                )}
              </Menu>
            ))}
          </div>
          <Menu as="div" className="relative md:hidden block text-left ml-auto">
            <div>
              <Menu.Button className="inline-flex w-full items-center justify-center gap-x-1.5 rounded-md bg-white px-4 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                <GiHamburgerMenu fontSize={30} />
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
              <Menu.Items className="absolute right-0 z-[1000] w-[200px] origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <div className="flex flex-col justify-between items-start">
                    {navData.map((i, index) => (
                      <Menu.Item key={index}>
                        <Menu
                          as="div"
                          className="relative inline-block text-left"
                        >
                          <div>
                            <Menu.Button className="inline-flex w-full items-center justify-center gap-x-1.5 rounded-md bg-white px-1 text-sm  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                              {i.label}
                              <ChevronRightIcon
                                className="-mr-1 h-5 w-5 text-gray-400"
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
                            <Menu.Items className="absolute right-0 z-[1000] mt-2 w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                              <div className="py-1">
                                {i.data.map((j, index2) => (
                                  <Menu.Item key={index2}>
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
                                        {j.label}
                                      </a>
                                    )}
                                  </Menu.Item>
                                ))}

                                {/* <form method="POST" action="#">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        type="submit"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block w-full px-4 py-2 text-left text-sm"
                        )}
                      >
                        Sign out
                      </button>
                    )}
                  </Menu.Item>
                </form> */}
                              </div>
                            </Menu.Items>
                          </Transition>
                        </Menu>
                      </Menu.Item>
                    ))}
                  </div>

                  {/* {({ active }) => (
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
                    )} */}

                  {/* <form method="POST" action="#">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        type="submit"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block w-full px-4 py-2 text-left text-sm"
                        )}
                      >
                        Sign out
                      </button>
                    )}
                  </Menu.Item>
                </form> */}
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
          <Menu as="div" className="relative block text-left ml-auto">
            {({ open }) => (
              <>
                <div>
                  <Menu.Button className="inline-flex w-full items-center justify-center gap-x-1.5 rounded-md bg-white px-4 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                    <Image alt={"dp"} src={dp} width="30" height="30" />
                    Shayan
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
                  <Menu.Items className="absolute right-0 z-[1000] w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
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
                      {/* <form method="POST" action="#">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        type="submit"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block w-full px-4 py-2 text-left text-sm"
                        )}
                      >
                        Sign out
                      </button>
                    )}
                  </Menu.Item>
                </form> */}
                    </div>
                  </Menu.Items>
                </Transition>
              </>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}
