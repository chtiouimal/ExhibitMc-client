import { useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { TextureLoader } from 'three';

function DigitalArtModel({data}) {
  const meshRef = useRef();
  const texture = useLoader(TextureLoader, data?.coverArt);

  const imageDimensions = {
    width: texture.image.width / 100,
    height: texture.image.height / 100,
  };

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[imageDimensions.width, imageDimensions.height]} />
      <meshBasicMaterial map={texture} />
    </mesh>
  )
}

export default DigitalArtModel