import { MainDiv, BotoesDiv, TextoName, XTexto, Input, XDiv } from './style'
import GayPorn from '../GayPorn.interface'
import { useState } from 'react'
import { Box } from '@renderer/components'
interface Props {
  buttons: GayPorn[]
}

const ShortCutsButtons = ({ buttons }: Props): JSX.Element => {
  return (
    <MainDiv>
      {buttons.map(({ key, name, defaultValue }: GayPorn): JSX.Element => {
        const [inputValue, setValue] = useState<string>(defaultValue)

        const changeHandle = (event: React.KeyboardEvent<HTMLInputElement>): void => {
          //console.log(`${key} : ${target.value}`)

          setValue(event.key.toUpperCase())
        }

        return (
          <BotoesDiv key={key}>
            <Box type={1} target="">
              <TextoName>{name}</TextoName>
            </Box>

            <Input value={inputValue} onKeyDown={changeHandle} onChange={(): void => {}} />

            <XDiv>
              <XTexto onClick={(): void => setValue('')}>x</XTexto>
            </XDiv>
          </BotoesDiv>
        )
      })}
    </MainDiv>
  )
}

export default ShortCutsButtons
