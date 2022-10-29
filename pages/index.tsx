import type { NextPage } from 'next'
import styled from 'styled-components'

const Index: NextPage = () => {
  return <Main>Home</Main>
}

export default Index

export const Main = styled.main`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.white};
`
