import { Outlet } from "react-router-dom"
import AudioContextProvider from "../contexts/AudioPlayerContext"
import { NavigationHeader } from "../components"

const MainLayout = () => {
  return (
    <AudioContextProvider>
        <main className="mc-main-layout">
            <NavigationHeader />
            <Outlet />
        </main>
    </AudioContextProvider>
  )
}

export default MainLayout