import styled from 'styled-components'

export type HeroCardVariant = 'xs' | 'sm' | 'md'

interface HeroCardProps {
  size: HeroCardVariant
}

const heroCardHeight = {
  xs: '112px',
  sm: '112px',
  md: '224px',
}

export const HeroCard = styled.div<HeroCardProps>`
  ${(props) => {
    return `
      height: ${heroCardHeight[props.size]};
    `
  }}
  width: 100%;
  background: gray;
  border: 1px solid #000;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .hero-name {
    position: absolute;
    bottom: 0.25rem;
    left: 0.25rem;

    background-color: white;
    border: 1px solid black;
    padding: 0px 4px;

    font-size: 0.75rem;

    strong {
      text-transform: uppercase;
    }
  }

  .name-limit {
    max-width: 112px;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`
