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
  .relativeBox {
    position: relative;
    display: flex;
    width: 90%;
  }
  .content {
    min-height: 300px;
    max-height: 300px;
    margin-top: 30px;
    width: 100%;
    flex-shrink: 0;
    border: 1px solid #7a4500;
    border-radius: 10px;
    overflow-x: hidden;
    div {
      overflow-x: hidden;
    }
  }

  .addMediaItem {
    position: absolute;
    top: 0;
    right: 0;
    font-size: 32px;
    font-weight: bold;
    background-color: #00000001;
    border: none;
    color: blue;
  }
`
