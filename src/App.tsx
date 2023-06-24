import { Header } from './components/Header'
import { Router } from './components/Router'
import { BrowserRouter } from 'react-router-dom'

export function App() {
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
