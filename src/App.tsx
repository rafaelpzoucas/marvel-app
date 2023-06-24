import { Header } from './components/Header'
import { Heroes } from './components/Heroes'
import { HeroesRowContainer } from './components/Heroes/Heroes.styles'
import { useEffect } from 'react'
import { useHeroes } from './contexts/useHeroes'

export function App() {
  const { heroes, fetchHeroes } = useHeroes()

  function shuffleArray(array: any) {
    // Algoritmo de Fisher-Yates para embaralhar o array
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[array[i], array[j]] = [array[j], array[i]]
    }
  }

  // Embaralhar o array original
  shuffleArray(heroes)

  const newHeroes = []

  // Conjunto para armazenar IDs utilizados
  const usedIds = new Set()

  // Percorrer o array original e criar grupos com 1 ou 2 heróis
  let previousColumns = ''
  for (let i = 0; i < heroes.length; ) {
    let columns

    // Verificar se a linha seguinte será igual à linha anterior
    do {
      const randomValue = Math.random()
      if (randomValue < 0.33) {
        columns = '3x2'
      } else if (randomValue < 0.67) {
        columns = '2x1'
      } else {
        columns = '1x2'
      }
    } while (columns === previousColumns)

    const group: any = {
      id: newHeroes.length + 1,
      columns,
      heroes: [],
    }

    // Adicionar heróis ao grupo
    const groupSize = columns === '3x2' ? 1 : 2
    for (let j = 0; j < groupSize && i < heroes.length; j++) {
      const hero = {
        id: heroes[i].id,
        nome: heroes[i].name,
        thumb: heroes[i].thumbnail,
      }

      // Verificar se o ID já foi utilizado
      if (!usedIds.has(hero.id)) {
        group.heroes.push(hero)
        usedIds.add(hero.id)
        i++
      }
    }

    newHeroes.push(group)
    previousColumns = columns
  }

  useEffect(() => {
    fetchHeroes()
  }, [])

  // console.log(heroes)

  return (
    <>
      <div
        id="noise"
        className="fixed inset-0 z-50 pointer-events-none opacity-20"
      ></div>
      <main>
        <Header />

        <HeroesRowContainer>
          {newHeroes.map((hero) => (
            <Heroes key={hero.id} columns={hero.columns} heroes={hero.heroes} />
          ))}
        </HeroesRowContainer>
      </main>
    </>
  )
}
