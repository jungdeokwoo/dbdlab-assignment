import styled from 'styled-components'

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

const AgeChart = () => {
  return (
    <StackBarChart>
      <DailyStackWrapper>
        <DailyStack>
          <Day>11/01</Day>
          <StackBar>
            <Stack width="30px" color="red" />
            <Stack width="30px" color="blue" />
            <Stack width="30px" color="yellow" />
            <Stack width="30px" color="orange" />
            <Stack width="30px" color="green" />
            <Stack width="30px" color="violet" />
            <Stack width="30px" color="grey" />
          </StackBar>
        </DailyStack>
        <DailyStack>
          <Day>11/02</Day>
          <StackBar>
            <Stack width="50px" color="red" />
          </StackBar>
        </DailyStack>
        <DailyStack>
          <Day>11/03</Day>
          <StackBar>
            <Stack width="50px" color="red" />
          </StackBar>
        </DailyStack>
        <DailyStack>
          <Day>11/04</Day>
          <StackBar>
            <Stack width="50px" color="red" />
          </StackBar>
        </DailyStack>
        <DailyStack>
          <Day>11/05</Day>
          <StackBar>
            <Stack width="50px" color="red" />
          </StackBar>
        </DailyStack>
      </DailyStackWrapper>
      <DecideCntLineWrapper>
        <VerticalLine>
          <Line />
          <Count>0</Count>
        </VerticalLine>
        <VerticalLine>
          <Line />
          <Count>400</Count>
        </VerticalLine>
        <VerticalLine>
          <Line />
          <Count>800</Count>
        </VerticalLine>
        <VerticalLine>
          <Line />
          <Count>1200</Count>
        </VerticalLine>
        <VerticalLine>
          <Line />
          <Count>1600</Count>
        </VerticalLine>
        <VerticalLine>
          <Line />
          <Count>2000</Count>
        </VerticalLine>
      </DecideCntLineWrapper>
      <AgeGroupExample>
        <AgeGroupWrapper>
          <ChartColor color="red" />
          <Age>0-9</Age>
        </AgeGroupWrapper>
        <AgeGroupWrapper>
          <ChartColor color="blue" />
          <Age>10-19</Age>
        </AgeGroupWrapper>
        <AgeGroupWrapper>
          <ChartColor color="yellow" />
          <Age>20-29</Age>
        </AgeGroupWrapper>
        <AgeGroupWrapper>
          <ChartColor color="orange" />
          <Age>30-39</Age>
        </AgeGroupWrapper>
        <AgeGroupWrapper>
          <ChartColor color="green" />
          <Age>40-49</Age>
        </AgeGroupWrapper>
        <AgeGroupWrapper>
          <ChartColor color="violet" />
          <Age>50-59</Age>
        </AgeGroupWrapper>
        <AgeGroupWrapper>
          <ChartColor color="grey" />
          <Age>60-69</Age>
        </AgeGroupWrapper>
      </AgeGroupExample>
    </StackBarChart>
  )
}

export default AgeChart

const StackBarChart = styled.div`
  position: relative;
`

const DailyStackWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  height: 200px;
`

const DailyStack = styled.div`
  display: flex;
  align-items: center;
`

const Day = styled.p`
  width: 50px;
  color: ${({ theme }) => theme.chartDay};
`

const StackBar = styled.div`
  display: flex;
  height: 30px;
  z-index: 3;
  opacity: 0.5;
`

const Stack = styled.div<{ width: string; color: string }>`
  width: ${({ width }) => width};
  height: 100%;
  background-color: ${({ color }) => color};
`

const DecideCntLineWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 18px;
  width: 400px;
  height: 250px;
`

const VerticalLine = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80px;
  height: 100%;
`

const Count = styled.p`
  color: ${({ theme }) => theme.chartFont};
`

const Line = styled.div`
  height: 100%;
  border: 0.5px solid ${({ theme }) => theme.border};
  margin-bottom: 10px;
`

const AgeGroupExample = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  justify-items: center;
  margin-top: 20px;
`

const AgeGroupWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100px;
  height: 30px;
`

const ChartColor = styled.div<{ color: string }>`
  width: 16px;
  height: 7px;
  background-color: ${({ color }) => color};
  margin-right: 5px;
`

const Age = styled.span``
