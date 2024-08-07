import { Sphere } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useRef } from "react"
import { Vector3 } from "three"
import { MODEL_CONFIG } from "../../constants/canvas.config"

const LoadingModel = ({index, scale}) => {
    const one = useRef()
    const two = useRef()
    const three = useRef()

    
  const { position, rotation } = MODEL_CONFIG[index];

  const vec1 = new Vector3(-3, 0, 0);
  const vec2 = new Vector3(0, 0, 0);
  const vec3 = new Vector3(3, 0, 0);
  
  useFrame(({clock}) => {
    setTimeout(() => {
      one.current.position.lerp(vec1, 0.1);
      two.current.position.lerp(vec2, 0.1);
      three.current.position.lerp(vec3, 0.1);
    });
    
    setTimeout(() => {
      one.current.position.y = Math.sin(clock.getElapsedTime()) * 1.2
      two.current.position.y = Math.sin(clock.getElapsedTime()) * -1.2
      three.current.position.y = Math.sin(clock.getElapsedTime()) * 1.2
    },300);
    
    return null;
  });

  return (
    <group  position={position} rotation={rotation} scale={scale}>
        <Sphere ref={one}>
        <meshStandardMaterial color="#E1C258" />
        </Sphere>
        <Sphere ref={two}>
        <meshStandardMaterial color="#E1C258" />
        </Sphere>
        <Sphere ref={three}>
        <meshStandardMaterial color="#E1C258" />
        </Sphere>
    </group>
  )
}

export default LoadingModel