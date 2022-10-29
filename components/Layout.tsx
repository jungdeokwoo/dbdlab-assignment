import styled from 'styled-components'
import SideBar from './SideBar'

type ChildrenProps = {
  children: React.ReactNode
}

const Layout = ({ children }: ChildrenProps) => {
  return (
    <MainLayout>
      <SideBar />
      {children}
    </MainLayout>
  )
}

export default Layout

const MainLayout = styled.div`
  display: flex;
  width: 100%;
`
