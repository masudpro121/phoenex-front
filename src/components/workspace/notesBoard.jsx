import React from "react";
import ChartHeader from "./chartHeader";
import { useWorkspaceContext } from "../../context/workspaceProvider";

function NotesBoard() {
  const { setNotesBoard } = useWorkspaceContext();

  const noteBoardFormatData = [
    {
      name: "key Ideas",
    },
    {
      name: "Summary",
    },
    {
      name: "Arguments",
    },
    {
      name: "Reasoning Structures",
    },
    {
      name: "Mindmap Keywords",
    },
    {
      name: "Total Time Spent",
    },
    {
      name: "Evaluation Scores",
    },
    {
      name: "Reasoning Structures",
    },
    {
      name: "Mindmap Keywords",
    },
    {
      name: "Total Time Spent",
    },
  ];

  return (
    <div className="bg-white rounded-[20px]  px-4  py-2 w-full h-full flex flex-col justify-start">
      <ChartHeader
        title={"Notes Board"}
        closeHandler={() => setNotesBoard(false)}
      />
      <div className="py-4 flex flex-col justify-start  gap-1 items-start overflow-auto ">
        {noteBoardFormatData.map((items, index) => (
          <p key={index} className="text-[12px] text-lightGray ">
            {" "}
            {items.name}{" "}
          </p>
        ))}
      </div>
    </div>
  );
}

export default NotesBoard;
