import { useMemo } from 'react'

export const useCharactersFilter = (characters, filterText) => {
  return useMemo(() => {
    if (!filterText) {
      return characters
    }

    return characters.filter(({ name }) =>
      name.toLowerCase().includes(filterText.toLowerCase()),
    )
  }, [characters, filterText])
}
