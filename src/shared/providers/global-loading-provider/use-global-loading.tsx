import { useCallback, useEffect, useMemo, useRef } from 'react'
import { v4 } from 'uuid'
import { useGlobalLoadingContext } from './use-global-loading-context'

export const useGlobalLoading = () => {
  const uuidv4 = useRef(v4())
  const { loaders, setGlobalLoading, removeGlobalLoading } =
    useGlobalLoadingContext()

  useEffect(() => {
    const uuid = uuidv4.current

    return () => {
      removeGlobalLoading(uuid)
    }
  }, [removeGlobalLoading])

  const setGlobalLoadingCallback = useCallback(
    (state) => setGlobalLoading({ key: uuidv4.current, isLoading: state }),
    [setGlobalLoading],
  )

  return useMemo(
    () => ({
      isLoading: Object.values(loaders).some(Boolean),
      setGlobalLoading: setGlobalLoadingCallback,
    }),
    [loaders, setGlobalLoadingCallback],
  )
}
