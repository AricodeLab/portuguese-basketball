/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { useEffect, useState } from 'react'

export default function useFilePreview(file: File) {
  const [imgSrc, setImgSrc] = useState<string | null>(null)

  useEffect(() => {
    if (file && file[0]) {
      const newUrl = URL.createObjectURL(file[0])

      if (newUrl !== imgSrc) {
        setImgSrc(newUrl)
      }
    }
  }, [file])

  return [imgSrc]
}
