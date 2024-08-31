import { Routes, Route } from 'react-router-dom'

import MainPage from './pages/Main'
import IgrejaPage from './pages/Main/IgrejaPage'

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='igreja' element={<IgrejaPage />} />
    </Routes>
  )
}
