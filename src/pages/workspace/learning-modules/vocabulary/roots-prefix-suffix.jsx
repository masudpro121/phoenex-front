import React, { useContext, useEffect, useState } from 'react'
import VocabularyLayout from "@/components/layouts/VocabularyLayout"

const RootSuffixPrefix = () => {
  const [text, setText] = useState("")
  useEffect(()=>{
    const selectedWord = localStorage.getItem("word");
    fetch("/api/completion", {
      method: 'POST',
      body: JSON.stringify({
        input: `Provide roots , prefixes and suffixes of ${selectedWord}
        and their extended words at least 3 for each category with
        explanations of combination and definitions of roots , prefixes
        and suffixes and vocabulary definitions`
      })
    })
    .then(res=>res.json())
    .then(res=>{
      const text = res.choices[0].message.content
      setText(text)
    })


  },[])
  return (
    <VocabularyLayout>
      <div className="flex justify-center text-left" pageTitle="Roots, Suffix, Prefix of ">
        <div className=" mx-5 my-5 sm:mx-0 w-full sm:w-4/5  min-h-[200px] rounded-md bg-slate-800 mt-5 p-5 leading-10 text-white">
          {
            text ? <pre className="overflow-auto w-full whitespace-pre-wrap break-words leading-normal font-light font-sofia">{text}</pre>
            : <div>Loading..</div>
          }
        </div>
      </div>
    </VocabularyLayout>
  )
}

export default RootSuffixPrefix