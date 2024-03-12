import ShowComic from "@/components/Comic/ShowComic";
import { useWorkspaceContext } from "@/context/workspaceProvider";
import { setComicStorage } from "@/utils/utils";
import React, { useEffect, useState } from "react";

const BookToComics = () => {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState("");
  const {namespace, setNamespace} = useWorkspaceContext()
  const [comic, setComic] = useState([]);

  useEffect(() => {
    const comic = JSON.parse(localStorage.getItem("comic"));
    if (comic && comic.text) {
      const splited = comic.text.split(/-{2,}/gm);
      setComic(splited);
      
    }
  }, []);


  console.log(namespace, "ns");
  useEffect(() => {
    let ns = localStorage.getItem("book-namespace");
    if (ns) {
      setNamespace(ns);
    }
  }, []);
  function loadPdf() {
    const form = new FormData();
    form.append("file", file);
    fetch("/api/store-pdf-to-vectordb", {
      method: "POST",
      body: form,
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res, "result");
        localStorage.setItem("book-namespace", JSON.stringify(res.namespace));
        setNamespace(res.namespace);
      });
  }
  const resetComic = () =>{
    localStorage.setItem("comic", JSON.stringify({}));
    setComic([])
  }

  function resetHandler() {
    localStorage.setItem("book-namespace", "");
    setResult("");
    setNamespace("");
    resetComic()
  }

  async function generateSummary() {
    return new Promise((resolve, reject) => {
      fetch("/api/query-pdf", {
        method: "POST",
        body: JSON.stringify({
          namespace,
          query: "generate a well detailed summary",
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.result) {
            resolve(res.result);
          }
        });
    });
  }




  const generateComic = async () => {
    resetComic()
    const summary = await generateSummary();
    fetch("/api/completion", {
      method: "POST",
      body: JSON.stringify({
        input: `To generate a comic use ---------  after every 4 frames,  topic: "${summary.text}"`,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        const text = res.choices[0]?.message?.content;
        setComicStorage("text", text);
        setComic(text.split(/-{2,}/gm));
      });
  };
  return (
    <div className="overflow-auto">
      {namespace ? (
        <div>
          <div className="flex gap-5 justify-between mx-5">
            <div className="w-full">
              <div className="  gap-5 ">
                <button
                  className="bg-blue-500 min-w-fit text-white px-3 py-2 rounded-md"
                  onClick={generateComic}
                >
                  Generate Comic
                </button>
              </div>
            </div>

            <div className="my-3  min-w-fit">
              <button
                className="bg-red-500  text-white px-3 py-2 rounded-md"
                onClick={resetHandler}
              >
                Reset
              </button>
            </div>
          </div>
          <div className="mt-5">
            {/* {result && (
              <div>
                <h2 className="text-xl font-bold">Output:</h2>
                <pre className=" overflow-auto w-full whitespace-pre-wrap break-words leading-snug">
                  {result}
                </pre>
              </div>
            )} */}

            <div className="mt-4">
              {comic.length>0 && <ShowComic comic={comic} />}
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center space-y-3">
          <h3 className="font-semibold text-xl">No Data</h3>
          <p>Please Upload a Book</p>
        </div>
      )}
    </div>
  );
};

export default BookToComics;
