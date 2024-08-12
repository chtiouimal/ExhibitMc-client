import { useEffect } from "react";
import ArtCover from "../../canvas/ArtCover"
import Record from "../../canvas/Record"
import { Text } from "@react-three/drei";
import { CATEGORIES } from "../../../constants/data.constants";
import { TEXT_ARGS } from "../../../constants/canvas.config";

function MusicModel({clicked, setClicked, index, data, playerContext}) {

  const {coverArt,category} = data
    
  useEffect(() => {
    if (playerContext.isPlaying && playerContext.trackIndex === index) {
      setClicked(true)
    } else {
      setClicked(false)
    }
  },[playerContext.isPlaying])

  return (
    <>
      <Text {...TEXT_ARGS} position={[4.5,5.5,0]}>{CATEGORIES[category].category.toUpperCase()}</Text>
      <ArtCover
        clicked={playerContext.trackIndex === index && clicked} 
        img={coverArt} />
      <Record clicked={playerContext.trackIndex === index && clicked} />
    </>
  )
}

export default MusicModel