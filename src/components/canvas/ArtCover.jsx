import { Text, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { Vector3 } from "three";
import { frameGeo } from "../../utils/geometry.helper";
import { TEXT_ARGS } from "../../constants/canvas.config";
import { CATEGORIES } from "../../constants/data.constants";

const ArtCover = ({ clicked, img, category}) => {
  const frame = useRef();
  const photoTexture = useTexture(img);

  const vec = new Vector3(clicked ? -2 : 0, 0, 0);

  useFrame(() => {
    setTimeout(() => {
      frame?.current?.position.lerp(vec, 0.1);
    });
    return null;
  });

  return (
    <mesh
      ref={frame}
      position={[0, 0.5, 0]}
      geometry={frameGeo({ x: 10, y: 10, z: 0.25 })}
    >
      <Text {...TEXT_ARGS} position={[4.5,5.5,0]}>{CATEGORIES[category].category.toUpperCase()}</Text>
      <meshStandardMaterial attach="material-4" map={photoTexture} />
      <meshStandardMaterial attach="material-0" color="black" />
      <meshStandardMaterial attach="material-1" color="black" />
      <meshStandardMaterial attach="material-2" color="black" />
      <meshStandardMaterial attach="material-3" color="black" />
      <meshStandardMaterial attach="material-5" color="black" />
    </mesh>
  )
}

export default ArtCover