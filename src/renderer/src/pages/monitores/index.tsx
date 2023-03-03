import { Box, InputRadius } from '@renderer/components/'
import { Content, Div, DivLines } from './styles'

function Monitores(): JSX.Element {
  return (
    <Content>
      <Box target="Opções de ecrã">
        <Div>
          <DivLines>
            <InputRadius title="Ecrã público" id={''} />
            <InputRadius title="Ecrã tempo de ataque 1" id={''} />
            <InputRadius title="Controle de Ecrã" id={''} />
            <InputRadius title="Ecrã tempo de ataque 2" id={''} />
          </DivLines>
        </Div>
      </Box>
      <InputRadius title="Mostrar ecrã banner" id={''} />
    </Content>
  )
}

export default Monitores
