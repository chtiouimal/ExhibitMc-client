import { createContext, useMemo, useState } from "react";

export const SettingsContext = createContext();


const SettingsContextProvider = ({children}) => {
  const [settingsContext, setSettingsContext] = useState({
    itemIndex: -1,
    selectedItem: {},
    checkMode: false,
    removedItem: "",
    itemPosition: -1,
    selected1: null,
    selected2: null,
    selected3: null,
    selected4: null,
    selectedName: null
  })

  const value = useMemo(() => ({ settingsContext, setSettingsContext }),[settingsContext])

  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  )
}

export default SettingsContextProvider