import styled, { css } from 'styled-components'
import type { ageChartProps } from '../AgeChart'

const Stack = ({ conf }: { conf: ageChartProps }) => {
  return (
    <StackBar width={`${Number(conf.confCase) / 8}px`} color={conf.gubun} />
  )
}

export default Stack

const StackBar = styled.div<{ width: string; color: string }>`
  width: ${({ width }) => width};
  height: 100%;
  ${({ color }) => {
    switch (color) {
      case '0-9':
        return css`
          background-color: red;
        `
      case '10-19':
        return css`
          background-color: orange;
        `
      case '20-29':
        return css`
          background-color: yellow;
        `
      case '30-39':
        return css`
          background-color: green;
        `
      case '40-49':
        return css`
          background-color: blue;
        `
      case '50-59':
        return css`
          background-color: navy;
        `
      case '60-69':
        return css`
          background-color: violet;
        `
      case '70-79':
        return css`
          background-color: aqua;
        `
      default:
        return css`
          background-color: grey;
        `
    }
  }};
`
