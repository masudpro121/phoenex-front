"use client";
import React from "react";
import Header from "@/components/workspace/Dnd/EditorComponent";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import EditorComponent from "@/components/workspace/Dnd/EditorComponent";

function Editor() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="h-full flex flex-col">
        <EditorComponent />
      </div>
    </DndProvider>
  );
}

export default Editor;
