import React, { useState } from "react";
import { BsSunFill, BsFillMoonFill } from "react-icons/bs";
import { AiFillSetting } from "react-icons/ai";

export default function Setting() {
  const [설정, set설정] = useState(false);
  return (
    <div className="relative">
      <div className=" cursor-pointer" onClick={() => set설정((prev) => !prev)}>
        <AiFillSetting className="text-2xl text-gray-500 " />
      </div>
      {설정 && (
        <div className="absolute top-8 -left-28 rounded-md border overflow-hidden cursor-pointer">
          <div className="flex items-center p-2 hover:bg-sky-400 font-semibold">
            <BsFillMoonFill className="mr-2" />
            <div className="w-24 ">Light Mode</div>
          </div>
          <div className="flex items-center p-2 hover:bg-sky-400 font-semibold">
            <BsSunFill className="mr-2" />
            <div>Light Mode</div>
          </div>
        </div>
      )}
    </div>
  );
}
