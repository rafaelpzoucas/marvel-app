import { Hero } from '../Hero'
import { HeroesRow } from './Heroes.styles'

interface HeroesRowProps {
  columns: '3x2' | '2x1' | '1x2'
  heroes: {
    id: number
    nome: string
    thumb: { path: string; extension: string }
  }[]
}

export function Heroes({ columns, heroes }: HeroesRowProps) {
  return (
    <HeroesRow columns={columns}>
      {columns === '3x2' ? (
        <Hero
          size="md"
          id={heroes[0]?.id}
          hero={heroes[0]?.nome}
          thumbPath={`${heroes[0]?.thumb.path}.${heroes[0]?.thumb.extension}`}
        />
      ) : (
        <>
          <Hero
            size={columns === '1x2' ? 'xs' : 'sm'}
            id={heroes[0]?.id}
            hero={heroes[0]?.nome}
            thumbPath={`${heroes[0]?.thumb.path}.${heroes[0]?.thumb.extension}`}
          />
          <Hero
            size={columns === '2x1' ? 'xs' : 'sm'}
            id={heroes[1]?.id}
            hero={heroes[1]?.nome}
            thumbPath={`${heroes[1]?.thumb.path}.${heroes[1]?.thumb.extension}`}
          />
        </>
      )}
    </HeroesRow>
  )
}
