import { Sizes } from '../avatar/Avatar.types'

export type VariantProps = 'default' | 'error'

export interface Props extends Omit<HTMLInputElement, 'size'> {
  label: string
  variant?: VariantProps
  size?: Sizes
  error?: string
  isLoading?: boolean
}
