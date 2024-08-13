import { useContext } from "react"
import { AudioPlayerContext } from "../../contexts/AudioPlayerContext"
import { CaretRightOutlined, PauseOutlined } from "@ant-design/icons"

const AudioPlayerGUI = () => {
  const {playerContext, setPlayerContext} = useContext(AudioPlayerContext)

  const handleClick = () => {
    setPlayerContext(prev => ({...prev, isPlaying: !prev.isPlaying}))
  }

  return Object.keys(playerContext.selectedTrack).length > 0 && playerContext.type === "SELECTED" && playerContext?.selectedTrack.music !== null ? (
    <div className="mc-audioplayer-gui">
        <div className="mc-audioplayer-img" onClick={handleClick}>
            <img src={playerContext.selectedTrack.coverArt} className={playerContext.isPlaying ? "mc-rotate-animation" : ""} alt={playerContext.selectedTrack.songName} />
            <span>{playerContext.isPlaying ? <PauseOutlined /> : <CaretRightOutlined />}</span>
        </div>
        <div className="mc-audioplayer-details">
            <h4>{playerContext.selectedTrack.songName}</h4>
            <span>{playerContext.selectedTrack.songArtist}</span>
        </div>
    </div>
  ) : null
}

export default AudioPlayerGUI