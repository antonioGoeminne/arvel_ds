import type { Meta, StoryObj } from '@storybook/react'
import {
  DollarSign,
  HomeIcon,
  Package,
  TicketPercent,
  Users
} from 'lucide-react'

import { Tag } from '../../atoms'
import { Sidebar } from './'

const meta: Meta<typeof Sidebar> = {
  title: 'Molecule/Sidebar',
  component: Sidebar,
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    open: {
      options: [true, false],
      control: { type: 'radio' }
    }
  },
  args: {}
}

export default meta
const defaultOptions = [
  { label: 'Home', state: false, Icon: HomeIcon },
  { label: 'Productos', state: false, Icon: Package },
  { label: 'Ventas', state: false, Icon: DollarSign },
  { label: 'Clientes', state: false, Icon: Users },
  {
    label: 'Cupones',
    state: false,
    Icon: TicketPercent,
    WithTag: Tag({ label: 'Nuevo', variant: 'active' })
  }
]

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    options: defaultOptions
  }
}
