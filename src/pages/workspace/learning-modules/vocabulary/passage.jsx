import React, { useContext, useEffect, useState } from 'react'
import VocabularyLayout from "@/components/layouts/VocabularyLayout"

const Passage = () => {
  const [passage, setPassage] = useState("")
  const [source, setSource] = useState();

  const processToken = (token) => {
    return token.replace(/\\n/g, "\n").replace(/\"/g, "");
  };

  useEffect(() => {
    const eventName = `${Math.ceil(Math.random()*999999)}${Date.now()}`
    const selectedWord = localStorage.getItem("word");
    handleIt(eventName,selectedWord)
  }, []);

  
  const handleIt = async (eventName, selectedWord) => {
    if (source) {
      source.close();
    }
    const newSource = await new EventSource("/api/completion-stream");
    setSource(newSource);
    let text = ""
    newSource.addEventListener(eventName, (event) => {
      const token = processToken(event.data);

      text += token
      // setComic(text.replace(/panel.*/gim, ''));
      setPassage(text)
    });
  
    newSource.addEventListener("end", () => {
      newSource.close();
    });

    fetch("/api/completion-stream", {
      method: "POST",
      body: JSON.stringify({
        input: "Write few passages of : " + selectedWord ,
        eventName
      }),
    })
    
  };
  return (
    <VocabularyLayout pageTitle="Passage of ">
      <div className="flex justify-center text-left">
        <div className=" mx-5 sm:mx-0 w-full sm:w-4/5  min-h-[200px] rounded-md bg-slate-800 mt-5 p-5 leading-10 text-white">
        {passage ? (
            <div>
              <pre className=" overflow-auto w-full whitespace-pre-wrap break-words leading-snug">
                {passage}
              </pre>
            </div>
          ) : (
            <div>Loading..</div>
          )}
        </div>
      </div>
    </VocabularyLayout>
  )
}

export default Passage