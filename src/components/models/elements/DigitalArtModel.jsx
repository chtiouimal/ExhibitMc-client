import { Text } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { TextureLoader } from 'three';
import { TEXT_ARGS } from "../../../constants/canvas.config";
import { CATEGORIES } from "../../../constants/data.constants";

function DigitalArtModel({data}) {
  const meshRef = useRef();

  const {coverArt, category} = data;
  
  const texture = useLoader(TextureLoader, coverArt);

  const imageDimensions = {
    width: texture.image.width / 100,
    height: texture.image.height / 100,
  };

  return (
    <group>     
      <Text {...TEXT_ARGS} position={[(imageDimensions.width /2) - 0.5 ,(imageDimensions.height /2) + 0.5,0]}>
        {CATEGORIES[category].category.toUpperCase()}
      </Text>
      <mesh ref={meshRef}>
        <planeGeometry args={[imageDimensions.width, imageDimensions.height]} />
        <meshBasicMaterial map={texture} />
      </mesh>
    </group>
  )
}

export default DigitalArtModel