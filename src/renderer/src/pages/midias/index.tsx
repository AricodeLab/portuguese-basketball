import { Container, Box } from '@renderer/components/'

import { Content } from './style'

function Midias(): JSX.Element {
  return (
    <Container>
      <Content>
        <Box target="Inicio de jogo" width="30vw" height="90vh">
          {/* <Button type={2}>Salvar</Button> */}
          {/* <Button type={2}>Importar</Button> */}
        </Box>
        <Box target="Intervalo" width="30vw" height="90vh">
          {/* <Button type={2}>Salvar</Button> */}
          {/* <Button type={2}>Importar</Button> */}
        </Box>
        <Box target="Desconto de tempo" width="30vw" height="90vh">
          {' '}
          {/* <Button type={2}>Salvar</Button> */}
          {/* <Button type={2}>Importar</Button> */}
        </Box>
      </Content>
    </Container>
  )
}

export default Midias
