import { Input, Label, Div } from './styles'

type radio = {
  title: string
  id: string
}
type Props = {
  list: radio[]
}
import { useState } from 'react'

const InputRadius = ({ title, id }: radio): JSX.Element => {
  const [inputRadius, setInputRadius] = useState('')

  const handleRadiusChange = (event): void => {
    setInputRadius(event.target.value)
  }

  return (
    <Div>
      <Input type="radio" id={id} checked={true} />
      <Label htmlFor={id}>{title}</Label>
    </Div>
  )
}

export default InputRadius
