/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Foto, Img, TextB } from './style'
import { v4 as uuidv4 } from 'uuid'
interface IFormInputs {
  file: File
}

function SelectImg(): JSX.Element {
  const { register, watch } = useForm<IFormInputs>()
  const [preview, setPreview] = useState<string>('')
  const file = watch('file')
  const id = uuidv4()
  useEffect(() => {
    if (!file) {
      return
    }

    if (file) {
      setPreview(URL.createObjectURL(file[0]))
    }

    // free memory when ever this component is unmounted
    // return () => URL.revokeObjectURL(objectUrl)
  }, [file])
  return (
    <>
      <Foto>
        {preview && (
          <Img
            onError={(): void => {
              setPreview(preview)
            }}
            src={preview}
            alt="preview"
          />
        )}
      </Foto>
      <div style={{ marginRight: '1rem', alignSelf: 'center' }}>
        <label htmlFor={id}>
          <TextB>Importar</TextB>
          <input
            style={{ display: 'NONE' }}
            type="file"
            accept="images/*"
            id={id}
            {...register('file')}
          />
        </label>
        <label>
          <TextB
            onClick={(): void => {
              setPreview('')
            }}
          >
            Limpar
          </TextB>
        </label>
      </div>
    </>
  )
}

export default SelectImg
