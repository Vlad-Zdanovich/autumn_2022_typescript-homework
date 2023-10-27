import { createContext, ReactNode, useCallback, useMemo, useState } from 'react'

type LoaderModel = {
  key: string
  isLoading: boolean
}

type LoaderState = Record<string, boolean>

export type GlobalLoadingContextValueType = {
  loaders: LoaderState
  setGlobalLoading: ({ key, isLoading }: LoaderModel) => void
  removeGlobalLoading: (key: string) => void
}

export const GlobalLoadingContext =
  createContext<GlobalLoadingContextValueType>({
    loaders: {},
    setGlobalLoading: ({ key, isLoading }: LoaderModel) => {},
    removeGlobalLoading: (key: string) => {},
  })

type GlobalLoadingProviderProps = {
  children: ReactNode
}

export const GlobalLoadingProvider = ({
  children,
}: GlobalLoadingProviderProps) => {
  const [loaders, setLoader] = useState<LoaderState>({})

  const setGlobalLoading = useCallback(({ key, isLoading }: LoaderModel) => {
    setLoader((prevLoaders) => ({ ...prevLoaders, [key]: isLoading }))
  }, [])

  const removeGlobalLoading = useCallback(
    (key: string) => {
      if (!loaders[key]) {
        return
      }

      const newLoaders = { ...loaders }
      delete newLoaders[key]
    },
    [loaders],
  )

  const value: GlobalLoadingContextValueType = useMemo(
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
