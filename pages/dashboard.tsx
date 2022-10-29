import { Main } from '.'
import styled from 'styled-components'
import ChartLayout from '../components/ChartLayout'

const dashboard = () => {
  return (
    <DashboardMain>
      <UpperChartWrapper>
        <ChartLayout title="코로나 일자별 확진자 수">
          <Chart />
        </ChartLayout>
      </UpperChartWrapper>
      <BottomChartWrapper>
        <ChartLayout title="일자별 연령대 확진자 수">
          <Chart />
        </ChartLayout>
        <ChartLayout title="일자별 성별 확진자 수">
          <Chart />
        </ChartLayout>
      </BottomChartWrapper>
    </DashboardMain>
  )
}

export default dashboard

const DashboardMain = styled(Main)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`

const Chart = styled.div`
  width: 300px;
  height: 300px;
  background-color: blue;
`

const UpperChartWrapper = styled.section`
  display: flex;
  flex: 1;
`

const BottomChartWrapper = styled(UpperChartWrapper)``
