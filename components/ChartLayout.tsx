import styled from 'styled-components'

type childrenProps = {
  children: React.ReactNode
  title: string
}

const ChartLayout = ({ children, title }: childrenProps) => {
  return (
    <ChartContainer>
      <ChartTitle>{title}</ChartTitle>
      <ChartWrapper>{children}</ChartWrapper>
    </ChartContainer>
  )
}

export default ChartLayout

const ChartContainer = styled.article`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border: 1px solid ${({ theme }) => theme.border};
  border-bottom: none;
  border-right: none;
`

const ChartTitle = styled.h1`
  display: flex;
  align-items: center;
  height: 52px;
  padding: 24px;
  font-size: 14px;
  font-weight: bold;
  border-bottom: 1px solid;
  border-bottom-color: ${({ theme }) => theme.border};
`

const ChartWrapper = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`
