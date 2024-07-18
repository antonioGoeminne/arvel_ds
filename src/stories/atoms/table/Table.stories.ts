import type { Meta, StoryObj } from '@storybook/react'

import { VariantProps as TagVariants } from '../tag/Tag.types'
import { Table } from './Table'

const meta: Meta<typeof Table> = {
  title: 'Molecule/Table',
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
  price?: string | number
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
    price: 2000,
    id: 'ZzqnUMuSnddBHIz2dwVM'
  },
  {
    name: 'Taza de madera',
    src: defaultSrc,
    alt: 'taza ed madera',
    status: 'active',
    price: 15000,
    tagVariant: 'active',
    id: 'ZZ8OAzm4bu280uOrVOmY'
  },
  {
    name: 'Taza de madera',
    src: defaultSrc,
    alt: 'taza ed madera',
    status: 'default',
    price: 50000,
    tagVariant: 'default',
    id: 'ZuvrdtsfmxGecqGiH2iN'
  }
]

export const Default: Story = {
  args: {
    items: defaultItems,
    columns: [
      { label: 'Nombre', key: 'name', variant: 'avatar' },
      { label: 'Estado', key: 'status', variant: 'tag' },
      { label: 'Precio', key: 'price', variant: 'price' },
      { label: 'ID', key: 'id' }
    ],
    getKey: (item) => item.id
  }
}
