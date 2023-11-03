import React from "react";
import OverviewContainer from "./OverviewContainer";

export default function HomePage() {
  return (
    <div className="relative">
      <div className="w-screen h-screen bg-neutral-100 absolute top-0 left-0 z-negative2"></div>
      <div
        className="w-screen h-0 absolute top-0 left-0 z-negative1 border-t-[250px] border-t-temper-purple
                border-r-vw border-r-transparent"
      ></div>
      <OverviewContainer />
    </div>
  );
}
