import useWindowSize from "../../hooks/useWindowSize";
import { Suspense, useContext, useRef, useState } from "react";
import { Vector3 } from "three";
import { MODEL_CONFIG } from "../../constants/canvas.config";
import { useFrame } from "@react-three/fiber";
import MusicModel from "./elements/MusicModel";
import { AudioPlayerContext } from "../../contexts/AudioPlayerContext";
import DigitalArtModel from "./elements/DigitalArtModel";
import AnimationModel from "./elements/AnimationModel";

function ModelObject({index,data}) {
  const {playerContext, setPlayerContext} = useContext(AudioPlayerContext);
  const {width} = useWindowSize();
  const [clicked, setClicked] = useState(false)

  const group = useRef();

  const { position, rotation, viewPos } = MODEL_CONFIG[index];

  const handleClick = async () => {
    setClicked(!clicked)
    if (data?.music) { 
        let player = {...playerContext, isPlaying: !clicked, trackIndex: index, selectedTrack: data,type: "SELECTED"}
        setPlayerContext(player)
    }
  };

  useFrame((state) => {
    if (clicked) {
      state.camera.lookAt(0, 0, 0);
      state.camera?.position.lerp(
        new Vector3().set(viewPos.x, viewPos.y, viewPos.z),
        0.09,
      );
    }
    return null;
  });

  return (
    <Suspense fallback={null}>
      <group
        ref={group}
        position={position}
        rotation={rotation}
        scale={clicked ? width > 430 ? 0.5 : 0.3 : 0.5}
        onClick={handleClick}
      >
        {
          data?.category === 0 ? 
            <MusicModel clicked={clicked} setClicked={setClicked} index={index} data={data} playerContext={playerContext} />
              : data?.category === 3 ?
            <AnimationModel data={data} />
              :
            <DigitalArtModel data={data} />
        }
      </group>
    </Suspense>
  )
}

export default ModelObject