"use client";
import React from "react";
import Back from "../../../../assets/workspace/back.png";
import delete1 from "../../../../assets/workspace/delete.png";
import { HTML5Backend } from "react-dnd-html5-backend";

import Image from "next/legacy/image";
import move from "../../../../assets/workspace/move.png";
import main from "../../../../assets/workspace/main.png";
import main2 from "../../../../assets/workspace/main2.png";
import main3 from "../../../../assets/workspace/main3.png";
import icon1 from "../../../../assets/workspace/icon1.png";
import icon2 from "../../../../assets/workspace/icon2.png";
import download from "../../../../assets/workspace/download.png";
import play from "../../../../assets/workspace/play.png";
import IC1 from "../../../../assets/workspace/ic1.png";
import IC2 from "../../../../assets/workspace/ic2.png";
import Accordion from "../Accordion";
import bubble from "../../../../assets/workspace/bubble.png";
import text from "../../../../assets/workspace/text.png";
import Template from "../subcomponents/template";
import Bubbles from "../subcomponents/bubbles";
import Graphics from "../subcomponents/graphics";
import Text from "../subcomponents/text";
import { useState } from "react";
import icon3 from "../../../../assets/workspace/icon3.png";
import graphic from "../../../../assets/workspace/graphic.png";
import { DndProvider, useDrag, useDragDropManager, useDrop } from "react-dnd";
import { useStartTyping } from "react-use";
import Draggable from "react-draggable";
import bubb from "../../../../assets/workspace/bubb.png";
import { IoChatbubbleSharp, IoChatbubblesOutline } from "react-icons/io5";
import { TbTemplate } from "react-icons/tb";
import { MdTextFields } from "react-icons/md";
import { SlBubbles } from "react-icons/sl";
import Element from "../../../../assets/workspace/Element.png";
import { MdOutlineGraphicEq } from "react-icons/md";
import Link from "next/link";

