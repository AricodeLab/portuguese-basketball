/* eslint-disable @typescript-eslint/explicit-function-return-type */
import styled from 'styled-components'

type Props = {
  primaly: boolean
}
export const CustonButton = styled.button<Props>`
  background: ${(props) =>
    props.primaly ? props.theme.colors.brown : props.theme.colors.whitegray};
  border-radius: 35px;
  border: 0;
  padding: 0.2em 1.7em;
  margin-left: 15px;
  margin-top: 3px;
  color: ${(props) => (props.primaly ? props.theme.colors.white : props.theme.colors.black)};
  :hover {
    cursor: pointer;
  }
`
export const CustonButton2 = styled.button`
  background: none;
  border-radius: 35px;
  border: 3px solid ${(props) => props.theme.colors.brown};
  padding: 0.2em 1.7em;
  margin-left: 15px;
  color: ${(props) => props.theme.colors.black};
  :hover {
    cursor: pointer;
  }
`
export const CustonButton3 = styled.button<Props>`
  background: ${(props) =>
    props.primaly ? props.theme.colors.brown : props.theme.colors.whitegray};
  border-radius: 35px;
  border: 0;
  color: ${(props) => (props.primaly ? props.theme.colors.white : props.theme.colors.black)};
  :hover {
    cursor: pointer;
  }
`
export const CustomText = styled.h1`
  font-size: 100%;
`
