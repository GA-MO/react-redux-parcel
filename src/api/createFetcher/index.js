import axios from 'axios'
import isServiceError from './isServiceError'
import createErrorMessage from './createErrorMessage'

const defaultOptions = {
  useMock: false,
  delay: 0,
  jsonMock: '',
  method: 'get',
  url: '',
  params: {},
  data: {},
  timeout: 10000,
  headers: {}
}

export default userOptions => {
  const options = { ...defaultOptions, ...userOptions }
  const { useMock, jsonMock, url, delay } = options
  const serviceURL = useMock ? `/JSONMockup/${jsonMock}` : url

  return new Promise(resolve => {
    setTimeout(async () => {
      if (useMock) {
        options.method = 'get'
        options.url = serviceURL
      }
      resolve(fetch(options))
    }, delay * 1000)
  })
}

const fetch = async options => {
  const res = await axios(options)
  if (isServiceError(res, options)) {
    createErrorMessage(res, options)
  }
  return res
}
