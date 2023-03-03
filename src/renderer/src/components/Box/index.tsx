import { CustomBox, Target } from './style'

type Props = {
  children: JSX.Element | JSX.Element[]
  target: string
  type?: 1 | 2 | 3
}
function Box({ children, target, type }: Props): JSX.Element {
  return (
    <CustomBox type={type}>
      <Target>{target}</Target>
      {children}
    </CustomBox>
  )
}

export default Box
