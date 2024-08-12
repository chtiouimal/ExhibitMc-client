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

const TEXT_ARGS = {
    scale: 0.03,
    color: '#EAE9E8',
    fontSize: 12,
    maxWidth: 200,
    lineHeight: 1,
    letterSpacing: 0.02,
    textAlign: 'left',
    font: 'https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff',
    anchorX: 'right',
    anchorY: 'middle'
  };

export { CANVAS_CONFIG, MODEL_CONFIG, TEXT_ARGS };
