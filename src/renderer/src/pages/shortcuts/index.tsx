import { Box, Container } from '@renderer/components/'
import ShortCutsButtons from './shortCutsButtons'
import { MainDiv } from './style'
import { BotoesContent1, BotoesContent2, BotoesContent3 } from './Data'

function Shortcuts(): JSX.Element {
  return (
    <Container>
      <MainDiv>
        <Box target="Time 1" type={1}>
          {BotoesContent1.map(({ key, lista }) => {
            return <ShortCutsButtons key={key} buttons={lista} />
          })}
        </Box>
        <Box target={'Time 2'} type={1}>
          {BotoesContent2.map(({ key, lista }) => {
            return <ShortCutsButtons key={key} buttons={lista} />
          })}
        </Box>
        <Box target="" type={1}>
          {BotoesContent3.map(({ key, lista }) => {
            return <ShortCutsButtons key={key} buttons={lista} />
          })}
        </Box>
      </MainDiv>
    </Container>
  )
}

export default Shortcuts
