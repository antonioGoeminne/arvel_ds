export type VariantProps = 'active' | 'inactive' | 'warning' | 'default'

export interface Props {
  variant?: VariantProps
  textColor?: string
  onClick?: () => void
  label: string
}
