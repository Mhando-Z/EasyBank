import React, { useState } from "react";

function HeroSect() {
  return (
    <div className="mt-20">
      <div className="flex flex-col items-center justify-between gap-5 md:flex-row">
        <div className="h-[200px]  w-full bg-black"></div>
        <div className="h-[500px] w-full bg-black"></div>
      </div>
    </div>
  );
}

export default HeroSect;
