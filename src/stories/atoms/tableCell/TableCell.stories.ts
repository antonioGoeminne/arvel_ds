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
      options: ['default', 'tag'],
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
