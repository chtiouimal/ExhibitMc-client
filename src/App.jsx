import { Route, Routes } from 'react-router-dom'
import './App.css'
import { ExhibitPage, SelectionPage } from './pages'
import { MainLayout } from './layouts'

function App() {

  return (
    <Routes>
      <Route path="" element={<MainLayout />}> 
        <Route index element={<ExhibitPage />} />
        <Route path="settings" element={<SelectionPage />} />
      </Route>
    </Routes>
  )
}

export default App
