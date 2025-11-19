import React from "react";
import gif from "../images/binified-blooms-hub-bbh.gif";

const Response = () => {
  return (
    <div className="flex flex-col gap-1 items-center justify-center w-full h-dvh">
      <img src={gif.src} alt="Malupiton Bini" />
      <h2 className="text-3xl">Sabi na eh crush mo ko</h2>
    </div>
  );
};

export default Response;
