"use client";
import React, { useRef, useState } from "react";
import Preview from "./Preview";
import ChooseFormat from "./ChooseFormat";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";
// import preview from "@/assets/workspace/preview.png";
import FrameHeight from "../../../../../assets/format/frameheight.png";
import FrameWeight from "../../../../../assets/format/frameweight.png";
import Frame from "../../../../../assets/format/frame.png";
import Image from "next/image";

const chooseFormatList = [
  {
    image: FrameHeight,
    socialMedia: "Twitter",
    Post: "Post",
    Dimensions: "Dimensions",
    w: 1200,
    h: 675,
  },

  {
    image: FrameWeight,
    socialMedia: "Facebook ",
    Post: "Header",
    Dimensions: "Dimensions",
    w: 1080,
    h: 1080,
  },

  {
    image: Frame,
    socialMedia: "Instragram",
    Post: "Post",
    Dimensions: "Dimensions",
    w: 1200,
    h: 630,
  },

  {
    image: Frame,
    socialMedia: "Instragram",
    Post: "Story",
    Dimensions: "Dimensions",
    w: 1080,
    h: 1920,
  },

  {
    image: FrameWeight,
    socialMedia: "Twitter",
    Post: "Post",
    Dimensions: "Dimensions",
    w: 1200,
    h: 675,
  },

  {
    image: FrameHeight,
    socialMedia: "Facebook ",
    Post: "Header",
    Dimensions: "Dimensions",
    w: 1080,
    h: 1080,
  },

  {
    image: FrameWeight,
    socialMedia: "Instragram",
    Post: "Post",
    Dimensions: "Dimensions",
    w: 1200,
    h: 630,
  },

  {
    image: Frame,
    socialMedia: "Instragram",
    Post: "Story",
    Dimensions: "Dimensions",
    w: 1080,
    h: 1920,
  },
];
function FormatPage() {
  const [preview, setPreview] = useState();
  return (
    <>
      <div className=" w-full bg-[white] py-2 px-2 rounded-lg flex justify-between  h-full">
        <div
          className={`${
            preview ? "w-[35%]" : "w-0 overflow-hidden"
          }  transform-width duration-700 whitespace-nowrap`}
        >
          <Preview setPreview={setPreview} preview={preview} />
        </div>
        <div
          className={`${
            preview ? "w-[65%]" : "w-[100%]"
          } transform-width duration-700 whitespace-nowrap`}
        >
          <ChooseFormat
            setPreview={setPreview}
            preview={preview}
            chooseFormatList={chooseFormatList}
          />
        </div>
      </div>
    </>
  );
}

export default FormatPage;
