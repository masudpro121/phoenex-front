import React, { useEffect, useState } from "react";
import VocabularyLayout from "@/components/layouts/VocabularyLayout";
import readyGenerateImage from "@/utils/readyGenerateImage";
import ShowGeneratedImages from "@/components/Brandy/ShowGeneratedImages";
import RenderImage from "@/components/Brandy/RenderImage";

const FlashCard = () => {
  const [progress, setProgress] = useState("null");
  const [progressImage, setProgressImage] = useState("");
  const [generatedImages, setGeneratedImages] = useState("");
  const [selectedCard, setSelectedCard] = useState()

  const [cardsBack0, setCardsBack0] = useState("")
  const [cardsBack1, setCardsBack1] = useState("")
  const [cardsBack2, setCardsBack2] = useState("")
  const [cardsBack3, setCardsBack3] = useState("")
  // write me a prompt for explain "criticize" as a image
  // generate a flashcard with this instruction:
 
  useEffect(() => {
    const selectedWord = localStorage.getItem("word");
    fetch("/api/completion", {
      method: "POST",
      body: JSON.stringify({
        input: `write me a prompt for explain ${selectedWord} as a image `,
      }),
    })
    .then((res) => res.json())
    .then((res) => {
      const output =
        "generate a flashcard with this instruction: " +
        res.choices[0]?.message?.content;
      readyGenerateImage(
        output,
        setProgress,
        setProgressImage,
        setGeneratedImages
      );
    });
  }, []);

  const handleGenerate=(i)=>{
    if((i==0 && cardsBack0) || (i==1 && cardsBack1) || (i==2 && cardsBack2) || (i==3 && cardsBack3)   ){
      return ;
    }
    const selectedWord = localStorage.getItem("word");
    let myprompt
    if(i==0){
      myprompt = `Write a very short definition of  ${selectedWord}. `
    }
    if(i==1){
      myprompt = `Make a short and interesting sentence with this word  ${selectedWord}.  `
    }
    if(i==2){
      myprompt = `Write 2 synonym and 2 antonym  of ${selectedWord}.  `
    }
    if(i==3){
      myprompt = `Which parts of speech is this:  ${selectedWord}.  `
    }
    fetch("/api/completion", {
      method: "POST",
      body: JSON.stringify({
        input: myprompt,
      }),
    })
  .then((res) => res.json())
  .then((res) => {
    const output = res.choices[0]?.message?.content
    if(i==0){
      setCardsBack0(output)
    }
    if(i==1){
      setCardsBack1(output)
    }
    if(i==2){
      setCardsBack2(output)
    }
    if(i==3){
      setCardsBack3(output)
    }
  })
  }
  const flipCard = (index) =>{
    if(selectedCard == index){
      setSelectedCard()
    }else{
      setSelectedCard(index)
      handleGenerate(index)
    }
  }
  console.log(cardsBack0, '0');
  console.log(cardsBack1, '1');
  console.log(cardsBack2, '2');
  console.log(cardsBack3, '3');

  return (
    <VocabularyLayout pageTitle="Flashcard of ">
      <div className="flex justify-center flex-col items-center text-left">
        {progress != "null" && (
          <div>
            <div>
              {progress == 100 ? (
                <div>
                  <div className="flex flex-wrap gap-5 m-auto justify-center my-5">
                    {generatedImages.map((img, i) => {
                      return (
                        <div onClick={()=>flipCard(i)} className="cursor-pointer" >
                         {
                          selectedCard != i ?
                          <div className="h-80 w-80">
                            <RenderImage
                              src={img}
                              key={img + i}
                            /> 
                          </div>
                          : 
                        <div className="w-80 bg-slate-200 flex items-center justify-center p-5 h-80 rounded-md">
                          {
                             i == 0  &&  
                             <div className="text-center">
                               <p className="font-semibold mb-2">Definition</p>
                               {cardsBack0}
                             </div>
                          }
                          {
                            i == 1 && 
                            <div className="text-center">
                            <p className="font-semibold mb-2">Sentence</p>
                            {cardsBack1}
                          </div>
                          }
                          {
                             i== 2  && 
                             <div className="text-center">
                             <p className="font-semibold mb-2">Synonym & Antonym</p>
                             <pre className=" font-sans">{cardsBack2}</pre>
                           </div>
                          }
                          {
                            i==3  && 
                            <div className="text-center">
                            <p className="font-semibold mb-2">Parts of Speech</p>
                            {cardsBack3}
                          </div>
                          }
                        </div>
                         }
                        </div>
                      );
                    })}
                  </div>
                </div>
              ) : progress > 0 ? (
                <div>
                  <div className="m-auto flex flex-wrap justify-center my-10">
                    <RenderImage
                      src={progressImage}
                      cls={"h-[400px] w-[400px] "}
                    />
                  </div>
                </div>
              ) : (
                <div>
                  <div className="m-auto flex flex-wrap justify-center my-10">
                    <RenderImage cls={"h-[400px] w-[400px] "} />
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </VocabularyLayout>
  );
};

export default FlashCard;
