import styled from 'styled-components'
import SideBar from './SideBar'

type ChildrenProps = {
  children: React.ReactNode
}

const SIDE_BAR_WIDTH = '252px'

const Layout = ({ children }: ChildrenProps) => {
  return (
    <MainLayout padding={SIDE_BAR_WIDTH}>
      <SideBar width={SIDE_BAR_WIDTH} />
      {children}
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
