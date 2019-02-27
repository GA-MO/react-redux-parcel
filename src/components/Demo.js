import React, { memo } from 'react'
import styled from '@emotion/styled'

export default memo(props => {
  return (
    <Style>
      <h1>Hello: {props.name}</h1>
    </Style>
  )
})

const Style = styled.div`
  label: Demo;
  text-align: center;

  h1 {
    font-size: 40px;
  }
`
