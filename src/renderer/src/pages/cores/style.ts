import styled from 'styled-components'

export const GridContainer = styled.div`
  width: 80vw;
  max-width: 1200px;
  height: 50vh;
  padding: 20px;
  display: grid;
  margin: auto;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr) repeat(6, 1fr) repeat(2, 1fr);
  gap: 10px;
  > div {
    flex-direction: column;
    justify-content: flex-start;
  }
`

export const GridBox = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  height: auto;
  gap: 20px;
  justify-content: center;
`
