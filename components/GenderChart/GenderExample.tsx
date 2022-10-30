import styled from 'styled-components'
import ChartExampleItem from '../ChartExampleItem'

const GENDER_EXAMPLE_DATA = [
  { id: 0, gubun: '남자', color: 'genderMan' },
  { id: 1, gubun: '여자', color: 'genderWoman' },
]

const GenderExample = () => {
  return (
    <ChartExampleWrapper>
      {GENDER_EXAMPLE_DATA.map(item => (
        <ChartExampleItem key={item.id} gubun={item.gubun} color={item.color} />
      ))}
    </ChartExampleWrapper>
  )
}

export default GenderExample

const ChartExampleWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 30px;
`
