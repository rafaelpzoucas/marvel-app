import { useEffect, useState } from 'react'
import { HeroProps, HeroesGroupProps } from '../contexts/types'
import { useHeroes } from '../contexts/useHeroes'

export function useNewHeroes(heroes: HeroProps[]) {
  const { shuffleHeroes } = useHeroes()

  const [newHeroes, setNewHeroes] = useState<HeroesGroupProps[]>([])

  useEffect(() => {
    let previousColumns = ''
    const usedIds = new Set<number>()
    let groupId = 1

    shuffleHeroes(heroes)

    const groupedHeroes: HeroesGroupProps[] = []

    for (let i = 0; i < heroes.length; ) {
      let columns: '3x2' | '2x1' | '1x2'

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

      const group: HeroesGroupProps = {
        id: groupId,
        columns,
        heroes: [],
      }

      const groupSize = columns === '3x2' ? 1 : 2

      for (let j = 0; j < groupSize && i < heroes.length; j++) {
        const hero = heroes[i]

        const heroObject = {
          id: hero.id,
          name: hero.name,
          thumbnail: {
            path: hero.thumbnail.path,
            extension: hero.thumbnail.extension,
          },
        }

        if (!usedIds.has(heroObject.id)) {
          group.heroes.push(heroObject)
          usedIds.add(heroObject.id)
          i++
        }
      }

      groupedHeroes.push(group)
      previousColumns = columns
      groupId++
    }

    if (heroes.length - usedIds.size === 1) {
      const remainingHero = heroes.find((hero) => !usedIds.has(hero.id))

      if (remainingHero) {
        const group: HeroesGroupProps = {
          id: groupId,
          columns: '3x2',
          heroes: [
            {
              id: remainingHero.id,
              name: remainingHero.name,
              thumbnail: {
                path: remainingHero.thumbnail.path,
                extension: remainingHero.thumbnail.extension,
              },
            },
          ],
        }

        groupedHeroes.push(group)
      }
    }

    setNewHeroes(groupedHeroes)
  }, [heroes, shuffleHeroes])

  return newHeroes
}
