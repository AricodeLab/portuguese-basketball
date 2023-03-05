/* eslint-disable @typescript-eslint/explicit-function-return-type */
import styled from 'styled-components'

export const Scroll = styled.div`
  width: 98%;
  height: 90%;

  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 12px;
  }
  &::-webkit-scrollbar-track {
    border: 3px solid #a46a37;
    border-radius: 20px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.colors.brown};
    border-radius: 20px;
    padding: 10px;
    margin: 10px;
  }
`
