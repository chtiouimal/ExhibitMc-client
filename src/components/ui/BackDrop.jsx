import React, { useContext, useEffect } from "react";
import { AudioPlayerContext } from "../../contexts/AudioPlayerContext";

const BackDrop = () => {
  const {playerContext} = useContext(AudioPlayerContext)

  useEffect(() => {
    document.documentElement.style.setProperty("--active-color", playerContext?.selectedTrack?.color || '#060504');
  }, [playerContext.trackIndex, playerContext?.selectedTrack?.color]);

  return <div className="color-backdrop" />;
};

export default BackDrop;
