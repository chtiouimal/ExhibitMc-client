import { ModelsList, SelectedList } from "../components"
import SettingsContextProvider from "../contexts/SettingsContext"

const SelectionPage = () => {
  return (
    <SettingsContextProvider>
        <div className="mc-page">
            <SelectedList />
            <ModelsList />
        </div>
    </SettingsContextProvider>
  )
}

export default SelectionPage