import classnames from 'classnames'

import styles from './character-card.module.scss'
import { CharacterGender, CharacterStatus } from '../../models/character'

const deadCharacterStatus = 'Dead'
const unknownCharacterStatus = 'unknown'

type CharacterCardProps = {
  imgUrl: string
  name: string
  status: CharacterStatus
  species: string
  gender: CharacterGender
  onClick?: () => void
  disabled?: boolean
}

export const CharacterCard = ({
  imgUrl,
  name,
  status,
  species,
  gender,
  onClick,
  disabled = false,
}: CharacterCardProps) => {
  return (
    <div
      className={classnames(styles.card, { [styles.disabled]: disabled })}
      onClick={onClick}
    >
      <div className={styles.image}>
        <img src={imgUrl} alt={name} />
      </div>
      <div className={styles.content}>
        <div>
          <h2 className={styles.name}>{name}</h2>
          <div className={(styles.secondaryText, styles.status)}>
            <div
              className={classnames(styles.dot, {
                [styles.danger]: status === deadCharacterStatus,
                [styles.unknown]: status === unknownCharacterStatus,
              })}
            />
            <span>{status}</span>
          </div>
        </div>
        <div className={styles.section}>
          <div className={styles.secondaryText}>Species:</div>
          <div>{species}</div>
        </div>
        <div className={styles.section}>
          <div className={styles.secondaryText}>Gender:</div>
          <div>{gender}</div>
        </div>
      </div>
    </div>
  )
}
