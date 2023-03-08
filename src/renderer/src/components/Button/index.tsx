import { CustomText, CustonButton, CustonButton2, CustonButton3 } from './style'

type Props = {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  children?: string | JSX.Element
  type: number
}
// eslint-disable-next-line @typescript-eslint/no-empty-function

function Button({ onClick, children, type }: Props): JSX.Element {
  switch (type) {
    case 1:
      return (
        <CustonButton onClick={onClick} primaly>
          <CustomText>{children}</CustomText>
        </CustonButton>
      )
    case 2:
      return (
        <CustonButton onClick={onClick} primaly={false}>
          <CustomText>{children}</CustomText>
        </CustonButton>
      )
    case 3:
      return (
        <CustonButton2 onClick={onClick}>
          <CustomText>{children}</CustomText>
        </CustonButton2>
      )
    case 4:
      return (
        <CustonButton3 onClick={onClick} primaly>
          {children}
        </CustonButton3>
      )
    default:
      return (
        <CustonButton onClick={onClick} primaly>
          <CustomText>{children}</CustomText>
        </CustonButton>
      )
  }
}

export default Button
