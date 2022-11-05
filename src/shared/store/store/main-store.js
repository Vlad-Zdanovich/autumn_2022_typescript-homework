import { charactersReducer } from '../characters-reducer'
import { initialCharactersStore } from './characters-store'

export const initialState = {
  characters: initialCharactersStore,
}

export const mainReducer = ({ characters }, action) => ({
  characters: charactersReducer(characters, action),
})
