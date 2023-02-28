import { CustomText, CustonButton } from './style'

type Props = {
  children: string
  isprimaly: boolean | null | undefined
}

function Button({ children, isprimaly }: Props): JSX.Element {
  return (
    <>
      {isprimaly ? (
        <CustonButton primaly>
          <CustomText>{children}</CustomText>
        </CustonButton>
      ) : (
        <CustonButton primaly={false}>
          <CustomText>{children}</CustomText>
        </CustonButton>
      )}
    </>
  )
}

export default Button
