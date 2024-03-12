import React, { useContext, useEffect, useState } from "react";

import Link from "next/link";
import vocabularyCategory from "@/data/learningAssets/vocabulary/vocabulary-category";
import { useWorkspaceContext } from "@/context/workspaceProvider";
const parentCategory = Object.keys(vocabularyCategory);

function VocabularyLayout({ children, pageTitle }) {
  const { selectedWord } = useWorkspaceContext();
  return (
    <div className="overflow-auto">
      <div className="lg:flex ">
        <div className="w-full">
          <div className="text-center ">
            <h3 className="my-3 font-bold text-4xl text-slate-700 uppercase">
              {pageTitle} {selectedWord}
            </h3>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default VocabularyLayout;
