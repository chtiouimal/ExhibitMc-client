import { useEffect } from "react";
import ArtCover from "../../canvas/ArtCover"
import Record from "../../canvas/Record"

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
      <ArtCover
        clicked={playerContext.trackIndex === index && clicked} 
        img={coverArt}
        category={category}
        />
      <Record clicked={playerContext.trackIndex === index && clicked} />
    </>
  )
}

export default MusicModel