import styled from 'styled-components'

import { VariantProps } from './Tag.types'

interface TagProps {
  variant: VariantProps
}

const getTagBackgroundColor = (variant: VariantProps): string => {
  switch (variant) {
    case 'active':
      return '#bdf0d5'

    case 'inactive':
      return '#fcd9d9'

    case 'warning':
      return '#fcdec0'
    default:
      return '#1a303d'
  }
}

const getLabelColor = (variant: VariantProps): string => {
  switch (variant) {
    case 'active':
      return '#1a303d'

    case 'inactive':
      return '#1a303d'

    case 'warning':
      return '#1a303d'
    default:
      return '#fff'
  }
}

export const Tag = styled.div<TagProps>`
  display: inline-block;
  font-weight: 800;
  color: ${(props) => getLabelColor(props.variant)};
  padding: 0.2rem 0.4rem;
  font-size: 0.8rem;
  background-color: ${(props) => getTagBackgroundColor(props.variant)};
  border-radius: 0.25rem;
`
