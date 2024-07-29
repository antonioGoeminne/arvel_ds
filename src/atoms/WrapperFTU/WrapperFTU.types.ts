export type Pointer =
  | 'top-right'
  | 'top-left'
  | 'bottom-left'
  | 'bottom-right'
  | 'left-top'

export interface Props {
  open: boolean
  children: React.ReactNode
  title: string
  description: string
  actionLabel: string
  hasOverlay?: boolean
  pointerPosition?: Pointer
  onActionClick: () => void
}
