import * as THREE from "three";

// geometry

const frameGeo = (args) => {
  return new THREE.BoxGeometry(args.x, args.y, args.z);
};

const circleGeo = (args) => {
  return new THREE.CircleGeometry(args.r, args.s);
};

const planeGeo = (args) => {
  return new THREE.PlaneGeometry(args.x, args.y);
};

// material

const blackMaterial = new THREE.MeshStandardMaterial({ color: "black" });

export { frameGeo, circleGeo, planeGeo, blackMaterial };
