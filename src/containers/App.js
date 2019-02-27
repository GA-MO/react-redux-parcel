import React, { memo, Suspense } from 'react'
import { Global, css } from '@emotion/core'

const globalStyles = css`
  html,
  body {
    background: #fcfcfc;
  }
`
export default memo(props => (
  <Suspense fallback={null}>
    <Global styles={globalStyles} />
    {props.children}
  </Suspense>
))
