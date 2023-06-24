import { Heroes } from '../components/Heroes'
import { HeroesRowContainer } from '../components/Heroes/Heroes.styles'
import { useEffect } from 'react'
import { useHeroes } from '../contexts/useHeroes'

export function Home() {
  const { heroes, fetchHeroes, shuffleHeroes } = useHeroes()

  shuffleHeroes(heroes)

  const newHeroes = []

  const usedIds = new Set()

  let previousColumns = ''

  for (let i = 0; i < heroes.length; ) {
    let columns

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

    const groupSize = columns === '3x2' ? 1 : 2
    for (let j = 0; j < groupSize && i < heroes.length; j++) {
      const hero = {
        id: heroes[i].id,
        nome: heroes[i].name,
        thumb: heroes[i].thumbnail,
      }

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

  return (
    <HeroesRowContainer>
      {newHeroes.map((hero) => (
        <Heroes key={hero.id} columns={hero.columns} heroes={hero.heroes} />
      ))}
    </HeroesRowContainer>
  )
}
