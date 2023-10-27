import { CharacterResponse } from "../../models/character"

export type CharacterStore = Record<number, CharacterResponse>

export const initialCharactersStore: CharacterStore = {}
