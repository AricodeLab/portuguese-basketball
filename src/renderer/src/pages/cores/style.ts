import styled from 'styled-components'

export const GridContainer = styled.div`
  width: 60vw;
  height: 50vh;
  padding: 20px;
  display: grid;
  margin: auto;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr) repeat(6, 1fr) repeat(2, 1fr);
  gap: 10px;
`

export const GridBox = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  height: auto;
  gap: 20px;
  justify-content: center;
  > div {
    background: ${(props): string => props.theme.colors.bege};
  }
`

export const GridRow = styled.div`
  display: flex;
  flex-direction: row;
  width: auto;
  height: auto;
  text-align: left;
  align-items: center;
  justify-content: space-between;
`
