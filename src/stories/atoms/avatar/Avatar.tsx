import * as Styled from './Avatar.styled'
import { Props } from './Avatar.types'

export const Avatar: React.FC<Props> = ({ src, size = 'sm', alt }) => {
  return (
    <Styled.Avatar
      alt={alt}
      size={size}
      src={src}
    />
  )
}
