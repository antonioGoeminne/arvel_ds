import * as React from 'react'

import small_logo from '../../images/isologotipo.webp'
import logo from '../../images/logo-horizontal.webp'
import * as Styled from './Logo.styled'
import { Props } from './Logo.types'

export const Logo: React.FC<Props> = ({ size = 'default' }) => {
  return (
    <Styled.Container
      size={size}
      src={size === 'small' ? small_logo : logo}
      alt="arvel"
    />
  )
}
