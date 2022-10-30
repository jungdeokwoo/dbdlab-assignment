import styled from 'styled-components'
import { getDate } from '../../../utils/getDate'
import type { ageChartProps } from '../AgeChart'
import Stack from './Stack'

type DailyStackBarProps = {
  date: string
  dailyConf: ageChartProps[]
}

const DailyStackBar = ({ date, dailyConf }: DailyStackBarProps) => {
  return (
    <DailyStackBarWrapper>
      <Day>{getDate(date)}</Day>
      <StackBar>
        {dailyConf.map((conf, index) => (
          <Stack key={index} conf={conf} />
        ))}
      </StackBar>
    </DailyStackBarWrapper>
  )
}

export default DailyStackBar

const DailyStackBarWrapper = styled.div`
  display: flex;
  align-items: center;
`

const Day = styled.p`
  width: 40px;
  color: ${({ theme }) => theme.chartDay};
`

const StackBar = styled.div`
  display: flex;
  height: 20px;
  z-index: 3;
  opacity: 0.5;
`
