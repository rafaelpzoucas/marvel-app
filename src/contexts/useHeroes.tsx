import { useContext } from 'react'
import { HeroesContext } from './HeroesContext'

export const useHeroes = () => {
  const context = useContext(HeroesContext)

  return context
}
