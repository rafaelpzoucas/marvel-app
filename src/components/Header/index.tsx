import { HeaderContainer } from './Header.styles'
import logo from '../../../public/logo.svg'
import { SearchModal } from '../SearchModal'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} width={94} height={34} alt="Marvel" />

      <SearchModal />
    </HeaderContainer>
  )
}
