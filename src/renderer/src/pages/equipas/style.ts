/* eslint-disable @typescript-eslint/explicit-function-return-type */
import styled from 'styled-components'

export const Content = styled.div`
  max-width: 100%;
  width: 100%;
  display: flex;
  position: relative;
  justify-content: space-evenly;
  @media (min-width: 1200px) {
    padding: 10px;
  }
  @media (min-width: 1400px) {
    padding: 55px;
  }
`
export const Div = styled.div`
  padding: 2rem;
  width: 30vw;
  height: 60vh;
`

export const Foto = styled.div`
  border: 3px solid ${(props) => props.theme.colors.brown};
  border-radius: 20px;
  width: 6rem;
  height: 5rem;
`
export const Img = styled.img`
  width: 100%;
  height: 100%;
`
export const H1 = styled.h1`
  margin-right: 5px;
  align-self: center;
  font-size: 140%;
`
export const Info = styled.div`
  justify-content: center;
  padding-top: 10px;
  display: flex;
`

export const Header = styled.div`
  display: flex;
  justify-content: end;
`

export const TextB = styled.p`
  text-align: center;
  font-size: 50%;
  background: none;
  border-radius: 35px;
  border: 3px solid ${(props) => props.theme.colors.brown};
  padding: 0.2em 1.7em;
  margin-left: 15px;
  color: ${(props) => props.theme.colors.black};
`
export const DivPlayers = styled.div`
  flex-wrap: wrap;
  display: flex;
  margin-top: 1rem;
  width: 100%;
  height: 65%;
  border-radius: 35px;
  border: 3px solid ${(props) => props.theme.colors.brown};
  color: ${(props) => props.theme.colors.black};
  align-content: center;
`
export const Scroll = styled.div`
  width: 98%;
  height: 90%;

  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 12px;
  }
  &::-webkit-scrollbar-track {
    border: 3px solid #a46a37;
    border-radius: 20px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.colors.brown};
    border-radius: 20px;
    padding: 10px;
    margin: 10px;
  }
`
