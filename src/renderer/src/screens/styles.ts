/* eslint-disable @typescript-eslint/explicit-function-return-type */
import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background: ${(props) => props.theme.backgrounds.pene};
  overflow: hidden;
  display: flex;
  flex-direction: column;
`

export const Content = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
`

export const CurrentConnection = styled.div`
  display: flex;
  flex: 1;
`
