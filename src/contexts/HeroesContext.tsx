import { createContext, useState } from 'react'
import { HeroesContextProps, HeroesProviderProps, HeroProps } from './types'
import md5 from 'md5'

export const HeroesContext = createContext({} as HeroesContextProps)

export function HeroesProvider({ children }: HeroesProviderProps) {
  const [heroes, setHeroes] = useState<HeroProps[]>([])
  const [filteredHeroes, setFilteredHeroes] = useState<HeroProps[]>([])
  const [hero, setHero] = useState<HeroProps>({
    id: 0,
    name: '',
    description: '',
    thumbnail: { path: '', extension: '' },
  })

  const publicKey = 'bf65759ebf4d4558799cd8a301c68904'
  const timestamp = Date.now()
  const privateKey = 'd85b4e9533b121cafe3ea342b0baa225a699321c'
  const hash = md5(timestamp + privateKey + publicKey).toString()

  async function fetchHeroes() {
    const url = `https://gateway.marvel.com/v1/public/characters?limit=100&ts=${timestamp}&apikey=${publicKey}&hash=${hash}`

    try {
      const response = await fetch(url)
      if (response) {
        const data = await response.json()

        setHeroes(data.data.results)
      }
    } catch (error) {
      console.log('Não foi possível buscar os heróis', error)
    }
  }

  async function fetchHeroById(id: string) {
    const url = `https://gateway.marvel.com/v1/public/characters/${id}?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`

    try {
      const response = await fetch(url)
      if (response) {
        const data = await response.json()
        setHero(data.data.results[0])
      }
    } catch (error) {
      console.log('Não foi possível buscar os heróis', error)
    }
  }

  async function fetchHeroByName(name: string) {
    const url = `https://gateway.marvel.com/v1/public/characters?nameStartsWith=${name}&limit=21&ts=${timestamp}&apikey=${publicKey}&hash=${hash}`

    try {
      const response = await fetch(url)
      if (response) {
        const data = await response.json()

        setFilteredHeroes(data.data.results)
      }
    } catch (error) {
      console.log('Não foi possível buscar os heróis', error)
    }
  }

  function shuffleHeroes(array: HeroProps[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[array[i], array[j]] = [array[j], array[i]]
    }
  }

  return (
    <HeroesContext.Provider
      value={{
        heroes,
        filteredHeroes,
        setFilteredHeroes,
        hero,
        fetchHeroes,
        fetchHeroById,
        fetchHeroByName,
        shuffleHeroes,
      }}
    >
      {children}
    </HeroesContext.Provider>
  )
}
