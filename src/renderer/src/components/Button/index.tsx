import { CustomText, CustonButton, CustonButton2 } from './style'

type Props = {
  children?: string
  type: number
}

function Button({ children, type }: Props): JSX.Element {
  switch (type) {
    case 1:
      return (
        <CustonButton primaly>
          <CustomText>{children}</CustomText>
        </CustonButton>
      )
    case 2:
      return (
        <CustonButton primaly={false}>
          <CustomText>{children}</CustomText>
        </CustonButton>
      )
    case 3:
      return (
        <CustonButton2>
          <CustomText>{children}</CustomText>
        </CustonButton2>
      )
    default:
      return (
        <CustonButton primaly>
          <CustomText>{children}</CustomText>
        </CustonButton>
      )
  }
}

export default Button
