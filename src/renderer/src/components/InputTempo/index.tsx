import { useState } from 'react'
import { Div, Label, Triangle, Input } from './styles'

type Props = {
  title: string
}

const InputTempo = ({ title }: Props): JSX.Element => {
  const [quantity, setQuantity] = useState(1)
  return (
    <Div flexDirection="row">
      <Div flexDirection="column">
        <Label>{title}</Label>
        <Input type={'number'} value={quantity}></Input>
      </Div>
      <Div flexDirection="column" gap="14px">
        <Triangle
          bgColor="#288435"
          increment
          onClick={(): void => {
            setQuantity(quantity + 1)
          }}
        ></Triangle>
        <Triangle
          bgColor="#D5001B"
          onClick={(): void => {
            if (quantity == 0) return
            setQuantity(quantity - 1)
          }}
        ></Triangle>
      </Div>
    </Div>
  )
}

export default InputTempo
