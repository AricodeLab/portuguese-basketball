/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { Container, Box, InputColor, Button, InputRadius } from '../../components/'

import { Content, DivLines, GridContainer } from './style'
import { formatObjectKeys } from '@renderer/utils/ObjectFormater'
import Data from './Data'

import { v4 as uuidv4 } from 'uuid'
import bannerColor from './bannerColor.interface'

import { useFormContext } from 'react-hook-form'
import { useState } from 'react'

function BannerColor(): JSX.Element {
  const { register } = useFormContext()

  const [bannerColors, setBannerColors] = useState<Record<string, string>>({})

  const handleRegister = (name: string) => {
    setBannerColors((prev) => formatObjectKeys({ ...prev, [name]: '' }))
  }

  return (
    <Container>
      <Box type={1} target="">
        <Content>
          <GridContainer>
            {Data.map((item: bannerColor) => {
              const id = uuidv4()
              const name = `bannerColors.${item.title}`

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
                          value={item.defaultValue}
                          {...register(name)}
                          onChange={(e) => console.log(e.target.value)}
                        />
                        <label htmlFor={id}>
                          <Button
                            type={3}
                            onClick={() => {
                              handleRegister(name)
                            }}
                          >
                            Alterar
                          </Button>
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
