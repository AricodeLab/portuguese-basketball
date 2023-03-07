import bannerColor from './bannerColor.interface'
import defaultTheme from '@renderer/theme'

const Data: Array<bannerColor> = [
  {
    defaultValue: defaultTheme.banners.preto,
    title: 'Fundo'
  },
  {
    defaultValue: defaultTheme.banners.cinsa,
    title: 'Equipas nome'
  },
  {
    defaultValue: defaultTheme.banners.verdeClaro,
    title: 'Cor da camisola visitada'
  },
  {
    defaultValue: defaultTheme.banners.azul,
    title: 'Cor da camiseta Visitante'
  },
  {
    defaultValue: defaultTheme.banners.vermelhoEscuro,
    title: 'Fundo',
    withCheck: true
  },
  {
    defaultValue: defaultTheme.banners.tijolo,
    title: 'Golos'
  },
  {
    defaultValue: defaultTheme.banners.amarelho,
    title: 'Faltas',
    withCheck: true
  },
  {
    defaultValue: defaultTheme.banners.cinsaEscuro,
    title: 'Tempo de ataque',
    withCheck: true
  },
  {
    defaultValue: defaultTheme.banners.verdeEscuro,
    title: 'Chorma key background',
    withCheck: true
  },
  {
    defaultValue: defaultTheme.banners.cinsaEscuro,
    title: 'Tempo de jogo'
  },
  {
    defaultValue: defaultTheme.banners.azulClaro,
    title: 'Parte do jogo'
  }
]
export default Data
