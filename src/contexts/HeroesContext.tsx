import { createContext, useState } from 'react'
import { HeroProps, HeroesContextProps, HeroesProviderProps } from './types'
import md5 from 'md5'

export const HeroesContext = createContext({} as HeroesContextProps)

export function HeroesProvider({ children }: HeroesProviderProps) {
  const [heroes, setHeroes] = useState<HeroProps[]>([])

  const publicKey = 'bf65759ebf4d4558799cd8a301c68904'
  const timestamp = Date.now()
  const privateKey = 'd85b4e9533b121cafe3ea342b0baa225a699321c'
  const hash = md5(timestamp + privateKey + publicKey).toString()

  async function fetchHeroes() {
    const url = `https://gateway.marvel.com/v1/public/characters?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`

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

  return (
    <HeroesContext.Provider
      value={{
        heroes,
        setHeroes,
        fetchHeroes,
      }}
    >
      {children}
    </HeroesContext.Provider>
  )
}
