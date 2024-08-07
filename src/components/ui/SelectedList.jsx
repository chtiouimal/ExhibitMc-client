import { useContext, useEffect, useState } from "react"
import { SettingsContext } from "../../contexts/SettingsContext"
import useAxios from "../../hooks/useAxios"
import { Skeleton } from "antd"
import SelectedCard from "./SelectedCard"

const SelectedList = ({count, setCount}) => {
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
        setCount(data.length)
    }
  },[loading])

  return (
    <div>
      <span style={{width: "100%", display: "flex", justifyContent: "flex-end", padding: "0 46px 8px"}}>{!loading ? `0${count}` : "00"} / 04</span>
      <header className="mc-selected-list" style={{display: "flex", gap: 8, overflowY: "hidden", maxWidth: "100vw"}}>
          {
          loading ? new Array(4).fill(null).map((_,i) => <Skeleton.Image className="mc-card-loading" key={i + 4} active={true} />) 
              :
            <>
              <SelectedCard model={settingsContext.selected1} position={0} setCount={setCount} />
              <SelectedCard model={settingsContext.selected2} position={1} setCount={setCount} />
              <SelectedCard model={settingsContext.selected3} position={2} setCount={setCount} />
              <SelectedCard model={settingsContext.selected4} position={3} setCount={setCount} />
            </> 
          }
      </header>
    </div>
  )
}

export default SelectedList