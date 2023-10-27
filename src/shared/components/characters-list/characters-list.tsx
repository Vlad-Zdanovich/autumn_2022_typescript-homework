import classnames from 'classnames'

import { CharacterCard } from '../character-card'
import styles from './characters-list.module.scss'
import { CharacterResponse } from '../../models/character'

type CharactersListProps = {
  characters: CharacterResponse[]
  className: string
}

export const CharactersList = ({
  characters,
  className,
}: CharactersListProps) => {
  return (
    <ul className={classnames(styles.wrapper, className)}>
      {characters.map(({ id, name, image, status, species, gender }) => (
        <li key={id}>
          <CharacterCard
            name={name}
            imgUrl={image}
            status={status}
            species={species}
            gender={gender}
          />
        </li>
      ))}
    </ul>
  )
}
