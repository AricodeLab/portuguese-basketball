import SelectImg from './selectImg'
import { Divinput, ImageD, Nsei, PlayerDiv } from './style'
import { InputCircle } from '@renderer/components'
function Player(): JSX.Element {
  return (
    <PlayerDiv>
      <ImageD>
        <SelectImg label={false} />
      </ImageD>
      <Nsei>
        <Divinput>
          <Nsei>
            <InputCircle />
          </Nsei>
          <Nsei>
            <InputCircle />
          </Nsei>
          <Nsei>
            <InputCircle />
          </Nsei>
        </Divinput>
      </Nsei>
    </PlayerDiv>
  )
}

export default Player
