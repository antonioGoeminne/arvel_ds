import * as Styled from './Avatar.styled'
import { Props } from './Avatar.types'

export const Avatar: React.FC<Props> = ({ src, size = 'sm' }) => {
  return (
    <Styled.Avatar
      size={size}
      src={src}
    />
  )
}
