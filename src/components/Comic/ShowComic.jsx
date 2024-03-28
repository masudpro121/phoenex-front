import { MyContext } from "@/pages/_app";
import { createRoot } from "react-dom/client";
import readyGenerateImage from "@/utils/readyGenerateImage";
import React, { useContext, useEffect, useRef, useState } from "react";
import ShowGeneratedImages from "./ShowGeneratedImages";
import { Carousel } from "react-responsive-carousel";
import axios from "axios";
import { setComicStorage } from "@/utils/utils";
import ReactAudioPlayer from "react-audio-player";
import { useWorkspaceContext } from "@/context/workspaceProvider";
import RenderImage from "../Brandy/RenderImage";

const ShowComic = ({ comic, topicId }) => {
  const [progress, setProgress] = useState("null");
  const [progressImage, setProgressImage] = useState("");
  const [generatedImages, setGeneratedImages] = useState([]);
  // const [dalleImages, setDalleImages] = useState([]);
  const { setComicImages, comicImages } = useWorkspaceContext();
  const [itemGenerated, setItemGenerated] = useState([]);
  const [part, setPart] = useState(0);
  const [status, setStatus] = useState("working");
  const [comicVoice, setComicVoice] = useState("");
  const myCarouselRef = useRef(null);

  const reRenderImage = (images) => {
    const refNode = myCarouselRef.current;
    if (refNode) {
      createRoot(refNode).render(
        <Carousel
          showArrows={true}
          onChange={() => {}}
          onClickItem={() => {}}
          onClickThumb={() => {}}
          autoPlay={true}
          infiniteLoop={true}
        >
          {images.map((img, i) => {
            return (
              <div className="" key={"carousel" + i}>
                {/* <RenderImage src={img} /> */}
                <img
                  className="max-h-[500px] object-contain"
                  src={img}
                  alt=""
                />
              </div>
            );
          })}
        </Carousel>
      );
    }
  };
  

  useEffect(() => {
    console.log(part, "partssss");
    const mycomic = JSON.parse(localStorage.getItem("comic"));
    if (mycomic && mycomic[part]) {
      setStatus("done");
      setGeneratedImages(mycomic[part]);
      // setDalleImages(mycomic["d"+part])
    } else {
      if (comic.length > 1) {
        let prompt = "";

        if (mycomic.character) {
          prompt += `${comic[part]}, --quality .25 --cref ${mycomic.character} --cw 50 --ar 7:4`;
        } else {
          prompt += `${comic[part]},  --quality .25 --cref https://s.mj.run/cTwGUArBOvQ https://s.mj.run/B12QYz37Kls  --cw 50 --ar 7:4`;
        }
        const result = readyGenerateImage(
          prompt,
          setProgress,
          setProgressImage,
          setGeneratedImages,
          setStatus
        );
      }
    }
  }, [part]);

  useEffect(() => {
    if (generatedImages.length) {
      setComicStorage(part, generatedImages);
      setStatus("done");
      reRenderImage(generatedImages);
    }
  }, [generatedImages]);

  useEffect(() => {
    if (comic.length < 1) {
      setStatus("");
      setGeneratedImages([]);
      setProgressImage("");
    }
  }, [comic]);

  const handleComicVoice = () => {
    setComicVoice("working");
    fetch("/api/text-to-speech", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: comic[part],
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        setComicVoice(res.secure_url);
        setComicStorage("voice" + part, res.secure_url);
      })
      .catch((err) => {
        console.log(err, "err");
      });
  };

  useEffect(() => {
    const mycomic = JSON.parse(localStorage.getItem("comic"));
    if (mycomic) {
      setComicVoice(mycomic["voice" + part]);
    }
  }, [part]);

  useEffect(() => {
    console.log(topicId, "topic id");
    const mycomic = JSON.parse(localStorage.getItem("comic"));
    if (mycomic.topicId != topicId) {
      setComicStorage("topicId", topicId)
      let prompt = "";
      if (mycomic.character) {
        prompt += `${comic[part]}, --quality .25 --cref ${mycomic.character} --cw 50 --ar 7:4`;
      } else {
        prompt += `${comic[part]},  --quality .25 --cref https://s.mj.run/cTwGUArBOvQ https://s.mj.run/B12QYz37Kls  --cw 50 --ar 7:4`;
      }
      setStatus("");
      setGeneratedImages([]);
      setProgressImage("");
      
      readyGenerateImage(
        prompt,
        setProgress,
        setProgressImage,
        setGeneratedImages,
        setStatus
      );
    }
  }, [topicId]);
 
  return (
    <div className="flex flex-col items-center mt-5">
      <div className=" mx-5 sm:mx-0 w-full sm:min-w-[800px]  min-h-[200px] min-w rounded-md bg-slate-800 mt-2 mb-5 p-5 leading-10 text-white">
        <div>
          <pre className=" overflow-auto w-full whitespace-pre-wrap break-words leading-snug">
            {comic[part]}
          </pre>
        </div>
      </div>

      <div className="flex gap-4 mt-3">
        {part > 0 && (
          <div
            className="bg-slate-700 text-white px-7 rounded-sm py-1 cursor-pointer"
            onClick={() => {
              if (status == "done") {
                setPart((current) => current - 1);
                if (!comicImages[part - 1]) {
                  setProgress(0);
                  setStatus("working");
                }
              }
            }}
          >
            Previous
          </div>
        )}
        {part < comic.length - 1 && (
          <div
            className="bg-slate-700 text-white px-7 rounded-sm py-1 cursor-pointer"
            onClick={() => {
              if (status == "done") {
                setPart((current) => current + 1);
                if (!comicImages[part + 1]) {
                  setProgress(0);
                  setStatus("working");
                }
              }
            }}
          >
            Next
          </div>
        )}
      </div>
      <div className="mt-5">
        {comicVoice == "working" ? (
          <div>Audio Generating..</div>
        ) : comicVoice ? (
          <ReactAudioPlayer src={comicVoice} autoPlay controls />
        ) : (
          comic.length > 1 && (
            <div
              className="bg-slate-700 text-white rounded-xl px-3 py-1 cursor-pointer"
              onClick={handleComicVoice}
            >
              Generate Comic voice
            </div>
          )
        )}
      </div>
      <div className={status == "done" && "hidden"}>
        <ShowGeneratedImages
          progress={progress}
          progressImage={progressImage}
          generatedImages={generatedImages}
          renderCls="-z-10 "
          status={status}
        />
      </div>

      <div
        className={
          status == "working"
            ? "hidden"
            : "w-[80%] m-auto  pt-10 px-10 mb-5 mt-5"
        }
      >
        {generatedImages && (
          <div ref={myCarouselRef}>
            <Carousel
              showArrows={true}
              onChange={() => {}}
              onClickItem={() => {}}
              onClickThumb={() => {}}
              autoPlay={true}
              infiniteLoop={true}
            >
              {generatedImages.map((img, i) => {
                return (
                  <div className="" key={"carousel" + i}>
                    {/* <RenderImage src={img} /> */}
                    <img
                      className="max-h-[500px] object-contain"
                      src={img}
                      alt=""
                    />
                  </div>
                );
              })}
            </Carousel>
          </div>
        )}
      </div>
      {/* <div>
        <h1 className="text-xl font-bold mt-10">Dall-E Images</h1>
      </div>
      <div className={status=="working"? "hidden": "w-[80%] m-auto bg-slate-500 pt-10 px-10 mb-5 mt-5"}>
        <Carousel 
         showArrows={true} onChange={()=>{}} onClickItem={()=>{}} onClickThumb={()=>{}}
         autoPlay={true} infiniteLoop={true}
        >
          {
            dalleImages.map((img, i)=>{
              return (
                <div className="" key={'carousel'+i}>
                  <img className="max-h-[500px] object-contain" src={img} alt="" />
                </div>
              )
            })
          }
        </Carousel>
      </div> */}
    </div>
  );
};

export default ShowComic;
