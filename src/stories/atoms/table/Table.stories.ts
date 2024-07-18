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
  src?: string
  alt?: string
}

const defaultSrc =
  'https://cdn.pixabay.com/photo/2017/03/27/14/48/tea-2179175_1280.jpg'

const defaultItems: Default[] = [
  {
    name: 'Taza de madera',
    src: defaultSrc,
    alt: 'taza ed madera',
    status: 'inactive',
    tagVariant: 'inactive',
    id: '1'
  },
  {
    name: 'Taza de madera',
    src: defaultSrc,
    alt: 'taza ed madera',
    status: 'inactive',
    tagVariant: 'active',
    id: '2'
  },
  {
    name: 'Taza de madera',
    src: defaultSrc,
    alt: 'taza ed madera',
    status: 'default',
    tagVariant: 'default',
    id: '3'
  }
]

export const Default: Story = {
  args: {
    items: defaultItems,
    columns: [
      { label: 'Nombre', key: 'name', variant: 'avatar' },
      { label: 'Estado', key: 'status', variant: 'tag' }
    ],
    getKey: (item) => item.id
  }
}
