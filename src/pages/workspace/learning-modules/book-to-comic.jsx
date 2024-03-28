import ShowComic from "@/components/Comic/ShowComic";
import Alert from "@/components/utility-component/Alert";
import { useWorkspaceContext } from "@/context/workspaceProvider";
import { setComicStorage } from "@/utils/utils";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
const BookToComics = () => {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState("");
  const { namespace, setNamespace } = useWorkspaceContext();
  const [comic, setComic] = useState([]);
  const [topics, setTopics] = useState([]);
  const [topicId, setTopicId] = useState(0);
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const comic = JSON.parse(localStorage.getItem("comic"));
    if (comic && comic.text) {
      const splited = comic.text.split(/-{2,}/gm);
      setComic(splited);
    }
    if (comic.topics) {
      setTopics(comic.topics.split(/\n/gm).filter((item) => item !== ""));
      setTopicId(comic.topicId);
    }
  }, []);

  console.log(namespace, "ns");
  useEffect(() => {
    let ns = localStorage.getItem("book-namespace");
    if (ns) {
      setNamespace(ns);
    }
  }, []);

  useEffect(() => {
    fetch("/api/books")
      .then((res) => res.json())
      .then((res) => {
        setBooks(res.books);
      }); 
      const mycomic = JSON.parse(localStorage.getItem('comic'))
      console.log(mycomic, 'mcc');
      if(!mycomic.topics){
        setComic([])
        setTopics([])
        
      }
  }, [namespace, topicId]);
  const resetComic = () => {
    localStorage.setItem("comic", JSON.stringify({}));
    setComic([]);
  };

  function resetHandler() {
    localStorage.setItem("book-namespace", "");
    setResult("");
    setTopicId(0);
    setTopics([]);
    setNamespace("");
    resetComic();
  }

  const generateComic = async (query) => {
    // const summary = await generateSummary();
    return fetch("/api/completion", {
      method: "POST",
      body: JSON.stringify({
        input: `write 20 frame comic story with this topic: ${query}, separate every 4 frame with this separator --------- `,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        const text = res.choices[0]?.message?.content;
        setComicStorage("text", text);
        setComic(text.split(/-{2,}/gm));
      });
  };

  async function generateTopic() {
    setComic([]);
    setTopics([]);
    localStorage.setItem("comic", JSON.stringify({}));
    try {
      return fetch("/api/query-pdf", {
        method: "POST",
        body: JSON.stringify({
          namespace,
          query: "Generate 20 topic from this",
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.result) {
            console.log(res.result, "topic");
            setComicStorage("topics", res.result.text);
            setComicStorage("topicId", 0);
            const mytopics = res.result.text
              .split(/\n/gm)
              .filter((item) => item !== "");
            setTopics(mytopics);
            setTopicId(0);

            toast.promise(() => generateComic(mytopics[0]), {
              pending: "Comic Generating..",
              success: "Successfully Generated Comic 👌",
              error: "Oops! Please try again.. 😔",
            });
          }
        });
    } catch (err) {
      reject(err);
    }
  }

  async function generateNewBook(bookId) {
    await resetHandler();
    await setNamespace(bookId);
    await localStorage.setItem("book-namespace", bookId);
    // await generateTopic()
    await toast.promise(() => generateTopic(), {
      pending: "Searching Chapters..",
      success: "We got all chapters 👌",
      error: "Oops! Please try again.. 😔",
    });
  }

  function generateChapterComic(topicId) {
    setTopicId(topicId);
    setComic([]);

    toast.promise(() => generateComic(topics[topicId]), {
      pending: "Comic Generating..",
      success: "Successfully Generated Comic 👌",
      error: "Oops! Please try again.. 😔",
    });
  }
  return (
    <div className="overflow-auto">
      {namespace ? (
        <div>
          <div className="mt-5">
            {/* {result && (
              <div>
                <h2 className="text-xl font-bold">Output:</h2>
                <pre className=" overflow-auto w-full whitespace-pre-wrap break-words leading-snug">
                  {result}
                </pre>
              </div>
            )} */}
            <div className="flex gap-5 items-center">
            <div>
              {books.length > 0 && (
                <>
                  <h4 className="">All Books</h4>
                  <select onChange={(e) => generateNewBook(e.target.value)}>
                    {books.map((book, i) => {
                      return (
                        <option
                          selected={book.refId == namespace}
                          value={book.refId}
                        >
                          {book.name}
                        </option>
                      );
                    })}
                  </select>
                </>
              )}
            </div>
            <div className="  mt-5">
              <div className="w-full">
                <div className="  gap-5 ">
                  <button
                    className="bg-blue-500 min-w-fit text-white px-3 py-2 rounded-md"
                    onClick={() => {
                      toast.promise(generateTopic, {
                        pending: "Searching Chapters..",
                        success: "We got all chapters 👌",
                        error: "Oops! Please try again.. 😔",
                      });
                    }}
                  >
                    Generate
                  </button>
                </div>
              </div>
            </div>
            </div>
            <div className="mt-5">
              {topics.length > 1 && (
                <>
                  <h4 className="text-">Book Chapters</h4>
                  <select
                    onChange={(e) => generateChapterComic(e.target.value)}
                  >
                    {topics.length > 1 &&
                      topics.map((t, i) => {
                        return (
                          <option selected={topicId == i} value={i}>
                            {t}
                          </option>
                        );
                      })}
                  </select>
                </>
              )}
              <div className="mt-4">
                {comic.length > 0 && (
                  <ShowComic comic={comic} topicId={topicId} />
                )}
              </div>
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
