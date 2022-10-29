import styled from 'styled-components'

export default function Custom404() {
  return (
    <ErrorPage>
      <ErrorTitle>잘못된 접근입니다.</ErrorTitle>
    </ErrorPage>
  )
}

const ErrorPage = styled.div`
  display: flex;
  justify-content: center;

  height: 100%;
`

const ErrorTitle = styled.h1``
