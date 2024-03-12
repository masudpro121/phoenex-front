import React, { useContext, useState } from "react";
import Link from "next/link";
import recommendedBooks from "@/data/learningAssets/vocabulary/recommended-books";
import vocabularyCategory from "@/data/learningAssets/vocabulary/vocabulary-category";
import { MyContext } from "@/pages/_app";

const Vocabulary = () => {
  const [input, setInput] = useState("");
  const { selectedWord, setSelectedWord } = useContext(MyContext);

  const parentCategory = Object.keys(vocabularyCategory);
  const highlightedBook = recommendedBooks[0];
  const recommends = recommendedBooks.slice(1);

  const handleWord = () => {
    localStorage.setItem("word", input);
    setSelectedWord(input);
    setInput("");
  };
  return (
    <div>
      {/* Search Vocabulary  */}
      <div className="flex justify-center">
        <div className="mt-10 flex gap-2">
          <input
            className=" rounded-md py-2 px-2 sm:w-[400px]"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Type Word"
          />
          <button
            className="rounded-md text-sm px-5 font-semibold"
            onClick={handleWord}
          >
            Search
          </button>
        </div>
      </div>

      <div>
        {selectedWord && (
          <div className="text-center mt-5">
            Selected: <span className="font-semibold">{selectedWord}</span>
          </div>
        )}
      </div>

      {/* Categorized Learning Method  */}
      {parentCategory.map((category, i) => {
        if (vocabularyCategory[category].length > 0) {
          return (
            <div
              key={category + i}
              className="mt-10 bg-gray-200 py-5 px-5  m-5 rounded-md"
            >
              <div className="mb-5 text-2xl font-bold text-slate-900">
                {category}
              </div>
              <div className="flex flex-wrap gap-x-5 gap-y-10">
                {vocabularyCategory[category].map((item, key) => {
                  return (
                    <Link
                      className="sm:w-[48%] md:w-[30%] "
                      href={item.link}
                      key={"categoryItem" + key}
                    >
                        <div>
                          <img
                            src={item.img}
                            alt=""
                            className="h-[250px] w-full object-cover rounded-tl-md rounded-tr-md"
                          />
                          <div className="bg-slate-800 text-white py-3 px-4 font-semibold rounded-bl-md rounded-br-md">
                            {item.category}
                          </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        }
      })}

      {/* Recommendation  */}
      <div className=" bg-slate-800 m-5 p-10">
        <div>
          <h1 className="text-4xl font-bold text-white">
            We <span className=" text-orange-500">Recommend</span> these Books
          </h1>
        </div>
        <div className="block md:flex gap-5 mt-9 justify-between">
          <div className="w-full md:w-[30%]">
            <img src={highlightedBook.img} className=" w-full" />
          </div>
          <div className=" mt-5 md:mt-0 flex flex-wrap justify-center md:justify-end gap-5 md:w-[70%]">
            {recommends.map((book, i) => {
              return (
                <img
                  key={"book" + i}
                  src={book.img}
                  className="w-full sm:w-[48%] md:w-[30%]"
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vocabulary;
