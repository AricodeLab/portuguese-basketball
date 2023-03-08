/* eslint-disable @typescript-eslint/no-unused-vars */
import { Container, Box, InputColor, Button, InputRadius } from '../../components/'
import { Content, DivLines, GridContainer } from './style'

import Data from './Data'

import { v4 as uuidv4 } from 'uuid'
import bannerColor from './bannerColor.interface'
import { useFormContext } from 'react-hook-form'

function BannerColor(): JSX.Element {
  const { register } = useFormContext()

  return (
    <Container>
      <Box type={1} target="">
        <Content>
          <GridContainer>
            {Data.map((item: bannerColor) => {
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
                        <InputColor
                          id={id}
                          type="color"
                          value={item.defaultValue}
                          {...register('colors')}
                        />
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
