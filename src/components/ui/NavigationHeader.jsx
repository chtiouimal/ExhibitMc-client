import { NavLink } from "react-router-dom"
import LOGO from "../../assets/mc_logo.svg"

const NavigationHeader = () => {

  return (
    <>
        <div className="mc-main-layout--left">
            <NavLink to="">
                <img src={LOGO} alt="mc_logo" />
            </NavLink>
        </div>
        <div className="mc-main-layout--right">
            <NavLink to="/settings">
                Settings
            </NavLink>
        </div>
    </>
  )
}

export default NavigationHeader