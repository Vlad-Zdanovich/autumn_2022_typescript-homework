import { createContext, ReactNode, useCallback, useMemo, useState } from 'react'

type Props = {
  children: ReactNode
}

export const GlobalLoadingContext = createContext({})

export const GlobalLoadingProvider = ({ children }: Props) => {
  const [loaders, setLoader] = useState<Map<string, boolean>>(
    new Map<string, boolean>(),
  )

  const setGlobalLoading = useCallback(
    ([key, isLoading]: [string, boolean]) => {
      setLoader((prevLoaders) => ({ ...prevLoaders, [key]: isLoading }))
    },
    [],
  )

  const removeGlobalLoading = useCallback(
    (key: string) => {
      if (!loaders.get(key)) {
        return
      }

      loaders.delete(key)
    },
    [loaders],
  )

  const value = useMemo(
    () => ({
      loaders,
      setGlobalLoading,
      removeGlobalLoading,
    }),
    [loaders, setGlobalLoading, removeGlobalLoading],
  )

  return (
    <GlobalLoadingContext.Provider value={value}>
      {children}
    </GlobalLoadingContext.Provider>
  )
}
