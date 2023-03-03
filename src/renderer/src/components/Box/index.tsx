import { BoxContent, Target } from './style'

type Props = {
  children: JSX.Element | JSX.Element[]
  target: string
}
function Box({ children, target }: Props): JSX.Element {
  return (
    <BoxContent>
      <>
        <Target>{target}</Target>
        {children}
      </>
    </BoxContent>
  )
}

export default Box
