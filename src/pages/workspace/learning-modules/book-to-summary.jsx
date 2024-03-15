import { useWorkspaceContext } from "@/context/workspaceProvider";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const BookToSummary = () => {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState("");
  const {namespace, setNamespace} = useWorkspaceContext();
  const [query, setQuery] = useState("");
  // `Pickup 30 keywords from this book`,
  const modules1 = [
    `What is the main theme or central idea of the book?`,
    `Can you outline the major parts of the book and their central points?`,
    `What genre or category does this book belong to, and how does that influence its content?`,
    `What is the author’s primary goal in writing this book?`,
    `How is the book organized to achieve its purpose?`,
   ]
   const modules2 = [
    `What are the key arguments or hypotheses the author presents?`,
    `How does the author support these arguments (e.g., with evidence, logic, anecdotes)?`,
    `Are there any assumptions the author makes? If so, what are they?`,
    `What counter-arguments does the author address, if any?`,
   ]

   const modules3 = [
    `Do you find the author’s arguments convincing? Why or why not?`,
    `What are the strengths and weaknessesf of the book?`,
    `How does this book compare to others in the same field or genre?`,
    `Has the author overlooked or left out any important aspects of the topic?`
   ]
   const modules4 = [
    `How has this book changed or enhanced your understanding of the subject?`,
    `Are there ideas or lessons you can apply from this book to your own life or work?`,
    `What questions has the book raised for you?`,
    `What are the most valuable insights you’ve gained from this book?`,
   ]
   const modules5 = [
    `What is the historical, cultural, or social context of the book?`,
    `How does the author’s background or perspective influence the book?`,
    `How does this book fit into the broader conversation about its subject matter?`,
   ]
  console.log(namespace, "ns");
  useEffect(() => {
    let ns = localStorage.getItem("book-namespace");
    if (ns) {
      setNamespace(ns);
    }
  }, []);
  

  function generateSummary() {
    return fetch("/api/query-pdf", {
      method: "POST",
      body: JSON.stringify({
        namespace,
        query: "generate a well detailed summary",
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.result) {
          setResult(res.result.text);
        }else{
          throw new Error("Failed to generate summary")
        }
      });
  }
  function getResult(question) {
    setResult("loading..")
    return fetch("/api/query-pdf", {
      method: "POST",
      body: JSON.stringify({
        namespace,
        query: question,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.result) {
          console.log(res.result, 'result');
          setResult(res.result.text);
        }else{
          throw new Error("Failed to query pdf")
        }
      });
  }

  function resetHandler() {
    localStorage.setItem("book-namespace", "");
    setResult("");
    setNamespace("");
  }

  function queryYourResult() {
    return fetch("/api/query-pdf", {
      method: "POST",
      body: JSON.stringify({
        namespace,
        query,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.result) {
          setResult(res.result.text);
        }else{
          throw new Error("Failed to query pdf")
        }
      });
  }
  const toastObj = {
    pending: 'In progress',
    success: 'Generated 👌',
    error: 'Oops! Please try again.. 😔'
  }
  return (
    <div className="overflow-auto">
      {namespace ? (
        <div>
          <div className="flex gap-5 justify-between mx-5">
            <div className="w-full">
              <div className="flex gap-5 my-3 ">
                <button
                  button
                  className="bg-blue-500 text-white px-3 py-2 rounded-md"
                  onClick={()=>toast.promise(generateSummary, toastObj)}
                >
                  Generate Summary
                </button>
              </div>
              <div className="  gap-5 ">
                <textarea
                  onChange={(e) => setQuery(e.target.value)}
                  className="px-4 min-h-[200px] focus:outline-none p-3 border-2 rounded-xl w-full text-gray-500"
                  type="text"
                  placeholder="ask your query.."
                />
                <button
                  onClick={()=>toast.promise(queryYourResult, toastObj)}
                  className="bg-blue-500 min-w-fit text-white px-3 py-2 rounded-md"
                >
                  Get Result
                </button>
              </div>
              {/* Show Result  */}
              <div className="mt-5">
                {result && (
                  <div>
                    <h2 className="text-xl font-bold">Output:</h2>
                    <pre className=" overflow-auto w-full whitespace-pre-wrap break-words leading-snug">
                      {result=="loading.."? "loading..": result}
                    </pre>
                  </div>
                )}
              </div>
              {/* 20 Questions and Buttons  */}
              <div className=" p-5 grid grid-cols-2 gap-10  ">
                <div>
                  <div>
                    <h3 className="text-xl font-semibold text-center my-5">Understanding the Structure and Purpose </h3>
                  </div>
                  <div >
                    {
                      modules1.map((question, i)=>{
                        return (
                          <div>
                            <button className="bg-blue-500 text-left text-white px-2 py-1 my-1 rounded-md text sm" onClick={()=>toast.promise(()=>getResult(question), toastObj)}>{question}</button>
                          </div>
                        )
                      })
                    }
                  </div>
                </div>
                <div>
                  <div>
                    <h3 className="text-xl font-semibold text-center my-5">Engaging with the Author’s Arguments</h3>
                  </div>
                  <div >
                    {
                      modules2.map((question, i)=>{
                        return (
                          <div>
                            <button className="bg-blue-500 text-left text-white px-2 py-1 my-1 rounded-md text sm" onClick={()=>toast.promise(()=>getResult(question), toastObj)}>{question}</button>
                          </div>
                        )
                      })
                    }
                  </div>
                </div>
                <div>
                  <div>
                    <h3 className="text-xl font-semibold text-center my-5">Critical Evaluation</h3>
                  </div>
                  <div >
                    {
                      modules3.map((question, i)=>{
                        return (
                          <div>
                            <button className="bg-blue-500 text-left text-white px-2 py-1 my-1 rounded-md text sm" onClick={()=>toast.promise(()=>getResult(question), toastObj)}>{question}</button>
                          </div>
                        )
                      })
                    }
                  </div>
                </div>
                <div>
                  <div>
                    <h3 className="text-xl font-semibold text-center my-5">Personal Reflection and Application</h3>
                  </div>
                  <div >
                    {
                      modules4.map((question, i)=>{
                        return (
                          <div>
                            <button className="bg-blue-500 text-left text-white px-2 py-1 my-1 rounded-md text sm" onClick={()=>toast.promise(()=>getResult(question), toastObj)}>{question}</button>
                          </div>
                        )
                      })
                    }
                  </div>
                </div>
                <div>
                  <div>
                    <h3 className="text-xl font-semibold text-center my-5">Contextual Understanding</h3>
                  </div>
                  <div >
                    {
                      modules4.map((question, i)=>{
                        return (
                          <div>
                            <button className="bg-blue-500 text-left text-white px-2 py-1 my-1 rounded-md text sm" onClick={()=>toast.promise(()=>getResult(question), toastObj)}>{question}</button>
                          </div>
                        )
                      })
                    }
                  </div>
                </div>
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

export default BookToSummary;
