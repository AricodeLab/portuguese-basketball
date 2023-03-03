/* eslint-disable @typescript-eslint/explicit-function-return-type */
import styled from 'styled-components'

export const Content = styled.div`
  max-width: 100%;
  width: 100%;
  display: flex;
  position: relative;
  justify-content: space-evenly;
  @media (min-width: 1200px) {
    padding: 10px;
  }
  @media (min-width: 1400px) {
    padding: 55px;
  }
`
export const Div = styled.div`
  width: 30rem;
  height: 30rem;
`

export const Header = styled.div`
  display: flex;
  justify-content: flex-end;
`
