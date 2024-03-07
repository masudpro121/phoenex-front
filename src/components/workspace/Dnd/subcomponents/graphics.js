import gp1 from "../../../../assets/workspace/gp1.png";
import gp2 from "../../../../assets/workspace/gp2.png";
import gp3 from "../../../../assets/workspace/gp3.png";
import icon from "../../../../assets/workspace/icon.png";
import Image from "next/image";
import icon1 from "../../../../assets/workspace/icon1.png";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { useState } from "react";

function Graphics({ droppedItems, setDroppedItems }) {
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
    { Icon: gp1 },
    { Icon: gp2 },
    { Icon: gp3 },
    { Icon: gp3 },
  ];
  return (
    <div ref={(node) => drop(node)} style={{ opacity: isDragging ? 0 : 1 }}>
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
        <div className=" grid grid-cols-12 rounded-2xl mt-2">
          {AllShapes.map((v, i) => (
            <div
              className="col-span-6 m-2 p-4 border  border-[#D8D8D8] rounded-md "
              key={i}
            >
              <Image className=" w-full" src={v.Icon} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Graphics;
