import styled from 'styled-components'

export type HeroesRowColumn = '3x2' | '2x1' | '1x2'

interface HeroesRowProps {
  columns: HeroesRowColumn
}

const heroesRowColumns = {
  '1x2': '1fr 2fr',
  '2x1': '2fr 1fr',
  '3x2': '1fr',
}

export const HeroesRowContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;

  width: 100vw;
`

export const HeroesRow = styled.div<HeroesRowProps>`
  display: grid;
  grid-auto-flow: dense;
  ${(props) => {
    return `grid-template-columns: ${heroesRowColumns[props.columns]};`
  }}
  gap: 1rem;

  width: 100%;
`
