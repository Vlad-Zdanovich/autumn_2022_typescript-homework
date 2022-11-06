import { useCallback, useEffect, useMemo, useState } from 'react'

import { useStore, charactersReducerActions } from '../../store'
import { useCharacters } from '../../api/hooks'
import { CharactersList } from '../../components/characters-list'
import { useCharactersFilter } from './hooks'

import styles from './characters.module.scss'

export const Characters = () => {
  const [charactersFilter, setCharactersFilter] = useState('')

  const { state, dispatch } = useStore()
  const { data } = useCharacters()

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

  const onChangeHandler = useCallback(({ target }) => {
    setCharactersFilter(target.value)
  }, [])

  const filteredCharacters = useCharactersFilter(characters, charactersFilter)

  return (
    <div className={styles.wrapper}>
      <header>
        <h1 className={styles.header}>Rick and Morty characters</h1>
        <input onChange={onChangeHandler} value={charactersFilter} />
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
