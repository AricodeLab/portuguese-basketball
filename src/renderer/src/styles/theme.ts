import { shade } from 'polished'

export type defaultThemeI = {
  theme: {
    colors: {
      brown: '#A46A37'
      whitegray: '#E4D5C2'
      white: '#E1E1E6'
      red: '#E96379'
      grey: string
    }
    backgrounds: {
      light: '#FFFFFF'
    }
  }
}
export const defaultTheme = {
  colors: {
    brown: '#A46A37',
    whitegray: '#E4D5C2',
    white: '#E1E1E6',
    red: '#E96379',
    grey: shade(0.3, '#E1E1E6'),
    penis: shade(2, '#CAAF8D'),
    orange: '#D18421'
  },
  backgrounds: {
    light: '#FFFFFF'
  }
}
