import { useParams } from 'react-router-dom'
import { useHeroes } from '../../contexts/useHeroes'

import { useEffect } from 'react'
import { ArrowLeft } from 'phosphor-react'
import {
  BackButton,
  Box,
  HeroDetailsContainer,
  HeroThumb,
} from './HeroDetails.styles'

export function HeroDetails() {
  const { id } = useParams()
  const { hero, fetchHeroById } = useHeroes()

  console.log(hero)

  useEffect(() => {
    if (id) {
      fetchHeroById(id)
    }
  }, [])

  return (
    <HeroDetailsContainer>
      <Box>
        <BackButton href="/" role="button">
          <ArrowLeft size={24} />
          Voltar
        </BackButton>
      </Box>
      {hero.thumbnail ? (
        <HeroThumb>
          <img
            src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
            alt={hero.name}
          />
        </HeroThumb>
      ) : (
        <div>Carregando...</div>
      )}
      <Box>
        <strong>{hero.name}</strong>
      </Box>

      <Box>
        {hero.description !== '' ? (
          <p>{hero.description}</p>
        ) : (
          <p>Não há informações sobre esse personagem :(</p>
        )}
      </Box>
    </HeroDetailsContainer>
  )
}
