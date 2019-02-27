import { createModule } from 'redux-modux'

const initialState = {
  posts: []
}

const setPosts = (state, action) => ({
  ...state,
  posts: action.posts
})

const handlers = {
  setPosts
}

export default createModule({ moduleName: 'posts', initialState, handlers })
