import * as React from 'react'

import * as Styled from './MenuItem.styled'
import { type Props } from './MenuItem.types'

const iconStyle = {
  width: '14px',
  height: '14px'
}

export const MenuItem: React.FC<Props> = ({ label, state = false, Icon }) => {
  return (
    <Styled.Container state={state}>
      {Icon && <Icon style={{ ...iconStyle }} />}
      <Styled.Label>{label}</Styled.Label>
    </Styled.Container>
  )
}
