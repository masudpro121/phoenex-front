import React, { useContext, useEffect, useState } from "react";
// import VocabularyLayout from "@/components/layouts/VocabularyLayout";
// import readyGenerateImage from "@/utils/readyGenerateImage";
// import ShowGeneratedImages from "@/components/Brandy/ShowGeneratedImages";
// import RenderImage from "@/components/Brandy/RenderImage";
// import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import ShowComic from "@/components/Comic/ShowComic";
import { setComicStorage } from "@/utils/utils";
function AudioToComic() {
  const [comic, setComic] = useState([]);
  const [progress, setProgress] = useState("null");
  const [language, setLanguage] = useState("");
  const [willUploadCharacter, setWillUploadCharacter] = useState("default");
  const [comicIsReady, setComicIsReady] = useState(false);
  const [characterPrompt, setCharacterPrompt] = useState("");
  const [prompt, setPrompt] = useState("");
  const [isVoiceUploaded, setIsVoiceUploaded] = useState(false);
  const [uploadedCharacter, setUploadedCharacter] = useState("");
  const [isProgress, setIsProgress] = useState(false);
  useEffect(() => {
    const comic = JSON.parse(localStorage.getItem("comic"));
    if (comic && comic.text) {
      const splited = comic.text.split(/-{2,}/gm);
      setComic(splited);
      if (splited.length > 0) {
        if (willUploadCharacter == "yes") {
          if (uploadedCharacter) {
            setComicIsReady(true);
          }
        }
        if (willUploadCharacter == "default" || willUploadCharacter == "no") {
          setComicIsReady(true);
        }
      }
    }
  }, []);

  const processToken = (token) => {
    return token.replace(/\\n/g, "\n").replace(/\"/g, "");
  };

  useEffect(() => {
    // handleIt(eventName, selectedWord);
    const lang = localStorage.getItem("language") || "english";
    setLanguage(lang);
    const comic = JSON.parse(localStorage.getItem("comic"));
    if (comic && comic.transcript) {
      setIsVoiceUploaded(true);
    }
    if (comic && comic.character) {
      setUploadedCharacter(comic.character);
    }
  }, []);

  
  const generateComic = async (topic) => {

    fetch("/api/completion", {
      method: "POST",
      body: JSON.stringify({
        input: `write 20 frame comic story with this topic, separate every 4 frame with this separator --------- ,  topic: "${topic}", ${
          prompt ? prompt : ""
        }. Give me output in ${language ? language : "english"} language`,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        const text = res.choices[0]?.message?.content;
        setComicStorage("text", text);
        setComic(text.split(/-{2,}/gm));
        if (text) {
          setComicIsReady(true);
        }
      });
  };

  const handleFileInput = async (e) => {
    const formData = new FormData();
    formData.append("file", e.target.files[0]);
    const t = await fetch("/api/transcription", {
      method: "POST",
      body: formData,
    });
    console.log(t, "transcript 1");
    const transcript = await t?.json();
    console.log(transcript, "transcript 1");
    setComicStorage("transcript", transcript.text);
    setIsVoiceUploaded(true);
  };

  const changeLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
  };

  const handleCharacterInput = (myfile) => {
    const formData = new FormData();
    formData.append("file", myfile);
    fetch("/api/upload-image", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((res) => {
        setComicStorage("character", res.secure_url);
        setUploadedCharacter(res.secure_url);
      });
  };

  const handleReset = () => {
    setComicIsReady(false);
    setProgress(0);
    localStorage.setItem("comic", JSON.stringify({}));
    setComic([]);
    window.location.reload();
  };

  const generateContent = () => {
    const comic = JSON.parse(localStorage.getItem("comic"));
    if (comic) {
      generateComic(comic.transcript.slice(0,1500));
      setComicStorage("characterPrompt", characterPrompt);
      setIsProgress(true);
    }
  };
  return (
    <div className="overflow-auto">
      <div className="flex justify-center flex-col items-center text-left mt-5 relative ">
        {comicIsReady && (
          <div
            onClick={handleReset}
            className="bg-slate-700 rounded px-10 py-1 text-white absolute top-0 right-3 cursor-pointer"
          >
            Reset
          </div>
        )}
        {!comicIsReady && (
          <div className="flex items-start">
            <div>
              {isVoiceUploaded ? (
                <div>Voice Uploaded</div>
              ) : (
                <div className="flex flex-col">
                  <label htmlFor="audio">Upload voice</label>
                  <input
                    id="audio"
                    onChange={handleFileInput}
                    type="file"
                    accept="audio/*"
                    className="mt-1"
                  />
                </div>
              )}
              <div className="mt-3">
                <label htmlFor="audio">Prompt here</label> <br />
                <input
                  onChange={(e) => setPrompt(e.target.value)}
                  type="text"
                  className="border rounded-md px-3 mt-1 py-1"
                  placeholder="type prompt here"
                  value={prompt}
                />
              </div>
              <div className="mt-4">
                {willUploadCharacter == "yes" && (
                  <div className="flex flex-col mt-5">
                    {uploadedCharacter ? (
                      <div>Character Uploaded</div>
                    ) : (
                      <>
                        <label htmlFor="audio">Upload Character</label>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) =>
                            handleCharacterInput(e.target.files[0])
                          }
                        />
                      </>
                    )}
                    
                  </div>
                )}
                {willUploadCharacter == "default" && (
                  <div>
                    <p>Do you want to upload character?</p>
                    <div className="flex gap-4 mt-2">
                      <button
                        onClick={() => setWillUploadCharacter("yes")}
                        className="bg-slate-700 text-white px-4 rounded cursor-pointer"
                      >
                        Yes
                      </button>
                      <button
                        onClick={() => setWillUploadCharacter("no")}
                        className="bg-slate-700 text-white px-4 rounded cursor-pointer"
                      >
                        No
                      </button>
                    </div>
                  </div>
                )}
                {isVoiceUploaded &&
                  (willUploadCharacter == "no" ||
                    (willUploadCharacter == "yes" &&
                      uploadedCharacter)) && (
                    <div>
                      <button
                        onClick={generateContent}
                        className="bg-slate-700 text-white py-1 px-4 rounded cursor-pointer mt-2"
                      >
                        Generate Content
                      </button>
                    </div>
                  )}
              </div>
            </div>

            <select
              className="mt-3"
              value={language}
              onChange={(e) => changeLanguage(e.target.value)}
            >
              <option value="english">English</option>
              <option value="chinese">Chinese</option>
              <option value="bangla">Bangla</option>
            </select>
          </div>
        )}

        <div className="mt-4">
          {isProgress && !comicIsReady && <div>Loading..</div>}
          {comicIsReady && <ShowComic comic={comic} />}
        </div>
      </div>
    </div>
  );
}

export default AudioToComic;
