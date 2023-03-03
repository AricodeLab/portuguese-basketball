import { Button } from '../../Components/'
import { Div, Header } from './style'
import { useForm } from 'react-hook-form'
import useFilePreview from '@renderer/hooks/useFilePreview'
import { useEffect, useState } from 'react'

interface IFormInputs {
  file: File
}
function Form(): JSX.Element {
  const { register, watch } = useForm<IFormInputs>()

  const file = watch('file')
  const [filepreviw, setFilepreviw] = useState<File | null>(null)

  useEffect(() => {
    if (file && file[0]) {
      setFilepreviw(file[0])
    }
    console.log(filepreviw)
  }, [file])

  return (
    <Div>
      <Header>
        <Button type={3}>Salvar</Button>
        <Button type={3}>Importar</Button>
      </Header>
      <div>
        <h1>Logo</h1>
        <input type="file" id="file" {...register('file')} />
        {filepreviw ? <img width="70" height="50" src={filepreviw.name} alt="preview" /> : null}
        <button
          onClick={() => {
            console.log(filepreviw)
          }}
        ></button>
      </div>
    </Div>
  )
}

export default Form
