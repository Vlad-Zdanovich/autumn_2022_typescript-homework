import { BASE_PATH, defaultErrorMessage } from './consts'

export const makeRequest = async<Type>(
  endpointUrl: string,
  options?: RequestInit,
  basePath: string = BASE_PATH,
): Promise<Type> => {
  const url = `${basePath}/${endpointUrl}`

  try {
    const response = await fetch(url, options)
    return await response.json()
  } catch(err) {
    throw new Error(err ?? defaultErrorMessage)
  }
}
