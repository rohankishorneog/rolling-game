import { useKeyboardControls } from "@react-three/drei";
import React, { useEffect, useRef } from "react";
import useGame from "./stores/useGame";
import { addEffect } from "@react-three/fiber";

const Interface = () => {
  const { forward, backward, leftward, rightward, jump } = useKeyboardControls(
    (state) => state
  );
  const { restart, phase } = useGame((state) => state);

  const time = useRef();

  useEffect(() => {
    const unsubscribeEffect = addEffect(() => {
      const state = useGame.getState();

      let elapsedTime = 0;

      if (state.phase === "playing") elapsedTime = Date.now() - state.startTime;
      else if (state.phase === "ended")
        elapsedTime = state.endTime - state.startTime;

      elapsedTime /= 1000;
      elapsedTime = elapsedTime.toFixed(2);

      if (time.current) time.current.textContent = elapsedTime;
    });
    return () => {
      unsubscribeEffect();
    };

    // ...
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full  pointer-events-none ">
      <div
        className="absolute top-[15%] left-0 w-full  text-lg bg-[#00000033] pt-2 text-center text-[#ffffff] font-semibold"
        ref={time}
      >
        0.0
      </div>
      {phase === "ended" && (
        <div
          className="flex justify-center absolute top-[40%] left-0 w-full text-7xl bg-[#00000033] pointer-events-auto cursor-pointer text-white"
          onClick={restart}
        >
          RESTART
        </div>
      )}
      <div className="absolute bottom-[10%] left-0 w-full">
        <div className="flex justify-center mb-4">
          <div
            className={`w-10 h-10 m-1 border-2 border-white bg-white/25 ${
              forward ? "bg-white/60" : ""
            }`}
          ></div>
        </div>
        <div className="flex justify-center mb-4">
          <div
            className={`w-10 h-10 m-1 border-2 border-white bg-white/25 ${
              leftward ? "bg-white/60" : ""
            }`}
          ></div>
          <div
            className={`w-10 h-10 m-1 border-2 border-white bg-white/25 ${
              backward ? "bg-white/60" : ""
            }`}
          ></div>
          <div
            className={`w-10 h-10 m-1 border-2 border-white bg-white/25 ${
              rightward ? "bg-white/60" : ""
            }`}
          ></div>
        </div>
        <div className="flex justify-center">
          <div
            className={`w-36 h-10 m-1 border-2 border-white bg-white/25 ${
              jump ? "bg-white/60" : ""
            }`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Interface;
