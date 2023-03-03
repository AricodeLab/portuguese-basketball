import { Box, InputRadius } from '@renderer/components/'
import { Content, Div, DivLines } from './styles'

function Monitores(): JSX.Element {
  return (
    <Content>
      <Box target="Opções de ecrã">
        <Div>
          <DivLines>
            <InputRadius radio={{ title: 'Ecrã público', id: '' }} />
            <InputRadius radio={{ title: 'Ecrã tempo de ataque 1', id: '' }} />
            <InputRadius radio={{ title: 'Controle de Ecrã', id: '' }} />
            <InputRadius radio={{ title: 'Ecrã tempo de ataque 2', id: '' }} />
          </DivLines>
        </Div>
      </Box>
      <InputRadius radio={{ title: 'Mostrar ecrã banner', id: '' }} />
    </Content>
  )
}

export default Monitores
