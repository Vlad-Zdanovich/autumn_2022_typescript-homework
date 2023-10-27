import { useMemo } from 'react'
import { CharacterResponse } from '../../../../models/character'

export const useCharactersFilter = (characters: CharacterResponse[], filterText: string): CharacterResponse[] => {
  return useMemo(() => {
    if (!filterText) {
      return characters
    }

    return characters.filter(({ name }) =>
      name.toLowerCase().includes(filterText.toLowerCase()),
    )
  }, [characters, filterText])
}