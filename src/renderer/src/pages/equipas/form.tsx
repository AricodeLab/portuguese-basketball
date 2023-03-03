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
  const [filepreviw, setFilepreviw] = useState<string | null>(null)

  useEffect(() => {
    if (file && file[0]) {

      const reader = new FileReader();

      const newlink =URL.createObjectURL(file[0]);
      setFilepreviw(newlink)
    }
    console.log(filepreviw)
  }, [file]);

  return (
    <Div>
      <Header>
        <Button type={3}>Salvar</Button>
        <Button type={3}>Importar</Button>
      </Header>
      <div>
        <h1>Logo</h1>
        <input type="file" id="file" {...register('file')} />

        {filepreviw ? <img src={filepreviw} alt="preview" /> : null}
      </div>
    </Div>
  )
}

export default Form
