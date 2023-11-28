import { useContext, useEffect, useRef, useState } from "react"
import { CaretRightOutlined, PauseOutlined } from "@ant-design/icons"
import { Radio } from "antd"
import { SettingsContext } from "../../contexts/SettingsContext"
import { AudioPlayerContext } from "../../contexts/AudioPlayerContext"

const ListItem = ({model,index}) => {
  const {settingsContext} = useContext(SettingsContext)
  const {playerContext, setPlayerContext} = useContext(AudioPlayerContext);
  const [play, setPlay] = useState(false)

  const handlePlay = () => {
    setPlay(!play)
    let player = {...playerContext, isPlaying: !play, trackIndex: index, selectedTrack: model, type: "LIST"}
    setPlayerContext(player)
  }

  useEffect(() => {
    if (playerContext.isPlaying && playerContext.trackIndex === index && playerContext.type === "LIST") {
      setPlay(true)
    } else {
      setPlay(false)
    }
  },[playerContext.isPlaying, playerContext.trackIndex])

  return (
    <div className="mc-card-light">
      {settingsContext.checkmode ? <Radio className="mc-radio" value={model}></Radio> : null}
      <div className="mc-img-light">
        <img src={model.coverArt} alt={model.songName} />
        <button className="mc-btn-round mc-btn-outlined" onClick={handlePlay}>{play ? <PauseOutlined /> : <CaretRightOutlined />}</button>
      </div>
      {/* <audio ref={audioRef} src={model.music} /> */}
      <div className="mc-title-light">
        <h6>{model?.songName.length > 20 ? model?.songName.substring(0, 17) + "...": model?.songName}</h6>
        <span>{model?.songArtist.length > 20 ? model?.songArtist.substring(0, 17) + "...": model?.songArtist}</span>
      </div>
    </div>
  )
}

export default ListItem