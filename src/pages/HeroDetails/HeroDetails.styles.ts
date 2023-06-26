import styled, { keyframes } from 'styled-components'

const pulseAnimation = keyframes`
  0% {
    opacity: 1
  }
  100% {
    opacity: 0.7
  }
`
export const HeroDetailsContainer = styled.div`
  width: 100vw;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const BackButton = styled.button`
  background-color: white;
  border: 1px solid black;
  width: fit-content;

  font-family: 'Comic Neue', cursive;
  font-size: 1rem;
  text-decoration: none;
  color: inherit;
  cursor: pointer;

  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 0.5rem;

  padding: 0.5rem 1rem;

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

export const Title = styled.div`
  background-color: white;
  border: 1px solid black;
  width: fit-content;

  background-color: white;
  border: 1px solid black;
  width: fit-content;

  padding: 0.5rem 1rem;

  text-transform: uppercase;

  strong {
    font-size: 1.25rem;
  }
`

export const HeroDescription = styled.div`
  background-color: white;
  border: 1px solid black;
  width: fit-content;

  padding: 0.5rem 1rem;
`

export const ThumbSkeleton = styled.div`
  width: 100%;
  height: 300px;

  background: gray;

  animation: ${pulseAnimation} 500ms infinite;
`

export const TitleSkeleton = styled.div`
  width: 128px;
  height: 23px;

  background: gray;

  animation: ${pulseAnimation} 500ms infinite;
`

export const DescriptionSkeleton = styled.div`
  width: 319px;
  height: 18px;

  background: gray;

  animation: ${pulseAnimation} 500ms infinite;
`
