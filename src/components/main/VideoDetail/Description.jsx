import React from "react";

export default function Description({ description, show, setShow }) {
  const handleClick = () => {
    setShow((prev) => !prev);
  };
  return (
    <>
      <div className=" max-w-full  px-2 ">
        {show ? (
          <div className="bg-gray-100 rounded-2xl mb-4 px-4 pt-3 ">
            <pre className="w-64 sm:w-full text-sm whitespace-pre-wrap truncate ">
              {description}
              <div className="mt-10 font-semibold">
                <span className=" cursor-pointer" onClick={handleClick}>
                  show less
                </span>
              </div>
            </pre>
          </div>
        ) : (
          <div
            className="relative min-w-full bg-gray-100 px-4 pt-3 pb-8 rounded-2xl cursor-pointer hover:bg-gray-200 mb-4 "
            onClick={handleClick}
          >
            <pre className="w-64 sm:w-full text-sm whitespace-pre-wrap h-10 overflow-hidden  ">
              {description}
              <p className="absolute bottom-1 font-semibold top">show more</p>
            </pre>
          </div>
        )}
      </div>
    </>
  );
}
