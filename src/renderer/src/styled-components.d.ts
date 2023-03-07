import 'styled-components'
import { Color } from './types'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      brown: string
      whitegray: string
      white: string
      red: string
      grey: string
      penis: string
      orange: string
      black: string
      target_color: string
      bege: string
    }
    backgrounds: {
      light: string
    }
    banners: {
      preto: Color
      cinsa: Color
      verdeClaro: Color
      azul: Color
      vermelhoEscuro: Color
      tijolo: Color
      amarelho: Color
      cinsaEscuro: Color
      verdeEscuro: Color
      marromEscuro: Color
      azulClaro: Color
    }
  }
}
