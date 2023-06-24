import { HeaderContainer, SearchButton } from './Header.styles'
import logo from '../../../public/logo.svg'
import { MagnifyingGlass } from 'phosphor-react'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} width={94} height={34} alt="Marvel" />

      <SearchButton>
        <MagnifyingGlass size={32} />
      </SearchButton>
    </HeaderContainer>
  )
}
