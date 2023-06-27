import { useParams, useNavigate } from 'react-router-dom'
import { useHeroes } from '../../contexts/useHeroes'

import { useEffect } from 'react'
import { ArrowLeft } from 'phosphor-react'
import {
  BackButton,
  DescriptionSkeleton,
  HeroDescription,
  HeroDetailsContainer,
  HeroThumb,
  ThumbSkeleton,
  Title,
  TitleSkeleton,
} from './HeroDetails.styles'
import { useNewHeroes } from '../../hooks/useNewHeroes'
import { Heroes } from '../../components/Heroes'
import { HeroesRowContainer } from '../../components/Heroes/Heroes.styles'
import { HeroSkeleton } from '../../components/Hero/Hero.styles'

export function HeroDetails() {
  const navigate = useNavigate()
  const { id } = useParams()
  const { hero, fetchHeroById } = useHeroes()
  const { heroes } = useHeroes()

  const newHeroes = useNewHeroes(heroes)

  const isLoading = Boolean(!hero.id)

  useEffect(() => {
    if (id) {
      fetchHeroById(id)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <HeroDetailsContainer>
        <BackButton onClick={() => navigate('/')}>
          <ArrowLeft size={24} />
          back to home
        </BackButton>

        <HeroThumb>
          {!isLoading ? (
            <img
              src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
              alt={hero.name}
            />
          ) : (
            <ThumbSkeleton />
          )}
        </HeroThumb>

        <Title>
          {!isLoading ? <strong>{hero.name}</strong> : <TitleSkeleton />}
        </Title>

        <HeroDescription>
          {!isLoading ? (
            hero.description !== '' ? (
              <p>{hero.description}</p>
            ) : (
              <p>There&apos;s no description for this character :(</p>
            )
          ) : (
            <DescriptionSkeleton />
          )}
        </HeroDescription>
      </HeroDetailsContainer>

      <HeroesRowContainer>
        <Title>more heroes: </Title>

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
    </>
  )
}
