import styled from 'styled-components'
import Logo from './Logo'
import Menu from './Menu'

type sideProps = {
  width: string
}

const SideBar = ({ width }: sideProps) => {
  return (
    <SideBarContainer width={width}>
      <Logo />
      <Menu />
    </SideBarContainer>
  )
}

export default SideBar

const SideBarContainer = styled.aside<{ width: string }>`
  position: fixed;
  left: 0;
  width: ${({ width }) => width};
  height: 100%;
  padding: 48px 0 0 48px;
  box-shadow: 1px 0 3px ${({ theme }) => theme.border};
`
