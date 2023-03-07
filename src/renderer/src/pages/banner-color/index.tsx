/* eslint-disable @typescript-eslint/no-unused-vars */
import { Container, Box, InputColor, Button, InputRadius } from '@renderer/components/'
import { Content, DivLines, GridContainer } from './style'
// import { useForm } from 'react-hook-form'
import Data from './Data'
// muda pra lib
import { v4 as uuidv4 } from 'uuid'

function BannerColor(): JSX.Element {
  // const { register, watch } = useForm()

  return (
    <Container>
      <Box type={1} target="">
        <Content>
          <GridContainer>
            {Data.map((item) => {
              const id = uuidv4()

              return (
                <DivLines
                  key={item?.withCheck ? item.title + 'check' : item.title}
                  flexDirection="column"
                >
                  <p>{item.title}</p>
                  <div>
                    <DivLines flexDirection="row">
                      {item?.withCheck ? <InputRadius radio={{ id: id, title: '' }} /> : null}
                      <DivLines className="input-area" flexDirection="row">
                        <InputColor id={id} />
                        <label htmlFor={id}>
                          <Button type={3}>Alterar</Button>
                        </label>
                      </DivLines>
                    </DivLines>
                  </div>
                </DivLines>
              )
            })}
          </GridContainer>
        </Content>
      </Box>
    </Container>
  )
}

export default BannerColor
