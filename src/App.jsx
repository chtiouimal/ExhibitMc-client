import { Route, Routes } from 'react-router-dom'
import './App.css'
import { ExhibitPage, LandingPage, SettingsPage } from './pages'
import { MainLayout } from './layouts'

function App() {

  return (
    <Routes>
      <Route path="" element={<MainLayout />}> 
        <Route index element={<LandingPage />} />
        <Route path="exhibit" element={<ExhibitPage />} />
        <Route path="settings" element={<SettingsPage />} />
      </Route>
    </Routes>
  )
}

export default App
