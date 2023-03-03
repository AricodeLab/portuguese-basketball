import styled from 'styled-components'

export const BoxContent = styled.div`
  display: flex;
  background-color: ${(props): string => props.theme.colors.whitegray};
  border-radius: 35px;
  align-items: center;
  text-align: center;
  justify-content: center;
  position: relative;
`

export const Target = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background: ${(props): string => props.theme.colors.target_color};
  border-radius: 35px;
  border: 0;
  padding: 1px 20px;
  z-index: 1;
  color: ${(props): string => props.theme.colors.black};
`
