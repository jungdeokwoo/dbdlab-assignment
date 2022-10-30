import styled from 'styled-components'
import AgeGroupExample from './AgeGroupExample/AgeGroupExample'
import DailyStack from './DailyStack/DailyStack'
import DecideCntLine from './DecideCntLine/DecideCntLine'

export type ageChartProps = {
  confCase: string
  stateDt: string
  gubun: string
}

const AgeChart = ({ data }: { data: ageChartProps[] }) => {
  return (
    <StackBarChart>
      <DailyStack dailyConf={data} />
      <DecideCntLine />
      <AgeGroupExample />
    </StackBarChart>
  )
}

export default AgeChart

const StackBarChart = styled.div`
  position: relative;
`
