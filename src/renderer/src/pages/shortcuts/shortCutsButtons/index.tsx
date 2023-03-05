import { MainDiv, BotoesDiv } from './style'
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
          console.log(`${key} : ${target.value}`)
          setValue(target.value)
        }

        return (
          <BotoesDiv key={key}>
            <Box type={3} target="">
              <div>{name}</div>
            </Box>
            <Box type={3} target="">
              <input value={inputValue} onChange={changeHandle} />
            </Box>

            <div>x</div>
          </BotoesDiv>
        )
      })}
    </MainDiv>
  )
}

export default ShortCutsButtons
