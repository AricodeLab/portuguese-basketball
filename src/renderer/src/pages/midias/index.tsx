import Box from '@renderer/components/Box'
import Button from '@renderer/components/Button'
import ContainerMain from '@renderer/components/Container/index'

import { Content } from './style'

function Midias(): JSX.Element {
  return (
    <ContainerMain>
      <Content>
        <Box target="Inicio de jogo" width="520px" height="700px">
          <Button type={2}>Salvar</Button>
          <Button type={2}>Importar</Button>
        </Box>
        <Box target="Intervalo" width="520px" height="700px">
          <Button type={2}>Salvar</Button>
          <Button type={2}>Importar</Button>
        </Box>
        <Box target="Desconto de tempo" width="520px" height="700px">
          {' '}
          <Button type={2}>Salvar</Button>
          <Button type={2}>Importar</Button>
        </Box>
      </Content>
    </ContainerMain>
  )
}

export default Midias
