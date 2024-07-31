import styled from 'styled-components'

import { Size } from './Logo.types'

interface ContainerProps {
  size: Size
}

const calcWidth = (size: Size): string => {
  switch (size) {
    case 'default':
      return '140px'

    case 'small':
      return '70px'

    default:
      return '180px'
  }
}

export const Container = styled.img<ContainerProps>`
  width: ${(props) => calcWidth(props.size)};
`
