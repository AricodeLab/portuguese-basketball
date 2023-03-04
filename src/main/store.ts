import Store, { Schema } from 'electron-store'

interface Dummy {
  userTheme: 'light' | 'dark'
}

export const schema: Schema<Dummy> = {
  userTheme: {
    type: 'string',
    enum: ['light', 'dark'],
    default: 'dark'
  }
}
export const store = new Store<Dummy>({ schema, name: 'userData', watch: true })

store.onDidChange('userTheme', (newValue, oldValue) => {
  console.log(`Theme changed from ${oldValue} to ${newValue}`)
})
