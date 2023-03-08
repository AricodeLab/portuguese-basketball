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
  width: 35vw;
  height: 60vh;
`

export const PlayerDiv = styled.div`
  display: flex;
  border-bottom: 3px solid ${(props) => props.theme.colors.brown};
`
export const Foto = styled.div`
  border: 3px solid ${(props) => props.theme.colors.brown};
  border-radius: 20px;
  width: 100%;
  height: 5rem;
`

export const Nsei = styled.div`
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  display: flex;
  padding: 0.5rem;
`
export const Divinput = styled.div`
  height: min-content;
  display: flex;
`
export const ImageD = styled.div`
  width: 20%;
  padding: 0.5rem;
`
export const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 20px;
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

export const N = styled.div`
  width: 40%;
`
