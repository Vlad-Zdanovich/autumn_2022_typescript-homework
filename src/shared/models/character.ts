
export type CharacterGender =  "Female" | "Male" | "Genderless" | "unknown"
export type CharacterStatus =  "Alive" | "Dead" | "unknown"

export type CharactersResponse = {
    info: CharactersInfoResponse,
    results: CharacterResponse[]
}

export type CharactersInfoResponse = {
    count: number,
    pages: number,
    next?: string,
    prev?: string
}

export type CharacterResponse = {
    id: number,
    name: string,
    status: CharacterStatus,
    species: string,
    type: string,
    gender: CharacterGender,
    origin: {
        name: string,
        url: string
    },
    location: {
        name: string,
        url: string
    },
    image: string,
    episode: string[],
    url: string,
    created: string
}