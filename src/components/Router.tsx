import { Routes, Route } from 'react-router-dom'
import { HeroDetails } from '../pages/HeroDetails'
import { Home } from '../pages/Home'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/hero/:id" element={<HeroDetails />} />
    </Routes>
  )
}
