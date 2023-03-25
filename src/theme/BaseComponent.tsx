import React from 'react'
import styled from 'styled-components'
import { StyleSheet } from './StyleSheet'
import { parseStyleSheet } from '@displaykit/responsive_styles'


interface StyledBasedComponent {
  styleSheet?: StyleSheet
}

const StyledBasedComponent = styled.div<StyledBasedComponent>`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  flex-shrink: 0;
  ${({ styleSheet}) => parseStyleSheet(styleSheet)}
`


export const BaseComponent = (props : any) => {
  return (
    <StyledBasedComponent {...props} />
  )
}

BaseComponent.defaultProps = {
  styleSheet: {},
}
