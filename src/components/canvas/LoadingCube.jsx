import { useRef } from "react"
import { frameGeo } from "../../utils/geometry.helper"
import { useFrame } from "@react-three/fiber";

const LoadingCube = (props) => {
  const loadingBox = useRef()

  useFrame((state) => {
    setTimeout(() => {
      loadingBox.current.rotation.y = state.clock.getElapsedTime();
    });
    return null;
  });

  return (
    <group {...props}>    
        <mesh
        ref={loadingBox}
        position={[0, 0.5, 0]}
        rotation={[0,0,0]}
        geometry={frameGeo({ x: 4, y: 4, z: 4 })}
        >
        <meshStandardMaterial attach="material" color="#E1C258" />
        </mesh>
    </group>
  )
}

export default LoadingCube