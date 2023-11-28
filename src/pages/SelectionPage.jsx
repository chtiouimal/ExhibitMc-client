import { ModelsList, SelectedList } from "../components"
import SettingsContextProvider from "../contexts/SettingsContext"

const SelectionPage = () => {
  return (
    <SettingsContextProvider>
      {/* <AudioContextProvider> */}
        <div className="mc-page">
          <div style={{display: "flex", justifyContent: "center", width: "100%", position: "absolute"}}>
            <SelectedList />
          </div>
          <div style={{display: "flex", justifyContent: "center", width: "100%", marginTop: 280, position: "absolute", left: "50%", right: "50%", transform: "translateX(-50%)", minWidth: "100%", backgroundColor: "#000", marginBottom: 100}}>
            <ModelsList />
          </div>
        </div>
      {/* </AudioContextProvider> */}
    </SettingsContextProvider>
  )
}

export default SelectionPage