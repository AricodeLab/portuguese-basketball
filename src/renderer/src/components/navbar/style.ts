/* eslint-disable @typescript-eslint/explicit-function-return-type */

import { HtmlHTMLAttributes } from 'react'
import styled from 'styled-components'

export const Container = styled.div.attrs({ className: 'navigation' })`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 29px;
  margin-bottom: 1rem;
  padding: 1rem;
  text-align: center;
  align-items: center;
  max-width: 1000px;
  align-self: center;
`

export const IconImage = styled.img<HtmlHTMLAttributes<HTMLImageElement>>`
  width: 206px;
  height: 58px;
  margin-left: 16vw;
`

export const NavContainer = styled.nav`
  display: flex;
  flex-direction: column;
  max-width: 100vw;
  justify-content: center;
`
