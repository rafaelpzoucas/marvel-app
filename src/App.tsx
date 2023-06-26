import { Header } from './components/Header'
import { Router } from './components/Router'
import { BrowserRouter } from 'react-router-dom'
import { useHeroes } from './contexts/useHeroes'
import { useEffect } from 'react'

export function App() {
  const { fetchHeroes } = useHeroes()

  useEffect(() => {
    fetchHeroes()
  }, [])

  return (
    <BrowserRouter>
      <div id="noise"></div>
      <main>
        <Header />
        <Router />
      </main>
    </BrowserRouter>
  )
}
