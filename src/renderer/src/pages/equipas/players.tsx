import Player from './player'
import { DivPlayers, Scroll } from './style'

const players = Array.from({ length: 17 }, (_, index) => index + 1)

function Players(): JSX.Element {
  return (
    <DivPlayers>
      <Scroll>
        {players.map((n) => {
          return <Player key={n}></Player>
        })}
      </Scroll>
    </DivPlayers>
  )
}

export default Players
