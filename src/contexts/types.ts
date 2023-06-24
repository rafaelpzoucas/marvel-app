import { ReactNode } from 'react'

export interface HeroesProviderProps {
  children: ReactNode
}

export interface HeroProps {
  id: number
  columns: '3x2' | '2x1' | '1x2'
  name: string
  description: string
  thumbnail: { path: string; extension: string }
}

export interface HeroesContextProps {
  heroes: HeroProps[]
  hero: HeroProps
  fetchHeroes: () => void
  fetchHeroById: (id: string) => void
  shuffleHeroes: (array: HeroProps[]) => void
}
