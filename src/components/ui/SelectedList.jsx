import { useContext, useEffect } from "react"
import { SettingsContext } from "../../contexts/SettingsContext"
import useAxios from "../../hooks/useAxios"
import { Skeleton } from "antd"
import SelectedCard from "./SelectedCard"

const SelectedList = () => {
  const {settingsContext, setSettingsContext} = useContext(SettingsContext)
  const {data, loading, error, get} = useAxios()
  
  useEffect(() => {
    get(import.meta.env.VITE_SELECTED);
  },[])
  
  useEffect(() => {
    if (!loading) {
        setSettingsContext(prev => ({...prev, 
            selected1: data.find((item) => item.position === 0) ? data.find((item) => item.position === 0) : null,
            selected2: data.find((item) => item.position === 1) ? data.find((item) => item.position === 1) : null,
            selected3: data.find((item) => item.position === 2) ? data.find((item) => item.position === 2) : null,
            selected4: data.find((item) => item.position === 3) ? data.find((item) => item.position === 3) : null,
        }))
    }
  },[loading])

  return (
    <header style={{display: "flex", justifyContent: "center", width: "100%", gap: 8, marginBottom: 64}}>
        {
         loading ? new Array(4).fill(null).map((_,i) => <Skeleton.Image className="mc-card-loading" key={i + 4} active={true} />) 
            :
          <>
            <SelectedCard model={settingsContext.selected1} position={0} />
            <SelectedCard model={settingsContext.selected2} position={1} />
            <SelectedCard model={settingsContext.selected3} position={2} />
            <SelectedCard model={settingsContext.selected4} position={3} />
          </> 
        }
    </header>
  )
}

export default SelectedList