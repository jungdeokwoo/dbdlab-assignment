import { useMemo, useState } from 'react'
import { Main } from '.'
import styled from 'styled-components'
import ChartLayout from '../components/ChartLayout'
import AgeChart from '../components/AgeChart/AgeChart'
import GenderChart from '../components/GenderChart/GenderChart'
import { getDate } from '../utils/getDate'
import { getCovidAgeGenInf, getCovidTotalInf } from '../Api/getCovidInf'

type covidData = {
  confCase: string
  stateDt: string
  gubun: string
}

const dashboard = ({
  allCovidData,
  ageGenCovidData,
}: {
  allCovidData: covidData[]
  ageGenCovidData: covidData[]
}) => {
  const [selectedDate, setSelectedDate] = useState('20211101')

  const dateArray = useMemo(() => {
    const totalDate = new Set(ageGenCovidData.map(item => item.stateDt))
    const date = Array.from(totalDate)

    return date.reverse()
  }, [])

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { target } = event
    setSelectedDate(target.value)
  }

  return (
    <DashboardMain>
      <UpperChartWrapper>
        <ChartLayout title="코로나 일자별 확진자 수">
          <Chart />
        </ChartLayout>
      </UpperChartWrapper>
      <BottomChartWrapper>
        <ChartLayout title="일자별 연령대 확진자 수">
          <AgeChart
            dailyConf={ageGenCovidData.filter(
              item => item.gubun !== '남성' && item.gubun !== '여성',
            )}
          />
        </ChartLayout>
        <ChartLayout title="일자별 성별 확진자 수">
          <DateSelector onChange={handleChange}>
            {dateArray.map((date, index) => (
              <Date key={index} value={date}>
                {getDate(date)}
              </Date>
            ))}
          </DateSelector>
          <GenderChart
            dailyConf={ageGenCovidData.filter(
              item =>
                item.stateDt === selectedDate &&
                (item.gubun === '남성' || item.gubun === '여성'),
            )}
          />
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
  box-shadow: -1px -1px 3px ${({ theme }) => theme.border};
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

const DateSelector = styled.select`
  position: absolute;
  top: 10px;
  right: 50px;
  width: 80px;
`

const Date = styled.option``

export async function getStaticProps() {
  const allCovidData = getCovidTotalInf()
  const ageGenCovidData = getCovidAgeGenInf()
  return {
    props: { allCovidData, ageGenCovidData },
  }
}
