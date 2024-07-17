export type VariantProps = 'default' | 'tag'
import { VariantProps as TagVariants } from '../tag/Tag.types'

export interface Props {
  variant?: VariantProps
  textColor?: string
  onClick?: () => void
  label: string // children
  children: React.ReactNode
  tagVariant?: TagVariants
}
