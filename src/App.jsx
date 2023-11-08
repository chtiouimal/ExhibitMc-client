import { Route, Routes } from 'react-router-dom'
import './App.css'
import { ExhibitPage, LandingPage, SettingsPage } from './pages'

function App() {

  return (
    <Routes>
      <Route path="" element={<LandingPage />} />
      <Route path="exhibit" element={<ExhibitPage />} />
      <Route path="settings" element={<SettingsPage />} />
    </Routes>
  )
}

export default App
