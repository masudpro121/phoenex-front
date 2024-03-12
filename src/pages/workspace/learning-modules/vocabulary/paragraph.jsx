import React, { useContext, useEffect, useState } from 'react'
import VocabularyLayout from "@/components/layouts/VocabularyLayout"

const Paragraph = () => {
  const [paragraph, setParagraph] = useState("")
  const [qna, setQna] = useState("")

  useEffect(() => {
    const selectedWord = localStorage.getItem("word");
    handleIt(selectedWord)
  }, []);


  useEffect(()=>{
    if(paragraph){
      fetch("/api/completion", {
        method: 'POST',
        body: JSON.stringify({
          input: `write few 3 question and answer based on this paragraph: "${paragraph}" `
        })
      })
      .then(res=>res.json())
      .then(res=>{
        const text = res.choices[0].message.content
        setQna(text)
      })
    }
  },[paragraph])
  
  const handleIt = async ( selectedWord) => {
    fetch("/api/completion", {
      method: 'POST',
      body: JSON.stringify({
        input: `write few topics of "${selectedWord}" and their paragraph `
      })
    })
    .then(res=>res.json())
    .then(res=>{
      const text = res.choices[0].message.content
      setParagraph(text)
    })
  };

  return (
    <VocabularyLayout pageTitle="Paragraph of ">
      <div className="flex justify-center text-left">
        <div className=" mx-5 my-2 sm:mx-0 w-full sm:w-4/5  min-h-[200px] rounded-md bg-slate-800 mt-5 p-5 leading-10 text-white">
        {paragraph ? (
            <div>
              <pre className=" overflow-auto w-full whitespace-pre-wrap break-words leading-relaxed font-sofia font-light">
                {paragraph}
              </pre>
            </div>
          ) : (
            <div>Loading..</div>
          )}
        </div>
      </div>
      <div className="flex justify-center text-left mt-5">
        <div className=" mx-5 my-2 sm:mx-0 w-full sm:w-4/5  min-h-[200px] rounded-md bg-slate-800 mt-5 p-5 leading-10 text-white">
        <h2 className="text-xl font-bold mb-5">Question and Answer</h2>
        {qna ? (
            <div>
              <pre className=" overflow-auto w-full whitespace-pre-wrap break-words leading-relaxed font-sofia font-light">
                {qna}
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

export default Paragraph