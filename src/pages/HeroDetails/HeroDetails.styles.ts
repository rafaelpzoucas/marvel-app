import styled from 'styled-components'

export const HeroDetailsContainer = styled.div`
  width: 100vw;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const BackButton = styled.a`
  text-decoration: none;
  color: inherit;
  cursor: pointer;

  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 0.5rem;

  text-transform: uppercase;
`

export const HeroThumb = styled.div`
  width: 100%;
  border: 1px solid black;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const Box = styled.div`
  background-color: white;
  border: 1px solid black;
  width: fit-content;

  background-color: white;
  border: 1px solid black;
  width: fit-content;
  padding: 0.5rem 1rem;

  strong {
    text-transform: uppercase;
    font-size: 1.25rem;
  }
`
