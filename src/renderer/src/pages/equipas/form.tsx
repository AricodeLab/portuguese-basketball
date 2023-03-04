import { Button } from '../../components/'
import { Div, H1, Header, Info } from './style'
import Players from './players'
import SelectImg from './selectImg'
import { InputCircle } from '@renderer/components/'

function Form(): JSX.Element {
  return (
    <Div>
      <Header>
        <Button type={3}>Salvar</Button>
        <Button type={3}>Importar</Button>
      </Header>
      <Info>
        <H1>Logo</H1>
        <SelectImg />
        <H1>Nome</H1>
        <div style={{ alignSelf: 'center' }}>
          <InputCircle type="text" />
        </div>
      </Info>
      <Players />
    </Div>
  )
}

export default Form
