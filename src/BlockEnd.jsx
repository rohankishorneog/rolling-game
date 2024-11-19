import React from "react";
import { floor1Material, boxGeometry } from "./materials";
import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

const BlockEnd = ({ position = [0, 0, 0] }) => {
  const hamburger = useGLTF("./hamburger.glb");
  hamburger.scene.children.forEach((mesh) => {
    mesh.castShadow = true;
  });

  return (
    <group position={position}>
      <mesh
        geometry={boxGeometry}
        scale={[4, 0.2, 4]}
        receiveShadow
        position={[0, -0.1, 0]}
        material={floor1Material}
      />
      <RigidBody
        type="fixed"
        colliders="hull"
        restitution={0.2}
        friction={0}
        position={[0, 0.25, 0]}
      >
        <primitive object={hamburger.scene} scale={0.2} />
      </RigidBody>
    </group>
  );
};

export default BlockEnd;
