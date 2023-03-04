import styled from 'styled-components'

export const Content = styled.div`
  flex-direction: row;
  width: 100%;

  .item {
    display: flex;
    flex-direction: row;
    margin: 4px;
    justify-content: space-between;
    .mediaUpload {
      display: none;
    }
  }
  button {
    background-color: #00000001;
    border-color: #98692c;
    border-radius: 2px;
    border-style: solid;
  }
  button.close {
    background: none;
    border: none;
    color: red;
    font-size: 20px;
    cursor: pointer;
    font-weight: bold;
  }
  .play {
    display: inline-block;
    color: #fff;
    border: none;
    font-size: 10px;
    cursor: pointer;
  }
  .play:hover .iconPlay {
    border-left: 15px solid blue;
  }
  .iconPlay {
    display: inline-block;
    width: 0;
    height: 0;
    border-top: 10px solid transparent;
    border-left: 15px solid green;
    border-bottom: 10px solid transparent;
    margin-right: 10px;
    vertical-align: middle;
  }

  .time {
    border: 2px solid #98692c;
    padding: 2px;
  }
`
