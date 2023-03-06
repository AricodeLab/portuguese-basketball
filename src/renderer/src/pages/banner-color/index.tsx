/* eslint-disable @typescript-eslint/no-unused-vars */
import { Container, Box, InputColor, Button, InputRadius } from '@renderer/components/'
import { Content, DivLines, GridContainer } from './style'
// import { useForm } from 'react-hook-form'
import { useEffect } from 'react'
import Data from './Data'
// muda pra lib
const GenerateId = (): string => {
  return Math.floor(Math.random() * 777).toString()
}

function BannerColor(): JSX.Element {
  // const { register, watch } = useForm()
  const id = GenerateId()

  useEffect(() => {
    console.log(id)
  }, [id])

  return (
    <Container>
      <Box type={1} target="">
        <Content>
          <GridContainer>
            {Data.map((item) => (
              <DivLines key={item.title.toString()} flexDirection="column">
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
            ))}
          </GridContainer>
        </Content>
      </Box>
    </Container>
  )
}

export default BannerColor
