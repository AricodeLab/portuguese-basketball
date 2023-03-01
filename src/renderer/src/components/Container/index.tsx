import { ContentContainer } from './style'

type Props = {
  children: JSX.Element | JSX.Element[]
}
const MainContainer = ({ children }: Props): JSX.Element => {
  return <ContentContainer>{children}</ContentContainer>
}
export default MainContainer
