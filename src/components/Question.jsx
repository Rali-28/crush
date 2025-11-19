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
      <div className="flex flex-col items-center justify-center w-full h-screen overflow-hidden">
        <img src={meme.src} alt="" />
        <h2>Crush mo ba ako?</h2>
        <div className="relative w-full text-center h-fit">
          <button onClick={onYes}>OO</button>
          <button
            onClick={randomizer}
            className="relative"
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
