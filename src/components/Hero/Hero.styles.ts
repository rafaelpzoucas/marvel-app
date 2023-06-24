import styled from 'styled-components'

export type HeroCardVariant = 'xs' | 'sm' | 'md'

interface HeroCardProps {
  size: HeroCardVariant
}

const heroCardHeight = {
  xs: '132px',
  sm: '132px',
  md: '250px',
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

  .arrow {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0.25rem;
    right: 0.25rem;

    background-color: white;
    border: 1px solid black;
    padding: 4px 4px;
  }

  .hero-name {
    position: absolute;
    bottom: 0.25rem;
    left: 0.25rem;

    background-color: white;
    border: 1px solid black;
    padding: 0px 4px;

    font-size: 1rem;

    strong {
      font-family: 'Comic Neue', cursive;
      text-transform: uppercase;
    }
  }

  .name-limit {
    max-width: calc(100% - 8px);

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`
