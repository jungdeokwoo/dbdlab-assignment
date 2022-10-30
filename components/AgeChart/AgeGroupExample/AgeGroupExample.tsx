import styled from 'styled-components'
import ChartExampleItem from '../../ChartExampleItem'

const AGE_GROUP_DATA = [
  { id: 0, gubun: '0-9', color: 'red' },
  { id: 1, gubun: '10-19', color: 'orange' },
  { id: 2, gubun: '20-29', color: 'yellow' },
  { id: 3, gubun: '30-39', color: 'green' },
  { id: 4, gubun: '40-49', color: 'blue' },
  { id: 5, gubun: '50-59', color: 'navy' },
  { id: 6, gubun: '60-69', color: 'violet' },
  { id: 7, gubun: '70-79', color: 'aqua' },
  { id: 8, gubun: '80세 이상', color: 'grey' },
]

const AgeGroupExample = () => {
  return (
    <AgeGroupWrapper>
      {AGE_GROUP_DATA.map(item => (
        <ChartExampleItem key={item.id} gubun={item.gubun} color={item.color} />
      ))}
    </AgeGroupWrapper>
  )
}

export default AgeGroupExample

const AgeGroupWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  align-items: center;
  margin-top: 20px;
`
