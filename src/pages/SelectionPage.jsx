import { useState } from "react"
import { ModelsList, SelectedList } from "../components"
import SettingsContextProvider from "../contexts/SettingsContext"

const SelectionPage = () => {
  const [count,setCount] = useState(null)

  return (
    <SettingsContextProvider>
        <div className="mc-page">
          <div style={{display: "flex", justifyContent: "center", width: "100%", position: "absolute"}}>
            <SelectedList count={count} setCount={setCount} />
          </div>
          <div style={{display: "flex", justifyContent: "center", width: "100%", marginTop: 280, position: "absolute", left: "50%", right: "50%", transform: "translateX(-50%)", minWidth: "100%", backgroundColor: "#000", marginBottom: 100}}>
            <ModelsList setCount={setCount} />
          </div>
        </div>
    </SettingsContextProvider>
  )
}

export default SelectionPage