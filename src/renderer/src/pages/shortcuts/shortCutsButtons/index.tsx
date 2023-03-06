import { MainDiv, BotoesDiv, TextoName, XTexto, Input, XDiv } from './style'
import GayPorn from '../GayPorn.interface'
import { ChangeEvent, useState } from 'react'
import { Box } from '@renderer/components'
interface Props {
  buttons: GayPorn[]
}

const ShortCutsButtons = ({ buttons }: Props): JSX.Element => {
  return (
    <MainDiv>
      {buttons.map(({ key, name, defaultValue }: GayPorn): JSX.Element => {
        const [inputValue, setValue] = useState<string>(defaultValue)

        const changeHandle = ({ target }: ChangeEvent<HTMLInputElement>): void => {
          //console.log(`${key} : ${target.value}`)
          setValue(target.value.toUpperCase())
        }

        return (
          <BotoesDiv key={key}>
            <Box type={1} target="">
              <TextoName>{name}</TextoName>
            </Box>

            <Input value={inputValue} onChange={changeHandle} />

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
