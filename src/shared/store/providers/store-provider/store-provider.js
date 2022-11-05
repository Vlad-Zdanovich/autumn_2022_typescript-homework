import { createContext, useReducer, useContext } from 'react'
import { initialState, mainReducer } from '../../store'

export const Context = createContext({
  state: initialState,
  dispatch: () => null,
})

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, initialState)

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  )
}

export const useStore = () => useContext(Context)
