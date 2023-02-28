import Store from 'electron-store'

const schema = {}

const config = new Store({
  watch: true
})

export { schema, config }
