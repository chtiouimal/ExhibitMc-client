import { OrbitControls } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";

const ControlsPreset = (props) => {

  const { camera, gl } = useThree();
  const ref = useRef();

  useFrame(() => {
    ref.current.update();
  });

  return (
    <OrbitControls
      enablePan={false}
      enableZoom={false}
      maxPolarAngle={Math.PI / 1.6}
      ref={ref}
      target={[0, 0, 0]}
      {...props}
      args={[camera, gl.domElement]}
    />
  )
}

export default ControlsPreset