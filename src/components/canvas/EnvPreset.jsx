import { useRef } from "react";
import { BackSide } from "three";

const EnvPreset = () => {
  const env = useRef();

  return (
    <mesh ref={env}>
      <sphereGeometry args={[50, 20, 20]} />
      <meshStandardMaterial opacity={0.1} transparent side={BackSide} />
    </mesh>
  );
}

export default EnvPreset