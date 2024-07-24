import { LucideProps } from 'lucide-react'
import { ForwardRefExoticComponent, RefAttributes } from 'react'

type icon = ForwardRefExoticComponent<
  Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>
>

export interface Props {
  label: string
  state: boolean
  Icon?: icon
}
