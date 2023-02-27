import styled from 'styled-components'
import { defaultThemeI } from '../styles/theme'
export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${(props: defaultThemeI): string => props.theme.backgrounds.light};
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
