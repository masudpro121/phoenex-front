import { useLayoutEffect, useEffect, useRef } from "react";
import { Handle, NodeProps, Position } from "reactflow";

import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
// import useStore from "../store";

import DragIcon from "./DragIcon";
import { IoMdAddCircle } from "react-icons/io";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { MdDragIndicator } from "react-icons/md";

function MindMapNode({ id, data }) {
  // const inputRef = useRef(null);
  // const updateNodeLabel = useStore((state) => state.updateNodeLabel);

  // useEffect(() => {
  //   setTimeout(() => {
  //     inputRef.current?.focus({ preventScroll: true });
  //   }, 1);
  // }, []);

  // useLayoutEffect(() => {
  //   if (inputRef.current) {
  //     inputRef.current.style.width = `${data.label.length * 8}px`;
  //   }
  // }, [data.label.length]);
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <>
      <div className="flex items-center w-fit pl-1 rounded-md bg-white shadow-lg relative h-[30px] p-0">
        <button className="dragHandle">
          <MdDragIndicator />
        </button>
        <div className="flex items-center p-2">
          {data.nodeType == "topic" && (
            <button className="mr-1">{data.icon}</button>
          )}
          <input
            value={data.label}
            onChange={(evt) => {
              // updateNodeLabel(id, evt.target.value)
            }}
            // ref={inputRef}
            className="w-[150px] outline-none border-none focus:outline-none focus:border-none !text-[10px] h-[30px] p-0 py-1"
          />
          <button>
            <IoMdAddCircle color="#2b8cff" />
          </button>
          {/* <button>
            <BiDotsHorizontalRounded />
          </button> */}
          <Menu as="div" className="relative text-[14px] text-left">
            <div>
              <Menu.Button
                className={` justify-center items-center shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50`}
              >
                <BiDotsHorizontalRounded />
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
                className={`absolute right-0 w-24 flex flex-nowrap z-[1000] mt-2  origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
              >
                <div className=" w-full gap-2 flex flex-col p-2 ">
                  {data.option?.map((item,index)=>(
                    <Menu.Item key={index}>
                    {({ active }) => (
                      <div className="cursor-pointer w-full  text-[8px] flex items-center text-[#666666]">
                        <div
                          // onClick={j.onclick}
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            " cursor-pointer flex gap-1  w-full items-center "
                          )}
                        > <label className="cursor-pointer">{item.icon}</label>
                          <label className="cursor-pointer w-full items-center "> {item.label}</label>
                        </div>
                      </div>
                    )}
                  </Menu.Item>
                  ))}
                  
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
          <Handle type="source" position={Position.Right} />
          <Handle type="target" position={Position.Left} />
        </div>
      </div>
    </>
  );
}

export default MindMapNode;
