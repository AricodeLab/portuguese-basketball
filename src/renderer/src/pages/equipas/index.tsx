import Box from '@renderer/components/Box'
import { Content } from './style'
import { ContentContainer } from '@renderer/components/Container/style'

function Equipas(): JSX.Element {
  return (
    <ContentContainer>
      <Content>
        <Box target="Equipa 1" width="712px" height="697px"></Box>
        <Box target="Gestor" width="142px" height="101px"></Box>
        <Box target="Equipa 2" width="712px" height="697px"></Box>
      </Content>
    </ContentContainer>
  )
}

export default Equipas
