import { Input, Label, Div } from './styles'
import { radio } from '@renderer/types'
import { useState } from 'react'
type Props = {
  list?: radio[]
  name?: string
  radio?: radio
}

const InputRadius = ({ list, name, radio }: Props): JSX.Element => {
  if (radio) {
    const [checked, setChecked] = useState(false)
    return (
      <Div flexDirection="row" onClick={(): void => setChecked((e) => !e)}>
        <Input type="radio" id={radio.id} checked={checked} />
        <Label htmlFor={radio.id}>{radio.title}</Label>
      </Div>
    )
  }
  if (list) {
    return (
      <Div flexDirection="column">
        {list.map(({ id, title }: radio) => {
          return (
            <Div key={id} flexDirection="row">
              <Input type="radio" name={name} id={id} />
              <Label htmlFor={id}>{title}</Label>
            </Div>
          )
        })}
      </Div>
    )
  }
  return <></>
}

export default InputRadius
