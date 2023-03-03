import { Content, Div } from './style'

import Box from '../../components/Box'
import Form from './form'

function Equipas(): JSX.Element {
  return (
    <Content>
      <Box target="Equipa 1" type={1}>
        <Form />
      </Box>

      <Box target="Equipa 2" type={1}>
        <Form />
      </Box>
    </Content>
  )
}

export default Equipas
