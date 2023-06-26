import { Heroes } from '../components/Heroes'
import { HeroesRowContainer } from '../components/Heroes/Heroes.styles'
import { useHeroes } from '../contexts/useHeroes'
import { useNewHeroes } from '../hooks/useNewHeroes'

export function Home() {
  const { heroes } = useHeroes()

  const newHeroes = useNewHeroes(heroes)

  return (
    <HeroesRowContainer>
      {newHeroes.map((hero, index) => (
        <Heroes
          key={index}
          id={hero.id}
          columns={hero.columns}
          heroes={hero.heroes}
        />
      ))}
    </HeroesRowContainer>
  )
}
