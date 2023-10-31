import { makeRequest } from './make-request'
import { paths } from './consts'
import { CharactersResponse } from '../models/character'

export const getCharacters = async () => {
  const result = await makeRequest<CharactersResponse>(paths.characters)
  return result
}
