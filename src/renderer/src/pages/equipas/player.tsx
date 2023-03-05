import { InputCircle } from '@renderer/components/style'
import SelectImg from './selectImg'
import { Divinput, ImageD, Nsei, PlayerDiv } from './style'

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
