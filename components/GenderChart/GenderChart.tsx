import { useMemo } from 'react'
import styled from 'styled-components'
import { getPercentage } from '../../utils/getPercentage'
import GenderExample from './GenderExample'

type genderChartProps = {
  confCase: string
  stateDt: string
  gubun: string
}

const GenderChart = ({ dailyConf }: { dailyConf: genderChartProps[] }) => {
  const percentage = useMemo(() => {
    return getPercentage(dailyConf)
  }, [dailyConf])

  return (
    <GenderChartWrapper>
      <PieChart percentage={percentage} />
      <PieChartWhiteSpace />
      <GenderExample />
    </GenderChartWrapper>
  )
}

export default GenderChart

const GenderChartWrapper = styled.section`
  position: relative;
  width: 300px;
  height: 300px;
`

const PieChart = styled.div<{ percentage: number }>`
  width: 100%;
  height: 100%;
  background: conic-gradient(
    ${({ theme }) => theme.genderMan} 0% ${({ percentage }) => percentage}%,
    ${({ theme }) => theme.genderWoman} ${({ percentage }) => percentage}% 100%
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
