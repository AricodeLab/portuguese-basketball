import styled from 'styled-components'

const InputColor = styled.input.attrs({ type: 'color' })`
  -webkit-appearance: none;
  border: transparent;
  background-color: transparent;
  &::-webkit-color-swatch-wrapper {
    padding: 0;
  }
  &::-webkit-color-swatch {
    border: none;
    border-radius: 30% 30%;
    padding: 5px 10px;
  }
`

export default InputColor
