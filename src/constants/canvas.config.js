const CANVAS_CONFIG = {
  orbit: true,
  index: 0,
  enabled: false,
  type: 0,
  artist: { name: "", link: "" },
};

const MODEL_CONFIG = [
  {
    key: 1,
    position: [0, 1, -6],
    rotation: [0, 0, 0],
    viewPos: { x: 0, y: 0, z: Math.PI },
    light: 0,
    lightPos: { x: 0, z: 200 },
  },
  {
    key: 2,
    position: [-6, 1, 0],
    rotation: [0, Math.PI / 2, 0],
    viewPos: { x: Math.PI, y: 0, z: 0 },
    light: Math.PI / 2,
    lightPos: { x: 200, z: 0 },
  },
  {
    key: 3,
    position: [0, 1, 6],
    rotation: [0, Math.PI, 0],
    viewPos: { x: 0, y: 0, z: -Math.PI },
    light: Math.PI,
    lightPos: { x: 0, z: -200 },
  },
  {
    key: 4,
    position: [6, 1, 0],
    rotation: [0, -Math.PI / 2, 0],
    viewPos: { x: -Math.PI, y: 0, z: 0 },
    light: -Math.PI / 2,
    lightPos: { x: -200, z: 0 },
  },
];

export { CANVAS_CONFIG, MODEL_CONFIG };
