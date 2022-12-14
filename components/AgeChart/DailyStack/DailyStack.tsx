import styled from 'styled-components'
import DailyStackBar from './DailyStackBar'
import type { ageChartProps } from '../AgeChart'

const DailyStack = ({ dailyConf }: { dailyConf: ageChartProps[] }) => {
  const totalDate = new Set(dailyConf.map(item => item.stateDt))
  const dateArray = Array.from(totalDate)

  return (
    <DailyStackWrapper>
      {dateArray.map((date, index) => (
        <DailyStackBar
          key={index}
          date={date}
          dailyConf={dailyConf.filter(conf => conf.stateDt === date)}
        />
      ))}
    </DailyStackWrapper>
  )
}

export default DailyStack

const DailyStackWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  top: 0;
  left: -15px;
  height: 200px;
`
