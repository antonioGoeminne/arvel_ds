export type VariantProps = 'primary' | 'secondary' | 'success' | 'outlined'

export interface Props {
  variant?: VariantProps
  textColor?: string
  onClick?: () => void
  label: string // children
}
