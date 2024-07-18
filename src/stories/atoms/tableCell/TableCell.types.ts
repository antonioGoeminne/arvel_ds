export type VariantProps = 'default' | 'tag' | 'avatar'
import { Sizes } from '../avatar/Avatar.types'
import { VariantProps as TagVariants } from '../tag/Tag.types'

export interface Props {
  variant?: VariantProps
  textColor?: string
  onClick?: () => void
  label?: string // children
  children?: React.ReactNode
  tagVariant?: TagVariants
  src?: string
  alt?: string
  size?: Sizes
}
