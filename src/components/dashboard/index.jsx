"use client";
import React from "react";
import Banner from "./banner";

import LearningAssetsSlider from "./learningAssetsSlider";
import LearningModulesSlider from "./learningModulesSlider";

function Dashboard() {
  return (
    <div className="">
      <Banner />
      <LearningAssetsSlider />
      <LearningModulesSlider />
    </div>
  );
}

export default Dashboard;
