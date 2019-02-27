import React, { useEffect, Fragment } from 'react'
import { connectRedux } from '../utils'
import { useStateLoading } from '../hooks'
import { getPostList } from '../actions/action'
import Demo from '../components/Demo'

const mapState = state => ({
  posts: state.posts
})

const Home = props => {
  const { loadingPostList, fetchWithLoading } = useStateLoading({
    stateNames: ['loadingPostList']
  })

  useEffect(() => {
    fetchWithLoading({
      name: 'loadingPostList',
      fetcher: () => props.dispatch(getPostList())
    })
  }, [])

  console.log('Posts', props.posts.posts)

  return (
    <Fragment>
      {loadingPostList && <div>{'Loading post list'}</div>}
      <Demo name='React' />
    </Fragment>
  )
}

export default connectRedux(mapState)(Home)
