import React, { useContext, useEffect, useState } from "react";
import VocabularyLayout from "@/components/layouts/VocabularyLayout";
import readyGenerateImage from "@/utils/readyGenerateImage";
import ShowGeneratedImages from "@/components/Brandy/ShowGeneratedImages";

function Comic() {
  const [comic, setComic] = useState("");
  const [source, setSource] = useState();
  const [progress, setProgress] = useState("null");
  const [progressImage, setProgressImage] = useState("");
  const [generatedImages, setGeneratedImages] = useState("");

  const processToken = (token) => {
    return token.replace(/\\n/g, "\n").replace(/\"/g, "");
  };

  useEffect(() => {
    const eventName = `${Math.ceil(Math.random() * 999999)}${Date.now()}`;
    const selectedWord = localStorage.getItem("word");
    handleIt(eventName, selectedWord);
  }, []);

  const handleIt = async (eventName, selectedWord) => {
    if (source) {
      source.close();
    }
    const newSource = await new EventSource("/api/completion-stream");
    setSource(newSource);
    let text = "";
    newSource.addEventListener(eventName, (event) => {
      const token = processToken(event.data);
      text += token;
      // setComic(text.replace(/panel.*/gim, ''));
      setComic(text);
    });

    newSource.addEventListener("end", async () => {
      const gptResp = await fetch("/api/completion", {
        method: "POST",
        body: JSON.stringify({
          input: `write a prompt to generate  ai image  about this comic: "${text}"  `,
        }),
      })
        .then((res) => res.json())
        .then((res) => res.choices[0]?.message?.content);
      readyGenerateImage(
        gptResp,
        setProgress,
        setProgressImage,
        setGeneratedImages
      );
      newSource.close();
    });

    fetch("/api/completion-stream", {
      method: "POST",
      body: JSON.stringify({
        input: `Provide 4-frame comics with Contextual Dialogue for vocabulary "${selectedWord}"`,
        eventName,
      }),
    });
  };
  return (
    <VocabularyLayout pageTitle="Comic of ">
      <div className="flex justify-center flex-col items-center text-left">
        <div className=" mx-5 sm:mx-0 w-full sm:w-4/5  min-h-[200px] rounded-md bg-slate-800 text-white mt-2 mb-5 p-5 leading-10 ">
          {comic ? (
            <div>
              <pre className=" overflow-auto w-full whitespace-pre-wrap break-words leading-snug">
                {comic}
              </pre>
            </div>
          ) : (
            <div>Loading..</div>
          )}
        </div>

        {progress != "null" && (
          <div>
            <ShowGeneratedImages
              progress={progress}
              progressImage={progressImage}
              generatedImages={generatedImages}
              headline={false}
              renderCls="-z-10 "
            />
          </div>
        )}
      </div>
    </VocabularyLayout>
  );
}

export default Comic;
