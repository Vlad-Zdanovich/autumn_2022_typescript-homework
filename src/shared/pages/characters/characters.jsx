import { useEffect, useMemo } from 'react'

import { useStore, charactersReducerActions } from '../../store'
import { useCharacters } from '../../api/hooks'
import { CharactersList } from '../../components/characters-list'
import styles from './characters.module.scss'

export const Characters = () => {
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

  const characters = useMemo(() => {
    return Object.values(state.characters)
  }, [state.characters])

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>Rick and Morty characters</div>
      <CharactersList
        characters={characters}
        className={styles.characterList}
      />
    </div>
  )
}
