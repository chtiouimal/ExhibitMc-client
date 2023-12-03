import { useFrame } from "@react-three/fiber";
import { Suspense, useContext, useEffect, useRef, useState } from "react"
import { Vector3 } from "three";
import ArtCover from "./ArtCover";
import { AudioPlayerContext } from "../../contexts/AudioPlayerContext";
import { MODEL_CONFIG } from "../../constants/canvas.config";
import Record from "./Record";
import useWindowSize from "../../hooks/useWindowSize";
import LoadingCube from "./LoadingCube";

const Model = ({index,data}) => {
  const {playerContext, setPlayerContext} = useContext(AudioPlayerContext);
  const {width} = useWindowSize();
  const [clicked, setClicked] = useState(false)

  const group = useRef();

  const { position, rotation, viewPos } = MODEL_CONFIG[index];
  const {coverArt} = data;

  const handleClick = async () => {
    setClicked(!clicked)
    let player = {...playerContext, isPlaying: !clicked, trackIndex: index, selectedTrack: data,type: "SELECTED"}
    setPlayerContext(player)
  };

  useFrame((state) => {
    if (playerContext.trackIndex === index && clicked) {
      state.camera.lookAt(0, 0, 0);
      state.camera.position.lerp(
        new Vector3().set(viewPos.x, viewPos.y, viewPos.z),
        0.09,
      );
    }
    return null;
  });

  useEffect(() => {
    if (playerContext.isPlaying && playerContext.trackIndex === index) {
      setClicked(true)
    } else {
      setClicked(false)
    }
  },[playerContext.isPlaying])

  return (
    <Suspense fallback={<LoadingCube position={position} rotation={rotation} scale={0.09} />}>
      <group
        ref={group}
        position={position}
        rotation={rotation}
        scale={clicked ? width > 430 ? 0.5 : 0.3 : 0.5}
        onClick={handleClick}
      >
        <ArtCover clicked={playerContext.trackIndex === index && clicked} img={coverArt} />
        <Record clicked={playerContext.trackIndex === index && clicked} />
      </group>
    </Suspense>
  )
}

export default Model;