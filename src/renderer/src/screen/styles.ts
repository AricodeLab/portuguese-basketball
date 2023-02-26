import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
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
