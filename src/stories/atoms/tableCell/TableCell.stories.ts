import type { Meta, StoryObj } from '@storybook/react'

import { TableCell } from './TableCell'

const meta: Meta<typeof TableCell> = {
  title: 'Atoms/Table/TableCell',
  component: TableCell,
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    variant: {
      options: ['default', 'tag', 'avatar'],
      description: 'The visual style of cell',
      control: { type: 'radio' }
    }
  }
}

export default meta

type Story = StoryObj<typeof meta>
export const Default: Story = {
  args: {
    variant: 'default',
    children: 'Taza de madera'
  }
}

export const Tag: Story = {
  args: {
    variant: 'tag',
    label: 'Active'
  }
}

export const Avatar: Story = {
  args: {
    variant: 'avatar',
    label: 'Taza de madera',
    src: 'https://cdn.pixabay.com/photo/2017/03/27/14/48/tea-2179175_1280.jpg',
    size: 'md',
    alt: 'Taza de madera'
  }
}

export const Price: Story = {
  args: {
    variant: 'price',
    label: '15000'
  }
}
