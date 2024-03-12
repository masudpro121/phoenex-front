import React, { useContext, useEffect, useState } from "react";
import VocabularyLayout from "@/components/layouts/VocabularyLayout";

const SynonymAntonym = () => {
  const [synonym, setSynonym] = useState("");
  const [antonym, setAntonym] = useState("");
  const [length, setLength] = useState();
  const [selectedCard, setSelectedCard] = useState();
  useEffect(() => {
    const selectedWord = localStorage.getItem("word");
    fetch("/api/completion", {
      method: "POST",
      body: JSON.stringify({
        input: `Give me few Synonym and  Antonym of ${selectedWord}. Separate by comma and Give answer inside tags,  <synonym></synonym> <antonym></antonym>`,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        const text = res.choices[0].message.content;
        const synoRegx = text.match(/<synonym>(.*)<\/synonym>/i);
        const antoRegx = text.match(/<antonym>(.*)<\/antonym>/i);
        const syno = synoRegx && synoRegx[1];
        const anto = antoRegx && antoRegx[1];
        const splitedSyno = syno?.split(",");
        const splitedAnto = anto?.split(",");
        setSynonym(splitedSyno);
        setAntonym(splitedAnto);
        if (splitedSyno?.length < splitedAnto?.length) {
          setLength(splitedSyno.length);
        } else {
          setLength(splitedAnto.length);
        }
      });
  }, []);

  const flipCard = (index) => {
    if (selectedCard == index) {
      setSelectedCard();
    } else {
      setSelectedCard(index);
    }
  };
  return (
    <VocabularyLayout pageTitle="Synonym, Antonym of ">
      <div className="flex justify-center text-left">
        {/* <div className=" mx-5 sm:mx-0 w-full sm:w-4/5  min-h-[200px] rounded-md bg-slate-800 mt-5 p-5 leading-10 text-gray-50">
          <div><span className="font-semibold ">Synonyms:</span> {synonym?synonym:'loading..'}</div>
          <div><span className="font-semibold ">Antonym:</span> {antonym?antonym:'loading..'}</div>
        </div> */}

        <div className="flex flex-wrap gap-3 mt-5">
          {synonym &&
            synonym.map((item, i) => {
              if (i < length) {
                return (
                  <>
                    {selectedCard == i ? (
                      <div
                        onClick={() => flipCard(i)}
                        className="h-40 w-40 cursor-pointer flex justify-center items-center rounded-md bg-red-300 "
                      >
                        <div className="text-center space-y-3">
                          <p className="font-semibold">Antonym</p>
                          <p>{antonym[i]}</p>
                        </div>
                      </div>
                    ) : (
                      <div
                        onClick={() => flipCard(i)}
                        className="h-40 w-40 cursor-pointer flex justify-center items-center rounded-md bg-orange-300 "
                      >
                        <div className="text-center space-y-3">
                          <p className="font-semibold">Synonym</p>
                          <p>{item}</p>
                        </div>
                      </div>
                    )}
                  </>
                );
              }
            })}
        </div>
      </div>
    </VocabularyLayout>
  );
};

export default SynonymAntonym;
