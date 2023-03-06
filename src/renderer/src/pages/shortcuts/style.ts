import styled from 'styled-components'

export const MainDiv = styled.div`
  display: flex;
  width: 80vw;
  height: 27em;
  justify-content: center;

  align-items: flex-start;
  > div {
    overflow: hidden;
    width: 100%;
    height: 100%;
    border-radius: 0;
    flex-direction: column;
    justify-content: space-around;
  }
  > div:first-child {
    border-top-left-radius: 35px;
    border-bottom-left-radius: 35px;
  }
  > div:last-child {
    border-top-right-radius: 35px;
    border-bottom-right-radius: 35px;
  }
`
