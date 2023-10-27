import React, {
  createContext,
  useReducer,
  useContext,
  ReactNode,
  Dispatch,
} from 'react'
import { initialState, mainReducer } from '../../store'
import { Store, Action } from '../../store/main-store'

type StoreProviderProps = {
  children: ReactNode
}

export const Context = createContext<{
  state: Store
  dispatch: Dispatch<Action>
}>({
  state: initialState,
  dispatch: () => null,
})

export const StoreProvider = ({ children }: StoreProviderProps) => {
  const [state, dispatch] = useReducer(mainReducer, initialState)

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  )
}

export const useStore = () => useContext(Context)
