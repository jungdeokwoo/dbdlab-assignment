import styled from 'styled-components'
import ChartExampleItem from '../ChartExampleItem'

const GenderChart = () => {
  return (
    <GenderChartWrapper>
      <PieChart />
      <PieChartWhiteSpace />
      <ChartExampleWrapper>
        <ChartExampleItem gubun="남자" color="genderMan" />
        <ChartExampleItem gubun="여자" color="genderWoman" />
      </ChartExampleWrapper>
    </GenderChartWrapper>
  )
}

export default GenderChart

const GenderChartWrapper = styled.section`
  position: relative;
  width: 300px;
  height: 300px;
`

const PieChart = styled.div`
  width: 100%;
  height: 100%;
  background: conic-gradient(
    ${({ theme }) => theme.genderMan} 0% 30%,
    ${({ theme }) => theme.genderWoman} 30% 100%
  );
  border-radius: 50%;
`

const PieChartWhiteSpace = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100px;
  height: 100px;
  background-color: white;
  border-radius: 50%;
  transform: translate(-50%, -50%);
`

const ChartExampleWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 30px;
`
