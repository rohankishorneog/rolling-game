import * as Three from "three";

export const floor1Material = new Three.MeshStandardMaterial({
  color: "limegreen",
});
export const floor2Material = new Three.MeshStandardMaterial({
  color: "greenyellow",
});
export const obstacleMaterial = new Three.MeshStandardMaterial({
  color: "orangered",
});
export const wallMaterial = new Three.MeshStandardMaterial({
  color: "slategrey",
});

export const boxGeometry = new Three.BoxGeometry(1, 1, 1);
