import { BASE_PATH, defaultErrorMessage } from './consts'

export const makeRequest = async<Type>(
  endpointUrl: string,
  basePath: string = BASE_PATH,
  options?: RequestInit,
): Promise<Type> => {
  const url = `${basePath}/${endpointUrl}`

  try {
    const response = await fetch(url, options)
    return await response.json() as Type
  } catch(err) {
    throw new Error(err ?? defaultErrorMessage)
  }
}
