import { Text, useVideoTexture } from "@react-three/drei";
import { TEXT_ARGS } from "../../../constants/canvas.config";
import { CATEGORIES } from "../../../constants/data.constants";

function AnimationModel({data}) {

  const {video, category} = data

  const videoTexture = useVideoTexture(video, {
    crossOrigin: 'Anonymous',
    loop: true,
    muted: true,
    start: true,
  });

  return (
    <group>
      <Text {...TEXT_ARGS} position={[4 + 1.5,2.25 + 1.75,0]}>
        {CATEGORIES[category].category.toUpperCase()}
      </Text>
        <mesh scale={3}>
        <planeGeometry args={[4, 2.25]} /> 
        <meshBasicMaterial map={videoTexture} />
        </mesh>
    </group>
  );
}

export default AnimationModel