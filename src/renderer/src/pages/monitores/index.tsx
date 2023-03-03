import { Box, Button, InputRadius, InputTempo } from '@renderer/components/'
import { Content, Div, DivLines, Span } from './styles'

function Monitores(): JSX.Element {
  const InputTitles = [
    { title: 'Ecrã público', id: '' },
    { title: 'Controle de Ecrã', id: '' },
    { title: 'Ecrã tempo de ataque 2', id: '' },
    { title: 'Ecrã tempo de ataque 1', id: '' }
  ]
  return (
    <Content>
      <Box target="Opções de ecrã" type={1}>
        <Div>
          {InputTitles.map((item) => (
            <DivLines key={item.id.toString()}>
              <div className="radius-div">
                <InputRadius radio={{ ...item }} />
              </div>
              {/* Input ou Botão ? Não SEI. */}
              <Span>Padrão</Span>
              <Span>Tamanho/Posição</Span>
            </DivLines>
          ))}
        </Div>
        <Div display="grid"></Div>
      </Box>
      <DivLines>
        <InputRadius radio={{ title: 'Mostrar ecrã banner', id: '' }} />
        <Span>Tamanho/Posição</Span>
      </DivLines>
    </Content>
  )
}

export default Monitores
