import GayPorn from './GayPorn.interface'

interface ListaGayPorn {
  key: string
  lista: GayPorn[]
}
export const BotoesContent1: Array<ListaGayPorn> = [
  {
    key: 'Content1.1',
    lista: [
      {
        key: '1',
        name: 'Golos +1',
        defaultValue: 'Q'
      },
      {
        key: '2',
        name: 'Golos -1',
        defaultValue: 'W'
      },
      {
        key: '3',
        name: 'Falta +1',
        defaultValue: 'C'
      },
      {
        key: '4',
        name: 'Falta -1',
        defaultValue: 'T'
      }
    ]
  },
  {
    key: 'Content1.2',
    lista: [
      {
        key: '5',
        name: 'Parte +1',
        defaultValue: 'N'
      },
      {
        key: '6',
        name: 'Parte -1',
        defaultValue: 'L'
      }
    ]
  }
]
export const BotoesContent2: Array<ListaGayPorn> = [
  {
    key: 'Content2.1',
    lista: [
      {
        key: '7',
        name: 'Golos +1',
        defaultValue: 'B'
      },
      {
        key: '8',
        name: 'Golos -1',
        defaultValue: 'F'
      },
      {
        key: '9',
        name: 'Falta +1',
        defaultValue: 'E'
      },
      {
        key: '10',
        name: 'Falta -1',
        defaultValue: 'Z'
      }
    ]
  },
  {
    key: 'Content2.2',
    lista: [
      {
        key: '11',
        name: 'Reset',
        defaultValue: 'I'
      }
    ]
  }
]
export const BotoesContent3: Array<ListaGayPorn> = [
  {
    key: 'Content3.1',
    lista: [
      {
        key: '12',
        name: 'Limpar valores',
        defaultValue: 'P'
      },
      {
        key: '13',
        name: 'Novo jogo',
        defaultValue: 'V'
      },
      {
        key: '14',
        name: 'Som Hom',
        defaultValue: 'M'
      },
      {
        key: '15',
        name: 'Som Buzina',
        defaultValue: 'X'
      },
      {
        key: '16',
        name: 'Monstrar placar',
        defaultValue: 'Y'
      }
    ]
  },
  {
    key: 'Content3.2',
    lista: [
      {
        key: '17',
        name: 'Start/Stop',
        defaultValue: 'H'
      }
    ]
  }
]
