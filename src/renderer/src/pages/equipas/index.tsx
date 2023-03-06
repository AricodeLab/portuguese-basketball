/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Content } from './style'

import Box from '../../components/Box'
import Form from './form'
import SelectImg from './selectImg'

function Equipas(): JSX.Element {
  return (
    <Content>
      <Box target="Equipa 1" type={1}>
        <Form />
      </Box>
      <div style={{ alignSelf: 'flex-end', width: '10%' }}>
        <SelectImg />
      </div>
      <Box target="Equipa 2" type={1}>
        <Form />
      </Box>
    </Content>
  )
}

export default Equipas
