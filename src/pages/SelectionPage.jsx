import { ModelsList, SelectedList } from "../components"
import SettingsContextProvider from "../contexts/SettingsContext"

const SelectionPage = () => {
  return (
    <SettingsContextProvider>
        <div className="mc-page">
          <div style={{display: "flex", justifyContent: "center", width: "100%"}}>
            <SelectedList />
          </div>
          <div style={{display: "flex", justifyContent: "center", width: "100%"}}>
            <ModelsList />
          </div>
        </div>
    </SettingsContextProvider>
  )
}

export default SelectionPage