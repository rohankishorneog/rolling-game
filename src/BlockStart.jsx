import React from "react";
import { floor1Material, boxGeometry } from "./materials";

const BlockStart = ({ position = [0, 0, 0] }) => {
  return (
    <group position={position}>
      <mesh
        geometry={boxGeometry}
        scale={[4, 0.2, 4]}
        receiveShadow
        position={[0, -0.1, 0]}
        material={floor1Material}
      />
    </group>
  );
};

export default BlockStart;
