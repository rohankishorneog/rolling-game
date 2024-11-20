import React from "react";
import { floor1Material, boxGeometry } from "./materials";
import { Float, Text } from "@react-three/drei";
import { useThree } from "@react-three/fiber";

const BlockStart = ({ position = [0, 0, 0] }) => {
  const { viewport } = useThree(); 
  const textScale = Math.min(viewport.width / 10, 0.5);
  
  return (
    <group position={position}>
      <Float>
        <Text
          font="./bebas-neue-v9-latin-regular.woff"
          scale={textScale}
          maxWidth={viewport.width / 4} 
          lineHeight={0.75}
          textAlign="right"
          position={[0.75, 0.65, 0]}
          rotation-y={-0.25}
        >
          Marble Race
        </Text>
      </Float>

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
