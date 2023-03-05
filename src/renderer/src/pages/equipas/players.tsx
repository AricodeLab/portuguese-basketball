import { Scroll } from '@renderer/Components/style'
import Player from './player'
import { DivPlayers } from './style'

const players = Array.from({ length: 17 }, (_, index) => index + 1)

function Players(): JSX.Element {
  return (
    <DivPlayers>
      <Scroll>
        {players.map((n) => {
          return <Player key={n} />
        })}
      </Scroll>
    </DivPlayers>
  )
}

export default Players
