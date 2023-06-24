import { ReactNode, Dispatch, SetStateAction } from 'react'

export interface HeroesProviderProps {
  children: ReactNode
}

export interface HeroProps {
  id: number
  columns: '3x2' | '2x1' | '1x2'
  heroes: { id: number; nome: string }[]
}

export interface HeroesContextProps {
  heroes: HeroProps[]
  setHeroes: Dispatch<SetStateAction<HeroProps[]>>
  fetchHeroes: () => void
}
