"use client";
import Image from "next/legacy/image";
import React, { useRef } from "react";
import { FaArrowLeft } from "react-icons/fa";
import previewImage from "@/assets/workspace/preview.png";
import { CiZoomIn } from "react-icons/ci";
import { CiZoomOut } from "react-icons/ci";
import { PiArrowBendDoubleUpLeft } from "react-icons/pi";
import { PiCaretDoubleLeftFill } from "react-icons/pi";
import { FaStop } from "react-icons/fa6";
import { FaPause } from "react-icons/fa";
import { FaCaretSquareRight } from "react-icons/fa";
import { PiCaretDoubleRightFill } from "react-icons/pi";
import { PiArrowBendDoubleUpRightBold } from "react-icons/pi";
import { AiOutlineSound } from "react-icons/ai";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";
import { useWorkspaceContext } from "@/context/workspaceProvider";
import Cropper from "react-easy-crop";
import { useState, useCallback } from "react";

function Preview({ setPreview, preview }) {
  const { sidebar } = useWorkspaceContext();
  const transformComponentRef = useRef(null);
  const [crop, setCrop] = useState({ x: 2, y: 8 });
  const [zoom, setZoom] = useState(1);

  const zoomToImage = () => {
    if (transformComponentRef.current) {
      const { zoomToElement } = transformComponentRef.current;
      zoomToElement("imgExample");
    }
  };
  const onCropComplete = (croppedArea, croppedAreaPixels) => {
    console.log(croppedArea, croppedAreaPixels);
  };
  const Controls = () => (
    <>
      <div className="flex items-center">
        <CiZoomIn
          className="text-[#9E9E9E] cursor-pointer"
          onClick={() => setZoom((prev) => prev + 1)}
        />
        <CiZoomOut
          className="text-[#9E9E9E] cursor-pointer"
          onClick={() => setZoom((prev) => (prev > 1 ? prev - 1 : prev))}
        />
      </div>
    </>
  );

  return (
    <>
      <div className="w-full px-4 h-full flex flex-col border-r border-[#D8D8D8]">
        <div
          className="flex gap-2 items-center py-4 cursor-pointer "
          onClick={() => setPreview()}
        >
          <FaArrowLeft />
          <span className="text-[24px] font-bold"> Preview</span>
        </div>
        <div className="bg-Light rounded-xl flex justify-center items-center h-full  ">
          <div className={`relative h-full w-[100%] `}>
            <Cropper
              image="https://s3-alpha-sig.figma.com/img/26b8/70f0/841a027a6a2fec723f16fa8a1baca0a4?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pTkrbs5-fpoupPx~qo3JUEWGi7st5-Ui~9sH9ChSq1Mz2PJiTsbLlLM8tpmwD1YjxByBwiEu7FrICXb-hGM5hWhKE8r9FzlkkWRvELEuxoHDAM2f4tz0WjLDcpmsuTiO9kJ1nl9HD6yEP0F9w6jylDxCwAz3JaPf5gVCPl5pLgzpdgd2VX0EejfUyotiaMOFLDr1wfpLvca2A7SMEjPvhKPM1KcwTv5KSmZdXB~Hved5rVGN55MMZkaHvPi1gj~WT8b5OtO12oKxcU~cGaYzPlivEQQNWkisSFj-dCIW3J2eAXZ4I7KG2oFx58ifOTbGlpubwc3ckirC8Ro5GVUW9Q__"
              crop={crop}
              zoom={zoom}
              aspect={preview ? preview.w / preview.h : 1 / 1}
              onCropChange={setCrop}
              onCropComplete={onCropComplete}
              onZoomChange={setZoom}
              showGrid={false}
            />
          </div>
        </div>
        <div className="bg-white py-3 px-4 flex justify-between items-center rounded-b-[15px] border-b border-[#D8D8D8]">
          <div className="flex items-center">
            <Controls />
          </div>
          <div className="flex gap-2">
            <PiArrowBendDoubleUpLeft className="text-[#9E9E9E] cursor-pointer" />
            <PiCaretDoubleLeftFill className="text-[#9E9E9E] cursor-pointer" />
            <FaStop className="text-[#9E9E9E] cursor-pointer" />
            <FaPause className="text-[#9E9E9E] cursor-pointer" />
            <FaCaretSquareRight className="text-[#9E9E9E] cursor-pointer" />
            <PiCaretDoubleRightFill className="text-[#9E9E9E] cursor-pointer" />
            <PiArrowBendDoubleUpRightBold className="text-[#9E9E9E] cursor-pointer" />
          </div>

          <div>
            <AiOutlineSound className="text-[#9E9E9E] cursor-pointer" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Preview;
