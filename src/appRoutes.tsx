import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/home'
import { ProspPage } from './pages/props'

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/props' element={<ProspPage />} />
      </Routes>
    </BrowserRouter>
  )
}