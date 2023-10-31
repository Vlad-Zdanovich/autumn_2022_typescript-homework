import { CharacterResponse } from "../../models/character"
import { CharacterStore } from "../store/characters-store"

type CharacterActionType = "SET_CHARACTERS"

type CharacterAction<Type extends CharacterActionType, Payload> = {
  type: Type
  payload: Payload
}

type SetCharactersAction = CharacterAction<"SET_CHARACTERS", {
  characters: CharacterResponse[]
}>

export type ComposedCharacterAction = SetCharactersAction

export const charactersReducer = (state: CharacterStore, action: ComposedCharacterAction): CharacterStore => {
  switch (action.type) {
    case "SET_CHARACTERS":
      const { characters } = action.payload

      return characters.reduce<CharacterStore>((acc, character) => {
        acc[character.id] = character

        return acc
      }, {})
    default:
      return state
  }
}
