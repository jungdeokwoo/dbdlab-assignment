import { Main } from '.'
import styled from 'styled-components'
import ChartLayout from '../components/ChartLayout'
import AgeChart from '../components/AgeChart/AgeChart'

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
          <AgeChart
            data={DATA.filter(
              item => item.gubun !== '남성' && item.gubun !== '여성',
            )}
          />
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

const DATA = [
  {
    confCase: '146',
    stateDt: '20211107',
    gubun: '0-9',
  },
  {
    confCase: '210',
    stateDt: '20211107',
    gubun: '10-19',
  },
  {
    confCase: '196',
    stateDt: '20211107',
    gubun: '20-29',
  },
  {
    confCase: '185',
    stateDt: '20211107',
    gubun: '30-39',
  },
  {
    confCase: '269',
    stateDt: '20211107',
    gubun: '40-49',
  },
  {
    confCase: '237',
    stateDt: '20211107',
    gubun: '50-59',
  },
  {
    confCase: '184',
    stateDt: '20211107',
    gubun: '60-69',
  },
  {
    confCase: '165',
    stateDt: '20211107',
    gubun: '70-79',
  },
  {
    confCase: '167',
    stateDt: '20211107',
    gubun: '80 이상',
  },
  {
    confCase: '1121',
    stateDt: '20211107',
    gubun: '여성',
  },
  {
    confCase: '638',
    stateDt: '20211107',
    gubun: '남성',
  },
  {
    confCase: '221',
    stateDt: '20211106',
    gubun: '0-9',
  },
  {
    confCase: '694',
    stateDt: '20211106',
    gubun: '10-19',
  },
  {
    confCase: '180',
    stateDt: '20211106',
    gubun: '20-29',
  },
  {
    confCase: '142',
    stateDt: '20211106',
    gubun: '30-39',
  },
  {
    confCase: '550',
    stateDt: '20211106',
    gubun: '40-49',
  },
  {
    confCase: '225',
    stateDt: '20211106',
    gubun: '50-59',
  },
  {
    confCase: '101',
    stateDt: '20211106',
    gubun: '60-69',
  },
  {
    confCase: '90',
    stateDt: '20211106',
    gubun: '70-79',
  },
  {
    confCase: '21',
    stateDt: '20211106',
    gubun: '80 이상',
  },
  {
    confCase: '1221',
    stateDt: '20211106',
    gubun: '여성',
  },
  {
    confCase: '1003',
    stateDt: '20211106',
    gubun: '남성',
  },
  {
    confCase: '111',
    stateDt: '20211105',
    gubun: '0-9',
  },
  {
    confCase: '598',
    stateDt: '20211105',
    gubun: '10-19',
  },
  {
    confCase: '237',
    stateDt: '20211105',
    gubun: '20-29',
  },
  {
    confCase: '423',
    stateDt: '20211105',
    gubun: '30-39',
  },
  {
    confCase: '363',
    stateDt: '20211105',
    gubun: '40-49',
  },
  {
    confCase: '91',
    stateDt: '20211105',
    gubun: '50-59',
  },
  {
    confCase: '34',
    stateDt: '20211105',
    gubun: '60-69',
  },
  {
    confCase: '101',
    stateDt: '20211105',
    gubun: '70-79',
  },
  {
    confCase: '290',
    stateDt: '20211105',
    gubun: '80 이상',
  },
  {
    confCase: '1024',
    stateDt: '20211105',
    gubun: '여성',
  },
  {
    confCase: '1224',
    stateDt: '20211105',
    gubun: '남성',
  },
  {
    confCase: '104',
    stateDt: '20211104',
    gubun: '0-9',
  },
  {
    confCase: '358',
    stateDt: '20211104',
    gubun: '10-19',
  },
  {
    confCase: '626',
    stateDt: '20211104',
    gubun: '20-29',
  },
  {
    confCase: '395',
    stateDt: '20211104',
    gubun: '30-39',
  },
  {
    confCase: '566',
    stateDt: '20211104',
    gubun: '40-49',
  },
  {
    confCase: '57',
    stateDt: '20211104',
    gubun: '50-59',
  },
  {
    confCase: '74',
    stateDt: '20211104',
    gubun: '60-69',
  },
  {
    confCase: '98',
    stateDt: '20211104',
    gubun: '70-79',
  },
  {
    confCase: '67',
    stateDt: '20211104',
    gubun: '80 이상',
  },
  {
    confCase: '2000',
    stateDt: '20211104',
    gubun: '여성',
  },
  {
    confCase: '344',
    stateDt: '20211104',
    gubun: '남성',
  },
  {
    confCase: '15',
    stateDt: '20211103',
    gubun: '0-9',
  },
  {
    confCase: '13',
    stateDt: '20211103',
    gubun: '10-19',
  },
  {
    confCase: '5',
    stateDt: '20211103',
    gubun: '20-29',
  },
  {
    confCase: '11',
    stateDt: '20211103',
    gubun: '30-39',
  },
  {
    confCase: '8',
    stateDt: '20211103',
    gubun: '40-49',
  },
  {
    confCase: '6',
    stateDt: '20211103',
    gubun: '50-59',
  },
  {
    confCase: '10',
    stateDt: '20211103',
    gubun: '60-69',
  },
  {
    confCase: '4',
    stateDt: '20211103',
    gubun: '70-79',
  },
  {
    confCase: '3',
    stateDt: '20211103',
    gubun: '80 이상',
  },
  {
    confCase: '32',
    stateDt: '20211103',
    gubun: '여성',
  },
  {
    confCase: '43',
    stateDt: '20211103',
    gubun: '남성',
  },
  {
    confCase: '240',
    stateDt: '20211102',
    gubun: '0-9',
  },
  {
    confCase: '510',
    stateDt: '20211102',
    gubun: '10-19',
  },
  {
    confCase: '322',
    stateDt: '20211102',
    gubun: '20-29',
  },
  {
    confCase: '205',
    stateDt: '20211102',
    gubun: '30-39',
  },
  {
    confCase: '486',
    stateDt: '20211102',
    gubun: '40-49',
  },
  {
    confCase: '316',
    stateDt: '20211102',
    gubun: '50-59',
  },
  {
    confCase: '247',
    stateDt: '20211102',
    gubun: '60-69',
  },
  {
    confCase: '218',
    stateDt: '20211102',
    gubun: '70-79',
  },
  {
    confCase: '122',
    stateDt: '20211102',
    gubun: '80 이상',
  },
  {
    confCase: '1421',
    stateDt: '20211102',
    gubun: '여성',
  },
  {
    confCase: '1245',
    stateDt: '20211102',
    gubun: '남성',
  },
  {
    confCase: '196',
    stateDt: '20211101',
    gubun: '0-9',
  },
  {
    confCase: '167',
    stateDt: '20211101',
    gubun: '10-19',
  },
  {
    confCase: '160',
    stateDt: '20211101',
    gubun: '20-29',
  },
  {
    confCase: '159',
    stateDt: '20211101',
    gubun: '30-39',
  },
  {
    confCase: '185',
    stateDt: '20211101',
    gubun: '40-49',
  },
  {
    confCase: '50',
    stateDt: '20211101',
    gubun: '50-59',
  },
  {
    confCase: '395',
    stateDt: '20211101',
    gubun: '60-69',
  },
  {
    confCase: '198',
    stateDt: '20211101',
    gubun: '70-79',
  },
  {
    confCase: '78',
    stateDt: '20211101',
    gubun: '80 이상',
  },
  {
    confCase: '1000',
    stateDt: '20211101',
    gubun: '여성',
  },
  {
    confCase: '588',
    stateDt: '20211101',
    gubun: '남성',
  },
]
