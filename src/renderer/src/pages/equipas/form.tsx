/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Button } from '../../components/'
import { Div, Header } from './style'
import { useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'

interface IFormInputs {
  file: File
}

function Form(): JSX.Element {
  const { register, watch } = useForm<IFormInputs>()
  const [preview, setPreview] = useState<string>()
  const file = watch('file')

  useEffect(() => {
    if (!file) {
      return
    }
    console.log(file)
    setPreview(URL.createObjectURL(file[0]))

    // free memory when ever this component is unmounted
    // return () => URL.revokeObjectURL(objectUrl)
  }, [file])

  return (
    <Div>
      <Header>
        <Button type={3}>Salvar</Button>
        <Button type={3}>Importar</Button>
      </Header>
      <div>
        <h1>Logo</h1>
        <input type="file" accept="images/*" id="file" {...register('file')} />
        {preview && (
          <img
            width="70px"
            height="50px"
            onLoad={(e) => console.log(e)}
            onError={() => {
              console.log(preview)
              setPreview(preview)
            }}
            src={preview}
            alt="preview"
          />
        )}
      </div>
    </Div>
  )
}

export default Form
