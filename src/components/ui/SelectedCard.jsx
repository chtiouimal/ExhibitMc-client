import { useContext, useEffect, useRef, useState } from "react"
import { CaretRightOutlined, PauseOutlined,CheckOutlined, HeartFilled, CloseOutlined } from "@ant-design/icons"
import EmptyCard from "./EmptyCard"
import { SettingsContext } from "../../contexts/SettingsContext"
import useAxios from "../../hooks/useAxios"
import { AudioPlayerContext } from "../../contexts/AudioPlayerContext"

const SelectedCard = ({model,position}) => {
  const {settingsContext, setSettingsContext} = useContext(SettingsContext)
  const {playerContext, setPlayerContext} = useContext(AudioPlayerContext);
  const {data,loading, error, put} = useAxios()
  const [play, setPlay] = useState(false)

  const handlePlay = () => {
    setPlay(!play)
    let player = {...playerContext, isPlaying: !play, trackIndex: position, selectedTrack: model, type: "SELECTED"}
    setPlayerContext(player)
  }

  const handleCheckMode = () => {
    setSettingsContext(prev => ({...prev, checkmode: true, itemPosition: position}))
  }

  const handleUnselect = () => {
    put(import.meta.env.VITE_UNSELECT,{musicId: model._id})
    setSettingsContext(prev => ({...prev, [`selected${position + 1}`]: null, removedItem: model._id}))
  }
  
  useEffect(() => {
    if (playerContext.isPlaying && playerContext.trackIndex === position && playerContext.type === "SELECTED") {
      setPlay(true)
    } else {
      setPlay(false)
    }
  },[playerContext.isPlaying, playerContext.trackIndex])

  return (
    model === null ? <EmptyCard clickAction={handleCheckMode} /> : 
    <div className="mc-card">
      <div className="mc-music-img">
        <img src={model?.thumbnail ? model?.thumbnail : model.coverArt} alt={model?.songName} />
      </div>
      <div className="mc-music-details">
        <header>
          <span style={{fontSize: 12}}><HeartFilled /> {model?.likes}</span>
          <span style={{cursor: "pointer"}} onClick={handleUnselect}><CloseOutlined /></span>
        </header>
        <div className="mc-music-title">
          <h4>{model?.songName}</h4>
          <span>{model?.songArtist.length > 20 ? model?.songArtist.substring(0, 17) + "...": model?.songArtist}</span>
        </div>
        <button className="mc-btn-round mc-btn-outlined" onClick={handlePlay}>{play ? <PauseOutlined /> : <CaretRightOutlined />}</button>
      </div>
    </div>
  )
}

export default SelectedCard