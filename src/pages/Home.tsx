import { HeroSkeleton } from '../components/Hero/Hero.styles'
import { Heroes } from '../components/Heroes'
import { HeroesRowContainer } from '../components/Heroes/Heroes.styles'
import { useHeroes } from '../contexts/useHeroes'
import { useNewHeroes } from '../hooks/useNewHeroes'

export function Home() {
  const { heroes } = useHeroes()

  const newHeroes = useNewHeroes(heroes)

  return (
    <HeroesRowContainer>
      {newHeroes.length > 0 ? (
        newHeroes.map((hero, index) => (
          <Heroes
            key={index}
            id={hero.id}
            columns={hero.columns}
            heroes={hero.heroes}
          />
        ))
      ) : (
        <>
          <HeroSkeleton />
          <HeroSkeleton />
          <HeroSkeleton />
          <HeroSkeleton />
          <HeroSkeleton />
          <HeroSkeleton />
          <HeroSkeleton />
          <HeroSkeleton />
          <HeroSkeleton />
          <HeroSkeleton />
          <HeroSkeleton />
          <HeroSkeleton />
          <HeroSkeleton />
          <HeroSkeleton />
          <HeroSkeleton />
          <HeroSkeleton />
          <HeroSkeleton />
          <HeroSkeleton />
          <HeroSkeleton />
          <HeroSkeleton />
          <HeroSkeleton />
          <HeroSkeleton />
        </>
      )}
    </HeroesRowContainer>
  )
}
