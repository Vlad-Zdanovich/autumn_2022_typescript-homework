import { Character } from "../../models/character"

const SET_CHARACTERS = 'SET_CHARACTERS'

export const charactersReducerActions = {
  setCharacters: SET_CHARACTERS,
}

export const charactersReducer = (state, action) => {
  switch (action.type) {
    case charactersReducerActions.setCharacters:
      const { characters } = action.payload

      return characters.reduce((acc, character) => {
        acc[character.id] = character

        return acc
      }, {})
    default:
      return state
  }
}
