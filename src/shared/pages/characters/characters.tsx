import { ChangeEvent, useCallback, useEffect, useMemo, useState } from 'react'
import { useStore, charactersReducerActions } from '../../store'
import { useCharacters } from '../../api/hooks'
import { CharactersList } from '../../components/characters-list'
import { useCharactersFilter } from './hooks'
import { useGlobalLoading } from '../../providers/global-loading-provider'
import styles from './characters.module.scss'

export const Characters = () => {
  const [charactersFilter, setCharactersFilter] = useState('')

  const { state, dispatch } = useStore()
  const { data, loading } = useCharacters()

  const { setGlobalLoading } = useGlobalLoading()

  useEffect(() => {
    setGlobalLoading(loading)
  }, [loading, setGlobalLoading])

  useEffect(() => {
    dispatch({
      type: charactersReducerActions.setCharacters,
      payload: {
        characters: data,
      },
    })
  }, [data, dispatch])

  const characters = useMemo(
    () => Object.values(state.characters),
    [state.characters],
  )

  const onChangeHandler = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setCharactersFilter(event.target.value)
    },
    [],
  )

  const filteredCharacters = useCharactersFilter(characters, charactersFilter)

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h1 className={styles.title}>Rick and Morty characters</h1>
        <input
          onChange={onChangeHandler}
          value={charactersFilter}
          className={styles.filter}
          placeholder="Enter the character name"
        />
      </header>
      <main>
        <CharactersList
          characters={filteredCharacters}
          className={styles.characterList}
        />
      </main>
    </div>
  )
}
