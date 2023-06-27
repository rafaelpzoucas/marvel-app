import { Header } from './components/Header'
import { Router } from './components/Router'
import { BrowserRouter } from 'react-router-dom'
import { useHeroes } from './contexts/useHeroes'
import { useEffect } from 'react'
import { Main } from './App.styles'

export function App() {
  const { fetchHeroes } = useHeroes()

  useEffect(() => {
    fetchHeroes()
  }, [])

  return (
    <BrowserRouter>
      <div id="noise"></div>
      <Main>
        <Header />
        <Router />
      </Main>
    </BrowserRouter>
  )
}
