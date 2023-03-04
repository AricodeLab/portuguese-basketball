/* eslint-disable @typescript-eslint/explicit-function-return-type */
import styled from 'styled-components'

const InputCircle = styled.input`
  background: none;
  border-radius: 35px;
  border: 3px solid ${(props) => props.theme.colors.brown};
  width: 100%;
  color: ${(props) => props.theme.colors.black};
`
export default InputCircle