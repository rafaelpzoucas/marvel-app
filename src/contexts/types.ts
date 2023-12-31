import { ReactNode, Dispatch, SetStateAction } from 'react'

export interface HeroesProviderProps {
  children: ReactNode
}

export interface HeroProps {
  id: number
  name: string
  description?: string
  thumbnail: { path: string; extension: string }
}

export interface HeroesGroupProps {
  id: number
  columns: '3x2' | '2x1' | '1x2'
  heroes: HeroProps[]
}

export interface HeroesContextProps {
  heroes: HeroProps[]
  filteredHeroes: HeroProps[]
  setFilteredHeroes: Dispatch<SetStateAction<HeroProps[]>>
  hero: HeroProps
  fetchHeroes: () => void
  fetchHeroById: (id: string) => void
  fetchHeroByName: (name: string) => void
  shuffleHeroes: (array: HeroProps[]) => void
  isLoading: boolean
  setIsLoading: Dispatch<SetStateAction<boolean>>
}
