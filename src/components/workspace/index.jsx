"use client";
import React, { useContext, useEffect, useRef, useState } from "react";
import MainArea from "./mainArea";
import InstantEvaluation from "./InstantEvaluation";
import NotesBoard from "./notesBoard";
import SchoolWork from "./schoolWork";
import EvaluationMatrix from "./evaluationMatrix";
import {
  WorkspaceContext,
  useWorkspaceContext,
} from "../../context/workspaceProvider";
import ReactGridLayout from "react-grid-layout";
// import "./styles.css";

// import { Resizable, ResizableBox } from "react-resizable";
// import "react-resizable/css/styles.css"; // Import the styles for react-resizable

import Resizable, { useResizable } from "react-resizable-layout";
import SampleSplitter from "./sampleSplitter";

function Workspace() {
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
  } = useWorkspaceContext();

  const mainContainerRef = useRef(null);
  const [containerSize, setContainerSize] = useState({
    width: 0,
    height: 0,
  });

  // const handleResize = () => {
  //   const container = containerRef.current;
  //   if (container) {
  //     const { width, height } = container.getBoundingClientRect();
  //     setContainerSize({ width, height });
  //   }
  // };

  useEffect(() => {
    let observer;
    const handleResize = () => {
      const container = mainContainerRef.current;
      if (container) {
        const { width, height } = container.getBoundingClientRect();
        setContainerSize({ width, height });
      }
    };

    if (typeof window !== "undefined") {
      observer = new ResizeObserver(handleResize);
      const container = mainContainerRef.current;
      if (container) {
        observer.observe(container);
        // Call it once to initialize state
        handleResize();
      }
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  // useEffect(() => {
  //   const observer = new ResizeObserver(handleResize);
  //   const container = containerRef.current;
  //   if (container) {
  //     observer.observe(container);
  //     // Call it once to initialize state
  //     handleResize();
  //   }

  //   return () => {
  //     if (container) {
  //       observer.unobserve(container);
  //     }
  //   };
  // }, []);

  // console.log("size==>", containerSize);

  // const {
  //   isDragging: isHorizontalDragging,
  //   position: horizontalH,
  //   separatorProps: horizontalDragBarProps,
  // } = useResizable({
  //   axis: "y",
  //   initial: 333,
  //   min: 250,
  //   reverse: true,
  // });

  // const {
  //   isDragging: isVerticalDragging,
  //   position: verticalW,
  //   separatorProps: verticalDragBarProps,
  // } = useResizable({
  //   axis: "x",
  //   initial: 200,
  //   min: 0,
  //   max: 400,
  //   reverse: true,
  // });

  const {
    isDragging: isHorizontalDragging,
    position: horizontalH,
    separatorProps: horizontalDragBarProps,
  } = useResizable({
    axis: "y",
    initial: 350,
    min: 70,
    max: 450,
    reverse: true,
  });

  const {
    isDragging: isVerticalDragging,
    position: verticalW,
    separatorProps: verticalDragBarProps,
  } = useResizable({
    axis: "x",
    initial: 300,
    min: 50,
    max: 400,
    reverse: true,
  });

  console.log("container size==>", containerSize);
  return (
    <>
      <div className="relative flex flex-col gap-2 font-mono color-white  w-full h-full whitespace-nowrap">
        <div className="flex grow gap-2 h-full w-full" ref={mainContainerRef}>
          <div className="flex flex-col grow gap-2 w-full h-full">
            <div className="flex grow h-full max-w-full">
              {" "}
              <div className="h-full w-full">
                <MainArea />
              </div>
            </div>
            {!evaluationMatrix && !instantEvaluation ? (
              <></>
            ) : (
              <>
                <SampleSplitter
                  dir={"horizontal"}
                  isDragging={isHorizontalDragging}
                  {...horizontalDragBarProps}
                />
                <div
                  className={`flex w-full ${
                    isHorizontalDragging && "dragging"
                  }`}
                  style={{
                    height: horizontalH,
                    width: containerSize.width - verticalW - 20,
                  }}
                >
                  <div className="h-full w-full flex gap-4">
                    {instantEvaluation && (
                      <div
                        className={`${
                          evaluationMatrix ? "w-1/2" : "w-full"
                        } h-full`}
                      >
                        <InstantEvaluation />
                      </div>
                    )}
                    {evaluationMatrix && (
                      <div
                        className={`${
                          instantEvaluation ? "w-1/2" : "w-full"
                        } h-full`}
                      >
                        <EvaluationMatrix />
                      </div>
                    )}
                  </div>
                </div>
              </>
            )}
          </div>

          {!notesBoard && !chats ? (
            <></>
          ) : (
            <>
              <SampleSplitter
                isDragging={isVerticalDragging}
                {...verticalDragBarProps}
              />
              <div
                className={`shrink-0  ${isVerticalDragging && "dragging"}`}
                style={{ width: verticalW }}
              >
                <div
                  className={` h-full w-full flex flex-col gap-4 `}
                  // style={{
                  //   width: notesBoard || chats ? "100%" : 0,
                  // }}
                >
                  {notesBoard && (
                    <div
                      className={`${
                        chats ? "h-1/2" : "h-full"
                      } w-full overflow-hidden`}
                    >
                      <NotesBoard />
                    </div>
                  )}
                  {chats && (
                    <div
                      className={`${
                        notesBoard ? "h-1/2" : "h-full"
                      } w-full overflow-hidden`}
                    >
                      <SchoolWork />
                    </div>
                  )}
                </div>
              </div>
            </>
          )}
        </div>
        {/* </div> */}
      </div>

      {/* <div
        className={
          "flex flex-column  bg-dark font-mono color-white overflow-hidden w-full h-full bg-[#ff0000]"
        }
      >
        <div className={"flex grow h-full"}>
          <div className={"flex grow"}>
            <div className={" grow bg-[#ff0000] h-full"}>
              <div
                className="shrink-0 contents h-full"
                style={{ height: horizontalH }}
              >
                Left Up
              </div>
              <SampleSplitter
                dir={"horizontal"}
                isDragging={isHorizontalDragging}
                {...horizontalDragBarProps}
              />
              <div className="shrink-0 contents">Left Down</div>
            </div>
            <SampleSplitter
              isDragging={isVerticalDragging}
              {...verticalDragBarProps}
            />
            <div
              className={`shrink-0 contents ${
                isVerticalDragging && "dragging"
              }`}
              style={{ width: verticalW }}
            >
              Right
            </div>
          </div>
        </div>
      </div> */}

      {/* <Resizable axis={"x"}>
        {({ position, separatorProps }) => (
          <div className="wrapper">
            <div className="left-block" style={{ width: position }}>
              1
            </div>
            <YourSeparatorComponent {...separatorProps} />
            <div className="bg-[#ff0000] h-full ">a</div>
            <div className="right-block">2</div>
          </div>
        )}
      </Resizable> */}
      {/* <Resizable lockAspectRatio={true}>
        <div className="max-w-full h-full bg-[#ff0000] flex gap-4 overflow-hidden">
          <div className="w-full h-full flex flex-col gap-4 bg-[#2f2727]">
            <div className="w-full h-full bg-[#957dee]">
              <Resizable
                style={{
                  width: "100%",
                  height: "100%",
                  background: "#e2e2e2",
                  overflow: "hidden",
                }}
                minConstraints={[100, 100]}
                maxConstraints={[300, 300]}
                axis="both"
                onResizeStop={(e, data) => {}}
                onResizeStart={(e, data) => {}}
                onResize={(e, data) => {}}
              >
                <ResizableBox width={200} height={200}>
                  <span className="bg-[#ff0000]">Contents 1</span>
                </ResizableBox>
              </Resizable>
            </div>
            <div className="w-full bg-[#7dee8e] flex gap-4">
              <div className="bg-[#ff0000]">
                <Resizable
                  style={{
                    width: "100%",
                    height: "100%",
                    background: "#e2e2e2",
                    overflow: "hidden",
                  }}
                  minConstraints={[100, 100]}
                  maxConstraints={[300, 300]}
                  axis="both"
                  onResizeStop={(e, data) => {}}
                  onResizeStart={(e, data) => {}}
                  onResize={(e, data) => {}}
                >
                  <ResizableBox width={200} height={200}>
                    <span className="bg-[#ff0000]">Contents 1</span>
                  </ResizableBox>
                </Resizable>
              </div>
              <div className="bg-[#ff0000]">
                <Resizable
                  style={{
                    width: "100%",
                    height: "100%",
                    background: "#e2e2e2",
                    overflow: "hidden",
                  }}
                  minConstraints={["50%", "50%"]}
                  maxConstraints={["100%", "100%"]}
                  axis="both"
                  onResizeStop={(e, data) => {}}
                  onResizeStart={(e, data) => {}}
                  onResize={(e, data) => {}}
                >
                  <ResizableBox width={200} height={200}>
                    <span className="bg-[#ff0000]">Contents 1</span>
                  </ResizableBox>
                </Resizable>
              </div>
            </div>
          </div>
          <div className="max-w-[300px] h-full flex flex-col gap-4 bg-[#7b7575]">
            <Resizable
              style={{
                width: "100%",
                height: "100%",
                background: "#e2e2e2",
                overflow: "hidden",
              }}
              draggableOpts={{ grid: [25, 25] }}
              minConstraints={[100, 100]}
              maxConstraints={[300, 300]}
              axis="both"
              onResizeStop={(e, data) => {}}
              onResizeStart={(e, data) => {}}
              onResize={(e, data) => {}}
            >
              <ResizableBox width={200} height={200}>
                <span className="bg-[#ff0000]">Contents 1</span>
              </ResizableBox>
            </Resizable>
          </div>
        </div>
      </Resizable> */}
      {/* <ReactGridLayout
        className="layout "
        layout={layout}
        // cols={2}
        // maxRows={2}
        // rowHeight={30}
        // width={1200}
        isBounded={true}
      >
        <div key="a" className="bg-white">
          a
        </div>
        <div key="b" className="bg-white">
          b
        </div>
        <div key="c" className="bg-white">
          c
        </div>
      </ReactGridLayout> */}

      {/* <div className="h-full w-full flex gap-4" ref={containerRef}>
        <div
          className="w-full h-full flex flex-col gap-4"
          style={{
            width:
              notesBoard || chats
                ? containerSize.width - 350
                : containerSize.width,
          }}
        >
          <div className="h-full w-full">
            <MainArea />
          </div>

          <div className="max-h-[300px] w-full flex gap-4">
            {instantEvaluation && (
              <div
                className={`${evaluationMatrix ? "w-1/2" : "w-full"} h-[300px]`}
              >
                <InstantEvaluation />
              </div>
            )}
            {evaluationMatrix && (
              <div
                className={`${
                  instantEvaluation ? "w-1/2" : "w-full"
                } h-[300px]`}
              >
                <EvaluationMatrix />
              </div>
            )}
          </div>
        </div>

        <div
          className={` h-full flex flex-col gap-4 `}
          style={{
            width: notesBoard || chats ? 350 : 0,
          }}
        >
          {notesBoard && (
            <div className={`${chats ? "h-1/2" : "h-full"} w-[350px] `}>
              <NotesBoard />
            </div>
          )}
          {chats && (
            <div className={`${notesBoard ? "h-1/2" : "h-full"} w-[350px]`}>
              <SchoolWork />
            </div>
          )}
        </div>
      </div> */}
    </>
  );
}

export default Workspace;
