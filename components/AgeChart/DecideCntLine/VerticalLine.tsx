import styled from 'styled-components'

const VerticalLine = ({ count }: { count: number }) => {
  return (
    <VerticalLineWrapper>
      <Line />
      <Count>{count}</Count>
    </VerticalLineWrapper>
  )
}

export default VerticalLine

const VerticalLineWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80px;
  height: 100%;
`

const Count = styled.p`
  color: ${({ theme }) => theme.chartFont};
`

const Line = styled.div`
  height: 100%;
  border: 0.5px solid ${({ theme }) => theme.border};
  margin-bottom: 10px;
`
