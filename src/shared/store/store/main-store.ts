import { charactersReducer, ComposedCharacterAction } from '../characters-reducer'
import { CharacterStore, initialCharactersStore } from './characters-store'

export type Store = {
  characters: CharacterStore
}

export type Action = ComposedCharacterAction

export const initialState: Store = {
  characters: initialCharactersStore,
}

export const mainReducer = ({ characters }: Store, action: Action): Store => ({
  characters: charactersReducer(characters, action),
})