function EditorComponent() {
  const [droppedItems, setDroppeditems] = useState([]);

  // const [, drop] = useDrop({
  //   accept: `${"ITEM"}`,
  //   hover(item) {
  //     // const dragIndex = item.index;
  //     // if (dragIndex === index) {
  //     //   return;
  //     // }
  //     moveSubMenu(item);
  //   },
  //   drop(item, monitor) {
  //     // const dragIndex = item.index;
  //     // if (dragIndex === index) {
  //     //   return;
  //     // }
  //     moveSubMenu(item);
  //   },
  // });

  const moveSubMenu = (data) => {
    console.log(data, "ko");
  };

  // const [container1Cards, setContainer1Cards] = useState([
  //   { id: 1, text: "Card 1" },
  //   { id: 2, text: "Card 2" },
  //   { id: 3, text: "Card 3" },
  // ]);
  const [container2Cards, setContainer2Cards] = useState([]);

  const handleDrop = (data) => {
    // const cardIndex = container1Cards.findIndex((card) => card.id === id);
    // if (cardIndex !== -1) {
    // const draggedCard = container1Cards[cardIndex];
    // setContainer1Cards((prevCards) =>
    //   prevCards.filter((card) => card.id !== id)
    // );
    setContainer2Cards((prevCards) => [
      ...prevCards,
      { ...data, position: { x: 0, y: 0 } },
    ]);
    // }
  };

  const [{ canDrop, isOver }, drop] = useDrop({
    accept: "Shape",
    drop: (item) => handleDrop(item),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  const sectionContent = [
    {
      title: "Text",
      icon: <MdTextFields size={24} />,
      content: <Text onDrop={handleDrop} />,
    },
    {
      title: "Template",
      icon: <TbTemplate size={24} />,
      content: <Template onDrop={handleDrop} />,
    },
    {
      title: "Bubbles",
      icon: <SlBubbles size={24} />,
      content: <Bubbles onDrop={handleDrop} />,
    },
    {
      title: "Graphic",
      icon: <IoChatbubblesOutline size={24} />,
      content: <Graphics onDrop={handleDrop} />,
    },
  ];
  graphic;

  console.log("container cards==>", container2Cards);

  const handleDrag = (index, newPosition) => {
    setItems((prevItems) =>
      prevItems.map((item, i) =>
        i === index ? { ...item, position: newPosition } : item
      )
    );
  };
  return (
    <div className="bg-white h-full w-full flex flex-col">
      <div className="w-full p-4  border-b border-[#D8D8D8] flex items-center justify-between">
        <div className="flex items-center">
          <div className="relative w-[40px]">
            <Image src={Back} objectFit="contain" alt="" />
          </div>
          <h2 className="text-[#333333] ml-4 font-bold text-[28px]">
            Elevate Storytelling
          </h2>
        </div>
        <Link
          className="bg-[#2B8CFF] text-center py-2  rounded-3xl text-white"
          href={"format"}
        >
          <div className=" w-[200px]"> Continue</div>
        </Link>
      </div>

      {/* <DndProvider backend={HTML5Backend}> */}
      <div className="flex gap-2 h-full  bg-white m-3 ">
        <div className="min-w-[300px] p-4 h-full  bg-[#F4F8FC] rounded-xl flex flex-col  overflow-y-scroll">
          <p className="text-[#666666] text-[16px] border-b pb-2 font-medium border-[#D8D8D8]">
            Pages
          </p>

          <div className="flex py-4  justify-center border border-[#2B8CFF] rounded-xl mt-4">
            <div className="bg-[#2B8CFF] w-[20px] h-[20px] rounded-full flex justify-center items-center">
              <span className="text-[20px] text-white">+</span>
            </div>
            <button className="text-[#2B8CFF] ml-2 text-[14px] font-medium">
              New Page
            </button>
          </div>

          <div className=" h-full">
            <div className="bg-white mt-3">
              <div className="bg-white flex justify-between p-2">
                <div className="relative flex items-center justify-center cursor-pointer">
                  <div className="flex items-center justify-center w-full">
                    <div className="relative w-[25px] h-[17px] cursor-pointer">
                      <Image src={move} objectFit="contain" alt="" />
                    </div>

                    <p className="text-[#333333] font-semibold ml-2 text-[16px]">
                      Page 1
                    </p>
                  </div>
                </div>
                <div className="relative w-[25px]  cursor-pointer">
                  <Image src={delete1} objectFit="contain" alt="" />
                </div>
              </div>

              <div className="px-4 mt-3 pt-1">
                <Image src={main} alt="" />
              </div>

              <div className="grid grid-cols-12 gap-1 px-4 py-1">
                <div className="col-span-6">
                  <Image src={main3} alt="" />
                </div>

                <div className="col-span-6">
                  <Image src={main2} alt="" />
                </div>
              </div>
            </div>
            <div className="bg-white mt-3">
              <div className="bg-white flex justify-between p-2">
                <div className="relative flex items-center justify-center cursor-pointer">
                  <div className="flex items-center justify-center w-full">
                    <div className="relative w-[25px] h-[17px] cursor-pointer">
                      <Image src={move} objectFit="contain" alt="" />
                    </div>

                    <p className="text-[#333333] font-semibold ml-2 text-[16px]">
                      Page 1
                    </p>
                  </div>
                </div>
                <div className="relative w-[25px]  cursor-pointer">
                  <Image src={delete1} objectFit="contain" alt="" />
                </div>
              </div>

              <div className="px-4 mt-3 pt-1">
                <Image src={main} alt="" />
              </div>

              <div className="grid grid-cols-12 gap-1 px-4 py-1">
                <div className="col-span-6">
                  <Image src={main3} alt="" />
                </div>

                <div className="col-span-6">
                  <Image src={main2} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full p-4 rounded-md bg-[#F4F8FC] border-b border-[#F4F8FC] flex flex-col overflow-y-scroll h-full">
          <div className=" flex justify-between px-2">
            <div className="relative flex items-center justify-center cursor-pointer">
              <div className="flex items-center justify-center w-full">
                <p className="text-[#333333] font-semibold ml-2 text-[16px]">
                  Page 1
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex bg-white p-2 gap-4 rounded-md">
                <div className="relative w-[20px]  cursor-pointer">
                  <Image src={icon1} objectFit="contain" alt="" />
                </div>

                <div className="relative w-[20px]  cursor-pointer">
                  <Image src={icon2} objectFit="contain" alt="" />
                </div>
              </div>
              <div class="h-8 border-l text-[#D8D8D8] "></div>

              <div className="flex bg-white gap-4  p-2  rounded-md">
                <div className="relative w-[20px]  cursor-pointer">
                  <Image src={download} objectFit="contain" alt="" />
                </div>
                <div className="relative w-[20px]  cursor-pointer">
                  <Image src={play} objectFit="contain" alt="" />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white mt-3 py-2  rounded-2xl overflow-y-scroll">
            <div
              ref={(node) => drop(node)}
              // style={{ opacity: isDragging ? 0 : 1 }}
            >
              <div className="relative h-full w-full">
                <div className="absolute z-10 w-full h-full">
                  {container2Cards.map((item, index) => (
                    <Draggable
                      key={index}
                      bounds="parent"
                      position={item?.position}
                      onStop={(e, data) =>
                        handleDrag(index, { x: data.x, y: data.y })
                      }
                    >
                      <Image
                        src={item.Icon}
                        width={100}
                        height={100}
                        objectFit="contain"
                        alt=""
                      />
                    </Draggable>
                  ))}
                </div>
                <div className="px-4  pt-1 ">
                  <Image src={main} alt="" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-12 gap-1 px-4 py-1 ">
              <div className="col-span-6">
                <Image src={main3} alt="" />
              </div>

              <div className="col-span-6">
                <Image src={main2} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="min-w-[400px] p-4 rounded-md  bg-[#F4F8FC] border-b border-[#F4F8FC]">
          <div className=" ">
            <div className=" grid grid-cols-12 bg-white rounded-2xl">
              <div className="flex col-span-6 py-4  items-center  justify-center bg-white rounded-2xl ">
                <div className=" w-[25px]  rounded-full flex justify-center items-center">
                  <Image src={IC2} objectFit="contain" alt="" />
                </div>
                <button className="text-[#666666] ml-2 text-[14px] font-medium">
                  Panels
                </button>
              </div>
              <div className="flex py-4 items-center col-span-6 bg-[#2B8CFF] justify-center border border-[#2B8CFF] rounded-2xl ">
                <div className=" w-[25px] rounded-full flex justify-center items-center">
                  <Image src={Element} objectFit="contain" />
                </div>
                <button className="text-[#FFFFFF]  ml-2 text-[14px] font-medium">
                  Elements
                </button>
              </div>
            </div>
          </div>

          {sectionContent.map((v, i) => (
            <Accordion
              key={i}
              section={v}
              setDroppeditems={setDroppeditems}
              droppedItems={droppedItems}
              index={i}
            />
          ))}
        </div>
      </div>
      {/* </DndProvider> */}
    </div>
  );
}

export default EditorComponent;
