import { Box, Container } from '@renderer/components/'
import ShortCutsButtons from './shortCutsButtons'
import { Content, MainDiv } from './style'
import GayPorn from './GayPorn.interface'
interface Lista {
  a: string
}

const Botoes: Array<Array<Array<GayPorn>>> = [
  [
    [
      {
        name: 'Golos +1',
        defaultValue: 'Q'
      },
      {
        name: 'Golos -1',
        defaultValue: 'W'
      },
      {
        name: 'Falta +1',
        defaultValue: 'C'
      },
      {
        name: 'Falta -1',
        defaultValue: 'T'
      }
    ],
    [
      {
        name: 'Parte +1',
        defaultValue: 'N'
      },
      {
        name: 'Parte -1',
        defaultValue: 'L'
      }
    ]
  ],
  [
    [
      {
        name: 'Golos +1',
        defaultValue: 'B'
      },
      {
        name: 'Golos -1',
        defaultValue: 'F'
      },
      {
        name: 'Falta +1',
        defaultValue: 'E'
      },
      {
        name: 'Falta -1',
        defaultValue: 'Z'
      }
    ],
    [
      {
        name: 'Reset',
        defaultValue: 'I'
      }
    ]
  ],
  [
    [
      {
        name: 'Limpar valores',
        defaultValue: 'P'
      },
      {
        name: 'Novo jogo',
        defaultValue: 'V'
      },
      {
        name: 'Som Hom',
        defaultValue: 'M'
      },
      {
        name: 'Som Buzina',
        defaultValue: 'X'
      },
      {
        name: 'Monstrar placar',
        defaultValue: 'Y'
      }
    ],
    [
      {
        name: 'Start/Stop',
        defaultValue: 'H'
      }
    ]
  ]
]
function Shortcuts(): JSX.Element {
  return (
    <Container>
      <MainDiv>
        <Box target="Time 1" type={1}>
          <Content>
            {Botoes[0].map((e) => {
              console.log(e)
              return <ShortCutsButtons key={e[0].defaultValue} buttons={e} />
            })}
          </Content>
        </Box>
        <Box target={'Time 2'} type={1}>
          <Content></Content>
        </Box>
        <Box target="" type={1}>
          <Content></Content>
        </Box>
      </MainDiv>
    </Container>
  )
}

export default Shortcuts
