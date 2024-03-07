"use client";
import {
  WorkspaceProvider,
  useWorkspaceContext,
} from "../../../context/workspaceProvider";
import Header from "./header";
import Sidebar from "./sidebar";

export default function WorkspaceLayout({ children }) {
  const { sidebar, setSidebar } = useWorkspaceContext();
  return (
    // <WorkspaceProvider>
    <main className="flex flex-col h-screen flex-grow">
      {/* <Sidebar className="fixed hidden xl:block dark:bg-gray-50" /> */}
      {/* <div> */}
      <Header />
      {/* </div> */}
      <div className="fixed top-[120px] h-[calc(100vh-120px)] w-full ">
        <div className="fixed w-[390px] h-[calc(100vh-120px)] pb-6">
          <div className="relative h-full  ">
            <Sidebar className="absolute h-full hidden  xl:block dark:bg-gray-50 top-0 left-0" />
          </div>
        </div>
        <div
          className={`flex w-full flex-col ${
            sidebar
              ? "xl:ms-[390px] xl:w-[calc(100%-410px)]"
              : " xl:ms-[100px] xl:w-[calc(100%-115px)]"
          }  duration-[700ms]  relative mx-4 h-full`}
        >
          {/* <div className="h-full w-full bg-black"></div> */}
          <div className="flex flex-grow flex-col px-4 pb-6 md:px-5 h-full w-full ml-6">
            {children}
          </div>
        </div>
      </div>
    </main>
    // </WorkspaceProvider>
  );
}
