import { createActionWithFetching } from '../utils'
import posts from '../modules/posts'
import { fetchPostList } from '../api/fetchers'

const getPostList = () => {
  const callAction = async dispatch => {
    const params = {}
    const { data } = await fetchPostList(params)

    dispatch(
      posts.setPosts({
        posts: data
      })
    )
  }

  return createActionWithFetching({
    loadingMessage: 'Fetching data..',
    successMessage: 'Success',
    callAction
  })
}

export { getPostList }
