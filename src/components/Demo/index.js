import React, { memo } from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

const Demo = memo(props => {
  return (
    <Style>
      <h1>Hello: {props.name}</h1>
    </Style>
  )
})

Demo.propTypes = {
  name: PropTypes.string.isRequired
}

export default Demo

const Style = styled.div`
  label: Demo;
  text-align: center;

  h1 {
    font-size: 40px;
  }
`
