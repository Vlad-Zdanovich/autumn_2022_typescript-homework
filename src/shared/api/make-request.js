import { BASE_PATH, defaultErrorMessage } from './consts'

export const makeRequest = async (
  endpointUrl,
  options,
  basePath = BASE_PATH,
) => {
  const url = `${basePath}/${endpointUrl}`

  const response = await fetch(url, options)

  const body = await response.json()

  if (!response.ok) {
    throw new Error(body.error ?? defaultErrorMessage)
  }

  return body
}
