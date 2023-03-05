import { Button } from '../../components/'
import { Div, H1, Header, Info, Nsei } from './style'
import Players from './players'
import SelectImg from './selectImg'
import { InputCircle } from '../../components/'

function Form(): JSX.Element {
  return (
    <Div>
      <Header>
        <Button type={3}>Salvar</Button>
        <Button type={3}>Importar</Button>
      </Header>
      <Info>
        <H1>Logo</H1>
        <div style={{ display: 'flex', width: '10rem' }}>
          <SelectImg />
        </div>

        <H1>Nome</H1>
        <div style={{ alignSelf: 'center' }}>
          <Nsei>
            <InputCircle type="text" />
          </Nsei>

          <Nsei>
            <InputCircle type="text" />
          </Nsei>
        </div>
      </Info>
      <Players />
    </Div>
  )
}

export default Form
