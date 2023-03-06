import styled from 'styled-components'

export const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background: ${(props): string => props.theme.colors.bege};
  border-radius: 20px;
`

export const BotoesDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  > div {
    border-radius: 5px;
    background-color: ${(props): string => props.theme.colors.orange};
  }
  > div:first-child {
    flex: 4;
  }
`
export const TextoDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.3em;
  flex: 2;
`

export const TextoName = styled.p`
  color: ${(props): string => props.theme.backgrounds.light};
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 300;
  font-size: 0.8em;
  line-height: 1px;
  /* identical to box height */
`

export const Input = styled.input`
  flex: 1;
  text-align: center;
  max-width: 20%;
  color: ${(props): string => props.theme.backgrounds.light};
  background-color: ${(props): string => props.theme.colors.orange};
  border: 0;
  border-radius: 5px;
`
export const XTexto = styled.p`
  color: ${(props): string => props.theme.backgrounds.light};
  max-width: 20%;
`
export const XDiv = styled.div`
  max-height: 45%;
  display: flex;
  background-color: red;
  flex: 1;
  justify-content: center;
  align-items: center;
`
