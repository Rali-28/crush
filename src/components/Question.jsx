import React from "react";
import { useState } from "react";
import meme from "../images/meme.png";

const Question = ({ onYes }) => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const randomizer = () => {
    const containerWidth = 251;
    const containerHeight = 301;
    const buttonWidth = 50;
    const buttonHeight = 50;
    const maxX = containerWidth - buttonWidth;
    const maxY = containerHeight - buttonHeight;

    setX(Math.random() * maxX - 125);
    setY(Math.random() * maxY - 200);
    console.log(x);
    console.log(y);
  };

  return (
    <div className="flex items-center justify-center w-full h-dvh">
      <div className="flex flex-col gap-1 items-center justify-center w-full h-screen overflow-hidden">
        <img src={meme.src} alt="" />
        <h2 className="text-3xl">Crush mo ba ako?</h2>
        <div className="relative w-full text-center h-fit">
          <button onClick={onYes} className="m-1 inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-gray-600 whitespace-no-wrap bg-white border border-gray-200 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none">OO</button>
          <button
            onClick={randomizer}
            className="m-1 relative inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-gray-600 whitespace-no-wrap bg-white border border-gray-200 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none"
            style={{ top: `${y}px`, left: `${x}px` }}
          >
            HINDI
          </button>
        </div>
      </div>
    </div>
  );
};

export default Question;

<a href="#_" class="">
    Button Text
</a>