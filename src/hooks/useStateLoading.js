import { useState } from 'react'

const getInitialState = (stateNames, defaultState) => {
  if (stateNames.length > 0) {
    return stateNames.reduce((result, item) => ({ ...result, [item]: false }), {})
  }

  return {
    [defaultState]: false
  }
}

export default (options = {}) => {
  const { stateNames = [] } = options
  const defaultState = 'loading'

  const [state, setState] = useState(getInitialState(stateNames, defaultState))

  const isStateNameMissing = stateName => {
    if (stateName === defaultState) return false
    if (stateNames.some(name => name === stateName)) return false
    return true
  }

  const createLoading = (stateName = defaultState) => {
    if (isStateNameMissing(stateName)) {
      console.warn(`${stateName} is not defined in stateNames.`)
      return () => null
    }

    setState({
      ...state,
      [stateName]: true
    })

    return () => hideLoading(stateName)
  }

  const hideLoading = stateName => {
    setState({
      ...state,
      [stateName]: false
    })
  }

  const fetchWithLoading = async ({ name, fetcher }) => {
    const closeLoading = createLoading(name)
    try {
      await fetcher()
    } finally {
      closeLoading()
    }
  }

  return {
    ...state,
    fetchWithLoading
  }
}
