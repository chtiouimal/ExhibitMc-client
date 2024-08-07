import { Outlet, useLocation } from "react-router-dom"
import AudioContextProvider from "../contexts/AudioPlayerContext"
import { LayoutFooter, NavigationHeader } from "../components"

const MainLayout = () => {
  
  const location = useLocation();

  return (
    <AudioContextProvider>
        <main className="mc-main-layout">
            <NavigationHeader />
            <Outlet />
            {location.pathname === "/" ? <LayoutFooter /> : null}
        </main>
    </AudioContextProvider>
  )
}

export default MainLayout