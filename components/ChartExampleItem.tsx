import styled from 'styled-components'

type ChartExampleItemProps = {
  gubun: string
  color: string
}

const ChartExampleItem = ({ gubun, color }: ChartExampleItemProps) => {
  return (
    <ChartExampleItemWrapper>
      <ChartColor color={color} />
      <Age>{gubun}</Age>
    </ChartExampleItemWrapper>
  )
}

export default ChartExampleItem

const ChartExampleItemWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 30px;
`

const ChartColor = styled.div<{ color: string }>`
  width: 16px;
  height: 7px;
  background-color: ${({ theme, color }) => theme[color]};
  margin-right: 5px;
`

const Age = styled.span``
