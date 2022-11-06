import { useContext } from 'react'
import { GlobalLoadingContext } from './global-loading-provider'

export const useGlobalLoadingContext = () => useContext(GlobalLoadingContext)
