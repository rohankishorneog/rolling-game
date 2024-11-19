import React from "react";
import BlockStart from "./BlockStart";
import BlockSpinner from "./BlockSpinner";

const Level = () => {
  return (
    <>
      <BlockStart position={[0, 0, 4]} />
      <BlockSpinner position={[0, 0, 0]} />
    </>
  );
};

export default Level;
