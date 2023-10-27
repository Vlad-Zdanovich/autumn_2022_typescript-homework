import classnames from 'classnames'

import { Loader } from '../loader'
import styles from './loader-layout.module.scss'
import { useGlobalLoading } from '../../providers/global-loading-provider'
import { ReactNode } from 'react'

type LoaderLayoutProps = {
  children: ReactNode
}

export const LoaderLayout = ({ children }: LoaderLayoutProps) => {
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
