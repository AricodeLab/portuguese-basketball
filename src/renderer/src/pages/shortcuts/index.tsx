import { Box, Container } from '@renderer/components/'

import { Content, MainDiv } from './style'
function Shortcuts(): JSX.Element {
  return (
    <Container>
      <MainDiv>
        <Box target="Time 1" type={1}>
          <Content></Content>
        </Box>
        <Box target={'Time 2'} type={1}>
          <Content></Content>
        </Box>
        <Box target="" type={1}>
          <Content></Content>
        </Box>
      </MainDiv>
    </Container>
  )
}

export default Shortcuts
