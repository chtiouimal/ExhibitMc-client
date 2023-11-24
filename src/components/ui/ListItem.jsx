import { useContext, useRef, useState } from "react"
import { CaretRightOutlined, PauseOutlined } from "@ant-design/icons"
import { Radio } from "antd"
import { SettingsContext } from "../../contexts/SettingsContext"

const ListItem = ({model}) => {
  const {settingsContext} = useContext(SettingsContext)
  const [play, setPlay] = useState(false)
  const audioRef = useRef(null);

  const handlePlay = () => {
    setPlay(!play)
    !play ? audioRef.current.play() : audioRef.current.pause();
  }

  return (
    <div className="mc-card-light">
      {settingsContext.checkmode ? <Radio className="mc-radio" value={model}></Radio> : null}
      <div className="mc-img-light">
        <img src={model.coverArt} alt={model.songName} />
        <button className="mc-btn-round mc-btn-outlined" onClick={handlePlay}>{play ? <PauseOutlined /> : <CaretRightOutlined />}</button>
      </div>
      <audio ref={audioRef} src={model.music} />
      <div className="mc-title-light">
        <h6>{model?.songName.length > 20 ? model?.songName.substring(0, 17) + "...": model?.songName}</h6>
        <span>{model?.songArtist.length > 20 ? model?.songArtist.substring(0, 17) + "...": model?.songArtist}</span>
      </div>
    </div>
  )
}

export default ListItem