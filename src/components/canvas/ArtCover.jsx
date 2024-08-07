import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Vector3 } from "three";
import { frameGeo } from "../../utils/geometry.helper";

const ArtCover = ({ clicked, img }) => {
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