import { createContext, useEffect, useMemo, useRef, useState } from "react";
import { useLocation } from 'react-router-dom';

export const AudioPlayerContext = createContext();

const AudioContextProvider = ({children}) => {
    const [playerContext, setPlayerContext] = useState({
      trackIndex: -1,
      isPlaying: false,
      selectedTrack: {},
      type: "SELECTED",
    })

    const value = useMemo(() => ({ playerContext, setPlayerContext }),[playerContext])
    
    const location = useLocation();

    const audioRef = useRef();
    const intervalRef = useRef();
    const isReady = useRef(false);

    useEffect(() => {
      if (playerContext.isPlaying) {
          audioRef.current.pause();
      }
      const newAudio = new Audio(playerContext?.selectedTrack?.music)
      audioRef.current = newAudio

    }, [playerContext.selectedTrack])

    
    const startTimer = () => {
      // Clear any timers already running
      clearInterval(intervalRef.current);

      intervalRef.current = setInterval(() => {
        if (audioRef.current.ended) {
          audioRef.current.pause();
          setPlayerContext(prev => ({...prev, isPlaying: false}))
        }
      }, [1000]);
    };

    // Handles cleanup and setup when changing tracks
    useEffect(() => {
      if (playerContext.trackIndex != -1) {
        audioRef.current.pause();
        audioRef.current = new Audio(playerContext?.selectedTrack?.music);
        // setTrackProgress(audioRef.current.currentTime);
        if (isReady.current) {
          audioRef.current.play();
          setPlayerContext(prev => ({...prev, isPlaying: true}));
          startTimer();
        } else {
          // Set the isReady ref as true for the next pass
          isReady.current = true;
        }
      }
    }, [playerContext.trackIndex]);

    useEffect(() => {
      if (playerContext.isPlaying) {
        audioRef.current.play();
      } else {
        if (audioRef.current !== undefined) {
          audioRef.current.play().then(_ => {
            audioRef.current.pause();
          })
          .catch(error => {
            console.log("media is paused")
          })
        }
      }
    }, [playerContext.isPlaying]);

    useEffect(() => {
      if (audioRef.current) {
        audioRef.current.pause();
        setPlayerContext(prev => ({...prev, isPlaying: false}));
        startTimer();
      }  
    }, [location.pathname]); 

  return (
    <AudioPlayerContext.Provider value={value}>
      {children}
    </AudioPlayerContext.Provider>
  )
}

export default AudioContextProvider