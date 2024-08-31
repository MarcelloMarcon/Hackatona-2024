import { Routes, Route } from 'react-router-dom'

import IgrejaPage from './pages/Main/IgrejaPage'
import Initial from './pages/Main/pageinitial'
import Main from './pages/Main'

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Main/>} />
      <Route path='abrigos' element={<IgrejaPage />} />
      <Route path='initial' element={<Initial/>} />
    </Routes>
  )
}
