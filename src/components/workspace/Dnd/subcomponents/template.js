import IC2 from "../../../../assets/workspace/ic2.png";
import Image from "next/image";
import icon from "../../../../assets/workspace/icon.png";
import icon1 from "../../../../assets/workspace/icon1.png";
import Frame from "../../../../assets/workspace/frame.png";
import Frame1 from "../../../../assets/workspace/frame1.png";

import Frame2 from "../../../../assets/workspace/frame2.png";

import Frame3 from "../../../../assets/workspace/frame3.png";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useState } from "react";

function Template({ droppedItems, setDroppedItems }) {
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: "DRAG_ITEM",
    drop: (item) => {
      setDroppedItems((prevItems) => {
        // Check if the item already exists in droppedItems
        if (!prevItems.includes(item.name)) {
          // If not, add it to the array
          return [...prevItems, item.name];
        }
        // If it exists, return the array unchanged
        return prevItems;
      });
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
    }),
  });
  const isActive = canDrop && isOver;

  const AllShapes = [
    { Icon: Frame },
    { Icon: Frame3 },
    { Icon: Frame2 },
    { Icon: Frame1 },
  ];
  return (
    <div className=" grid grid-cols-12 rounded-2xl">
      <div className="flex col-span-6 bg-[#2B8CFF] py-2  items-center  justify-center  rounded-2xl ">
        <div className=" w-[25px]     rounded-full flex justify-center items-center">
          <Image src={icon} objectFit="contain" alt="" />
        </div>
        <button className="text-white font-normal  ml-2 text-[14px] font-medium">
          Frames
        </button>
      </div>
      <div className="flex py-2 items-center bg-[#F4F8FC]  col-span-6 justify-center border border-[#2B8CFF] rounded-2xl ">
        <div className=" w-[25px] rounded-full flex justify-center items-center">
          <Image src={icon1} objectFit="contain" alt="" />
        </div>
        <button className="text-[#666666]  ml-2 text-[14px] font-medium">
          Grids
        </button>
      </div>
      {AllShapes.map((v, i) => (
        <div
          className="col-span-6 m-2 p-4 border  border-[#D8D8D8] rounded-md mt-4"
          key={i}
        >
          <div
            ref={(node) => drop(node)}
            style={{ opacity: isDragging ? 0 : 1 }}
          >
            <div
              ref={(node) => drag(node)}
              style={{
                opacity: isDragging ? 0.5 : 1,
                cursor: "move",
                padding: "3px",
                margin: "2px",
              }}
              className=""
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <Image className=" w-full" src={v.Icon} alt="" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Template;
