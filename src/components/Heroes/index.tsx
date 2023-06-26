import { HeroesGroupProps } from '../../contexts/types'
import { Hero } from '../Hero'
import { HeroesRow } from './Heroes.styles'

export function Heroes({ columns, heroes }: HeroesGroupProps) {
  return (
    <HeroesRow columns={columns}>
      {columns === '3x2' ? (
        <Hero
          size="md"
          id={heroes[0]?.id}
          name={heroes[0]?.name}
          thumbPath={`${heroes[0]?.thumbnail.path}.${heroes[0]?.thumbnail.extension}`}
        />
      ) : (
        <>
          <Hero
            size={columns === '1x2' ? 'xs' : 'sm'}
            id={heroes[0]?.id}
            name={heroes[0]?.name}
            thumbPath={`${heroes[0]?.thumbnail.path}.${heroes[0]?.thumbnail.extension}`}
          />
          <Hero
            size={columns === '2x1' ? 'xs' : 'sm'}
            id={heroes[1]?.id}
            name={heroes[1]?.name}
            thumbPath={`${heroes[1]?.thumbnail.path}.${heroes[1]?.thumbnail.extension}`}
          />
        </>
      )}
    </HeroesRow>
  )
}
