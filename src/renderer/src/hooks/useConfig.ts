import { useState, useEffect } from 'react'

import { store, schema } from '../../../main/store'

type Schema = typeof schema

export function useConfig<K extends keyof Schema>(key: K): Schema[K]['default'] {
  const defaultValue = store.get(key, schema[key].default) as Schema[K]['default']
  const [value, setValue] = useState<Schema[K]['default']>(defaultValue)

  useEffect(() => {
    const unsubscribe = store.onDidChange(key, (newValue) => {
      setValue(newValue as Schema[K]['default'])
    })

    return unsubscribe
  }, [key])

  return value
}
