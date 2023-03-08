/* eslint-disable @typescript-eslint/no-explicit-any */
export function formatObjectKeys(obj: { [key: string]: any }): { [key: string]: any } {
  const formattedObj: { [key: string]: any } = {}
  for (const [key, value] of Object.entries(obj)) {
    const newKey = key.toUpperCase().replace(' ', '_')
    formattedObj[newKey] = value
  }
  return formattedObj
}
