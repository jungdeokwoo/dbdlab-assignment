import styled from 'styled-components'
import SideBar from './SideBar'

type childrenProps = {
  children: React.ReactNode
}

const SIDE_BAR_WIDTH = '252px'

const Layout = ({ children }: childrenProps) => {
  return (
    <MainLayout padding={SIDE_BAR_WIDTH}>
      <SideBar width={SIDE_BAR_WIDTH} />
      <Contents>{children}</Contents>
    </MainLayout>
  )
}

export default Layout

const MainLayout = styled.div<{ padding: string }>`
  display: flex;
  width: 100%;
  height: 1024px;
  padding-left: ${({ padding }) => padding};
  background-color: ${({ theme }) => theme.backGround};
`

const Contents = styled.main`
  width: 100%;
  padding: 20px;
`
