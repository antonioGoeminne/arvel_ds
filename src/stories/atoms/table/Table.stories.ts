import type { Meta, StoryObj } from '@storybook/react'

import { VariantProps as TagVariants } from '../tag/Tag.types'
import { Table } from './Table'

const meta: Meta<typeof Table> = {
  title: 'Atoms/Table/Table',
  component: Table,
  parameters: {
    layout: 'centered'
  },
  argTypes: {}
}

export default meta

type Story = StoryObj<typeof meta>

interface Default {
  name: string
  id: string
  status?: string
  tagVariant?: TagVariants
}

const defaultItems: Default[] = [
  {
    name: 'Taza de madera',
    status: 'inactive',
    tagVariant: 'inactive',
    id: '1'
  },
  { name: 'taza 2', status: 'active', tagVariant: 'active', id: '1' },
  { name: 'taza 2', status: 'other', tagVariant: 'default', id: '1' }
]

export const Default: Story = {
  args: {
    items: defaultItems,
    columns: [
      { label: 'Nombre', key: 'name' },
      { label: 'Estado', key: 'status', variant: 'tag' }
    ],
    getKey: (item) => item.id
  }
}
