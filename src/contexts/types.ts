import { ReactNode } from 'react'

export interface HeroesProviderProps {
  children: ReactNode
}

export interface HeroesProps {
  id: number
  columns: '3x2' | '2x1' | '1x2'
  name: string
  description: string
  thumbnail: { path: string; extension: string }
}

export interface HeroProps {
  id: number
  name: string
  description: string
  thumbnail: { path: string; extension: string }
}

export interface HeroesContextProps {
  heroes: HeroesProps[]
  hero: HeroProps
  fetchHeroes: () => void
  fetchHeroById: (id: string) => void
  shuffleHeroes: (array: HeroesProps[]) => void
}
