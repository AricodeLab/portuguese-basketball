/* eslint-disable @typescript-eslint/explicit-function-return-type */
import styled from 'styled-components'

export const Content = styled.div`
  display: flex;
  margin-top: 107px;
  margin-left: 55px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 60px;
`
import { HTMLAttributes } from 'react'

interface CustomComp extends HTMLAttributes<HTMLDivElement> {
  display?: 'flex' | 'grid'
}

export const Div = styled.div<CustomComp>`
  display: ${(props) => props.display || 'flex'};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${(props) => props.display === 'grid' && `gap: 13px;grid-template-columns: repeat(2, 2fr);`}
  width: auto;
  margin: 63px auto;
`

export const Span = styled.div`
  display: flex;
  width: 10vw;
  height: 5vh;
  border-radius: 35px;
  align-items: center;
  text-align: center;
  justify-content: center;
  gap: 14px;
  border: 3px solid #4E2A0E;
`

export const DivLines = styled.div`
  padding: 5px 25px;
  display: flex;
  flex-direction: row;
  gap: 25px;
  text-align: center;
  align-items: center;
  margin: 5px auto;
  .radius-div {
    width: 200px;
  }
`
