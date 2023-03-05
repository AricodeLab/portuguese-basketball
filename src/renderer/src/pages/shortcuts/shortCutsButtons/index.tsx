import { MainDiv } from './style'
import GayPorn from '../GayPorn.interface'
interface Props {
  buttons: GayPorn[]
}

const ShortCutsButtons = ({ buttons }: Props): JSX.Element => {
  return (
    <MainDiv>
      {buttons.map(({ name, defaultValue }: GayPorn): JSX.Element => {
        return (
          <>
            <div>{name}</div>
            <input value={defaultValue} />
            <div>x</div>
          </>
        )
      })}
    </MainDiv>
  )
}

export default ShortCutsButtons
