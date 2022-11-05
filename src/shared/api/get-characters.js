import { makeRequest } from './make-request'
import { paths } from './consts'

export const getCharacters = async () => {
  return await makeRequest(paths.characters)
}
