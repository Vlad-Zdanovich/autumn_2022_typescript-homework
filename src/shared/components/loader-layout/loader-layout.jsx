import classnames from 'classnames'

import { Loader } from '../loader'
import styles from './loader-layout.module.scss'
import { useGlobalLoading } from '../../providers/global-loading-provider'

export const LoaderLayout = ({ children }) => {
  const { isLoading } = useGlobalLoading()

  return (
    <>
      {children}
      <div
        className={classnames(styles.wrapper, { [styles.visible]: isLoading })}
      >
        <Loader />
      </div>
    </>
  )
}
