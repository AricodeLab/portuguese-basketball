import { Div, Label, Triangle, Input } from './styles'

type Props = {
  title: string
}

const InputTempo = ({ title }: Props): JSX.Element => {
  return (
    <Div flexDirection="row">
      <p>eeeeeeeeeee</p>
      <Div flexDirection="column">
        <Label>{title}</Label>
        <Input></Input>
      </Div>
      <Div flexDirection="column" gap="14px">
        <Triangle bgColor="#288435" increment></Triangle>
        <Triangle bgColor="#D5001B"></Triangle>
      </Div>
    </Div>
  )
}

export default InputTempo
