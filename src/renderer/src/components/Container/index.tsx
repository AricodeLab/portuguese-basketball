import styled from 'styled-components'

const ContentContainer = styled.main`
  max-width: 100vw;
  margin: auto;
  height: auto;
`
type Props = {
  children: JSX.Element
}
const MainContainer = ({ children }: Props): JSX.Element => {
  return <ContentContainer>{children}</ContentContainer>
}
export default MainContainer
