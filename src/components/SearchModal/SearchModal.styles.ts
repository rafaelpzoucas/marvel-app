import * as Dialog from '@radix-ui/react-dialog'

import styled, { keyframes } from 'styled-components'

const slideAnimation = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0%);
  }
`

export const DialogContent = styled(Dialog.Content)`
  animation: ${slideAnimation} 250ms ease-in-out;

  position: fixed;
  inset: 0;

  background-color: #f2eecb;

  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  padding: 1rem;
`

export const SearchModalHeader = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  strong {
    text-transform: uppercase;
    font-size: 1.5rem;
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

    &:focus {
      outline: none;
    }
  }
`

export const CloseButton = styled.button`
  background-color: white;
  border: 1px solid black;

  width: 2.875rem;
  height: 2.875rem;

  line-height: 100%;
`

export const HeroesList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

  overflow-y: auto;
`
