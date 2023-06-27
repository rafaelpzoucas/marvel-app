import * as Dialog from '@radix-ui/react-dialog'

import styled, { keyframes } from 'styled-components'

const slideAnimation = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0%);
  }
`

const fadeAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

export const DialogOverlay = styled(Dialog.Overlay)`
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(4px);
  position: fixed;
  inset: 0;
  animation: ${fadeAnimation} 250ms ease-in-out;
`

export const DialogContent = styled(Dialog.Content)`
  position: fixed;
  inset: 0;

  background-color: #f2eecb;

  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  padding: 1rem;

  animation: ${slideAnimation} 250ms ease-in-out;

  @media (min-width: 768px) {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 550px;
    height: 700px;

    border: 1px solid black;

    animation: ${fadeAnimation} 250ms ease-in-out;
  }
`

export const SearchModalHeader = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  strong {
    text-transform: uppercase;
    font-size: 1rem;
    font-weight: 700;

    background-color: white;
    border: 1px solid black;
    padding: 0.5rem 1rem;
  }
`

export const SearchInput = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;

  background-color: white;
  border: 1px solid black;
  padding: 0.5rem 1rem;
  font-size: 1rem;

  &:focus-within {
    outline: 2px solid black;
  }

  input {
    background-color: transparent;
    border: none;
    width: 100%;

    &:focus {
      outline: none;
    }
  }
`

export const CloseButton = styled.button`
  background-color: white;
  border: 1px solid black;

  width: 2rem;
  height: 2rem;

  line-height: 100%;
`

export const HeroesList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

  overflow-y: auto;
`
