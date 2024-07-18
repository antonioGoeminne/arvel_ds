import styled from 'styled-components'

import { Sizes } from './Avatar.types'

interface AvatarProps {
  size?: Sizes
}

const calcSize = (size?: Sizes): { width: string; height: string } => {
  if (!size) return { width: '24px', height: '24px' }

  switch (size) {
    case 'sm':
      return { width: '24px', height: '24px' }
    case 'md':
      return { width: '32px', height: '32px' }
    case 'lg':
      return { width: '66px', height: '66px' }
    case 'xl':
      return { width: '88px', height: '88px' }
    default:
      return { width: '24px', height: '24px' }
  }
}

export const Avatar = styled.img<AvatarProps>`
  width: ${(props) => calcSize(props.size).width};
  height: ${(props) => calcSize(props.size).height};
  margin: 0;
  border-radius: 100%;
`
