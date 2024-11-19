import React from "react";
import BlockStart from "./BlockStart";
import BlockSpinner from "./BlockSpinner";
import BlockLimbo from "./BlockLimbo";

const Level = () => {
  return (
    <>
      <BlockStart position={[0, 0, 12]} />
      <BlockSpinner position={[0, 0, 8]} />
      <BlockLimbo position={[0, 0, 4]} />
    </>
  );
};

export default Level;
