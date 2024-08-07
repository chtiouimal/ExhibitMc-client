import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Vector3 } from "three";
import DISC from "../../assets/disc_texture.png"
import { circleGeo } from "../../utils/geometry.helper";

const Record = ({clicked}) => {
  const record = useRef();
  const discTexture = useTexture(DISC);

  const vec = new Vector3(clicked ? 3 : 0, 0, 0);

  useFrame((state) => {
    setTimeout(() => {
      record?.current.position.lerp(vec, 0.1);
      if (clicked) {
        record.current.rotation.z = state.clock.getElapsedTime();
      }
    });
    return null;
  });

  return (
    <mesh
      ref={record}
      position={[0, 0, 0]}
      geometry={circleGeo({ r: 4.5, s: 64 })}
    >
      <meshStandardMaterial attach="material" map={discTexture} />
    </mesh>
  )
}

export default Record