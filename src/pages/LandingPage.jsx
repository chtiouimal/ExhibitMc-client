import { useNavigate } from "react-router-dom"

function LandingPage() {
  const navigate = useNavigate()

  const handleNavigation = () => {
    navigate("/app")
  }

  return (
    <div className="mc-landing-page">
        <h1>Malek Chtioui</h1>
        <h3>Music producer</h3>
        <button onClick={handleNavigation}>Explore</button>
    </div>
  )
}

export default LandingPage