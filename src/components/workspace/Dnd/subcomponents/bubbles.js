import { useState } from "react";
import { useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import Image from "next/image";
import bb1 from "../../../../assets/workspace/bb1.png";
import bb2 from "../../../../assets/workspace/bb2.png";
import bb3 from "../../../../assets/workspace/bb3.png";
import bb4 from "../../../../assets/workspace/bb4.png";


function Bubbles({ onDrop }) {
  const [items, setItems] = useState([]);

  const AllShapes = [
    { id: 1, Icon: bb1 },
    { id: 2, Icon: bb2 },
    { id: 3, Icon: bb3 },
    { id: 4, Icon: bb4 },
  ];

  const [{ canDrop, isOver }, drop] = useDrop({
    accept: "Shape",
    drop: (item) => onDrop(item.id),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  return (
    // <DndProvider backend={HTML5Backend}>
    <div className="grid grid-cols-12 rounded-2xl" ref={drop}>
      {AllShapes.map((v, i) => (
        <DraggableItem key={v.id} id={v.id} Icon={v.Icon} />
      ))}
    </div>

    // </DndProvider>
  );
}

// const DraggableItem = ({ id, Icon }) => {
//   const [{ isDragging }, drag] = useDrag(() => ({
//     type: "ITEM",
//     item: { id, Icon },
//     collect: (monitor) => ({
//       isDragging: !!monitor.isDragging(),
//     }),
//   }));

//   // Log the value of isDragging and item information to the console
//   console.log("isDragging:", isDragging);
//   console.log("Item:", { id, Icon });

//   return (
//     <div
//       ref={drag}
//       className="col-span-6 m-2 p-4 border border-[#D8D8D8] rounded-md mt-4"
//     >
//       <Image className="w-full" src={Icon} />
//     </div>
//   );
// };

const DraggableItem = ({ id, Icon }) => {
  const [{ isDragging }, drag] = useDrag({
    type: "Shape",
    item: { id, Icon },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
      className="col-span-6 m-2 p-4 border border-[#D8D8D8] rounded-md mt-4"
    >
      <Image className="w-full" src={Icon}  alt=""/>
    </div>
  );
};

export default Bubbles;
