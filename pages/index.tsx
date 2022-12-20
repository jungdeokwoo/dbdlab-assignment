import type { NextPage } from 'next'
import styled from 'styled-components'

const Index: NextPage = () => {
  return <Main>Home 변경되었습니다</Main>
}

export default Index

export const Main = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.white};
`
