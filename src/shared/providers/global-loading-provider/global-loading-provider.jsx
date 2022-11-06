import { createContext, useCallback, useMemo, useState } from 'react'

export const GlobalLoadingContext = createContext({})

export const GlobalLoadingProvider = ({ children }) => {
  const [loaders, setLoader] = useState({})

  const setGlobalLoading = useCallback(({ key, isLoading }) => {
    setLoader((prevLoaders) => ({ ...prevLoaders, [key]: isLoading }))
  }, [])

  const removeGlobalLoading = useCallback(
    (key) => {
      if (!loaders[key]) {
        return
      }

      const newLoaders = { ...loaders }
      delete newLoaders[key]
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
