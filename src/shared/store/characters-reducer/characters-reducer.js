const SET_CHARACTERS = 'SET_CHARACTERS'

export const charactersReducerActions = {
  setCharacters: SET_CHARACTERS,
}

export const charactersReducer = (state, action) => {
  switch (action.type) {
    case charactersReducerActions.setCharacters:
      const { characters } = action.payload

      return characters.reduce((acc, character) => {
        return (acc[character.id] = character)
      }, {})
    default:
      return state
  }
}
