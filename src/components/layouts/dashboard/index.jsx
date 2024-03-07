"use client";
import { useWorkspaceContext } from "../../../context/workspaceProvider";
import Header from "./header";
import Sidebar from "./sidebar";

export default function DashboardLayout({ children }) {
  const { sidebar, setSidebar } = useWorkspaceContext();

  return (
    <main className="flex flex-col min-h-screen flex-grow ">
      {/* <Sidebar className="fixed hidden xl:block dark:bg-gray-50" /> */}
      {/* <div> */}
      <Header />
      {/* </div> */}
      <div
        className={` ${
          !sidebar
            ? "xl:ms-[10px] xl:w-[calc(100%-10px)]"
            : "mx-4 xl:ms-[270px] xl:w-[calc(100%-255px)] "
        } flex w-full flex-col duration-700  relative  my-2 mt-[24px] `}
      >
        <div>
          <Sidebar className="fixed hidden xl:block dark:bg-gray-50 top-[80px] " />
        </div>
        {/* <div className="h-full w-full bg-black"></div> */}
        <div
          className={` flex flex-grow flex-col ${
            !sidebar
              ? "mr-4"
              : "px-4 pb-6 md:px-5 lg:px-6 lg:pb-8 3xl:px-8  4xl:px-10 4xl:pb-9"
          }  ml-4 overflow-x-hidden `}
        >
          {children}
        </div>
      </div>
    </main>
  );
}
