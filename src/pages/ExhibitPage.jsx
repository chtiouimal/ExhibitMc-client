import { Canvas } from "@react-three/fiber"
import { AudioPlayerGUI, BackDrop, ControlsPreset, EnvPreset } from "../components"
import { Grid } from "@react-three/drei"
import AudioContextProvider from "../contexts/AudioPlayerContext"
import useAxios from "../hooks/useAxios"
import { useEffect, useState } from "react"
import Model from "../components/canvas/Model"

const ExhibitPage = () => {
  const {data, loading, error, get} = useAxios()
  const [selectedList, setSelectedList] = useState([])
  
  useEffect(() => {
    get(import.meta.env.VITE_SELECTED);
  },[])

  useEffect(() => {
    if(!loading) {
      setSelectedList(data)
    }
  },[loading])

  return (
    <AudioContextProvider>      
      <Canvas>
        <EnvPreset />
        <ControlsPreset />
        <ambientLight intensity={1} />
        <Grid args={[12, 12]} sectionColor="#EAE9E8" sectionThickness={1.5} cellThickness={0} position={[0,-2,0]} />
        {selectedList?.map((e,i) => <Model key={i} data={e} index={i} />)}
      </Canvas>
      <BackDrop />
      <AudioPlayerGUI />
    </AudioContextProvider>
  )
}

export default ExhibitPage