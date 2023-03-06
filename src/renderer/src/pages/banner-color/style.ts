import styled from 'styled-components'

export const Content = styled.div`
  width: 80vw;
  height: 90vh;
  padding: 1vw;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

export const GridContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  margin: auto;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(5, 1fr) repeat(3, 1fr) repeat(3, 1fr);
  gap: 10px;
`

interface DivLineProps {
  flexDirection: 'row' | 'column'
}

export const DivLines = styled.div<DivLineProps>`
  max-width: 80vw;
  max-height: 70vh;
  display: flex;
  margin: auto;
  text-align: left;
  flex-direction: ${({ flexDirection }): string => flexDirection};
  .input-area {
    gap: 50px;
    width: auto;
    align-self: flex-start;
    align-items: center;
    grid-area: input;
  }
`
