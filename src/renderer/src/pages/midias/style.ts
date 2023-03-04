import styled from 'styled-components'

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  div {
    flex-direction: column;
    margin: 1px;
  }
  @media (min-width: 1400) {
    gap: 44px;
  }
  @media (min-width: 1200px) {
    gap: 10px;
    margin: 35px auto;
  }
  .content {
    min-height: 300px;
    margin-top: 30px;
    width: 90%;
    border: 1px solid #7a4500;
    border-radius: 10px;
  }
  .buttonContent {
  }
`
