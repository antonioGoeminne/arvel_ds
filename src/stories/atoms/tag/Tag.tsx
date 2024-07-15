import * as Styled from './Tag.styled'
import { Props } from './Tag.types'

export const Tag: React.FC<Props> = ({ variant = 'default', label }) => {
  return <Styled.Tag variant={variant}>{label}</Styled.Tag>
}
