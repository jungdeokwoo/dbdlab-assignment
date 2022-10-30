import styled from 'styled-components'

type AgeGroupItemProps = {
  gubun: string
  color: string
}

const AgeGroupItem = ({ gubun, color }: AgeGroupItemProps) => {
  return (
    <AgeGroupItemWrapper>
      <ChartColor color={color} />
      <Age>{gubun}</Age>
    </AgeGroupItemWrapper>
  )
}

export default AgeGroupItem

const AgeGroupItemWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100px;
  height: 30px;
`

const ChartColor = styled.div<{ color: string }>`
  width: 16px;
  height: 7px;
  background-color: ${({ color }) => color};
  margin-right: 5px;
`

const Age = styled.span``
