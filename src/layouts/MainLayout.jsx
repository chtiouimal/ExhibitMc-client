import { NavLink, Outlet } from "react-router-dom"
import LOGO from "../assets/mc_logo.svg"

const MainLayout = () => {
  return (
    <main className="mc-main-layout">
        <div className="mc-main-layout--left">
            <NavLink to="">
                <img src={LOGO} alt="mc_logo" />
            </NavLink>
            <NavLink to="/exhibit">Explore</NavLink>
        </div>
        <div className="mc-main-layout--right">
            <NavLink to="/settings">
                Settings
            </NavLink>
        </div>
        <Outlet />
    </main>
  )
}

export default MainLayout