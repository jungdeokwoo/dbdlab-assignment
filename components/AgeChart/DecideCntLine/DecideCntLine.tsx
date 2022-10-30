import styled from 'styled-components'
import VerticalLine from './VerticalLine'

const LINE_DATA = [
  { id: 0, count: 0 },
  { id: 1, count: 400 },
  { id: 2, count: 800 },
  { id: 3, count: 1200 },
  { id: 4, count: 1600 },
  { id: 5, count: 2000 },
  { id: 6, count: 2400 },
  { id: 7, count: 2800 },
]

const DecideCntLine = () => {
  return (
    <DecideCntLineWrapper>
      {LINE_DATA.map(item => (
        <VerticalLine key={item.id} count={item.count} />
      ))}
    </DecideCntLineWrapper>
  )
}

export default DecideCntLine

const DecideCntLineWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 400px;
  height: 250px;
`
