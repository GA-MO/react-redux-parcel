import createFetcher from './createFetcher'

// const host = process.env.HOST || ''

const fetchPostList = params =>
  createFetcher({
    useMock: true,
    method: 'get',
    url: 'https://jsonplaceholder.typicode.com/posts',
    params,
    jsonMock: 'posts.json',
    delay: 0
  })

export { fetchPostList }
