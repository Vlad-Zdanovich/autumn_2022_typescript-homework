import { useEffect, useState } from 'react'
import { CharacterResponse, CharactersResponse } from '../../../models/character'
import { getCharacters } from '../../get-characters'

type UseCharacters = () => {
  data: CharacterResponse[]
  error: string | null
  loading: boolean
}

export const useCharacters: UseCharacters = () => {
  const [characters, setCharacters] = useState<CharacterResponse[]>([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)

    getCharacters()
      .then((characters) => {
        setCharacters(characters.results)
      })
      .catch(setError)
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return { data: characters, error, loading }
}
