import React, { createContext, useReducer, useContext, ReactNode } from 'react'
import { initialState, mainReducer } from '../../store'

type Props = {
  children: ReactNode
}

export const Context = createContext({
  state: initialState,
  dispatch: () => null,
})

export const StoreProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(mainReducer, initialState)

  
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  )
}

export const useStore = () => useContext(Context)
