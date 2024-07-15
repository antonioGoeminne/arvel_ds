import type { Meta, StoryObj } from '@storybook/react'

import { Tag } from './Tag'

const meta: Meta<typeof Tag> = {
  title: 'Atoms/Tag',
  component: Tag,
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    variant: {
      options: ['default', 'active', 'inactive', 'warning'],
      description: 'The visual style of Tag',
      control: { type: 'radio' }
    }
  }
}

export default meta

type Story = StoryObj<typeof meta>
export const Default: Story = {
  args: {
    variant: 'default',
    label: 'Default'
  }
}

export const Active: Story = {
  args: {
    variant: 'active',
    label: 'Active'
  }
}

export const Inactive: Story = {
  args: {
    variant: 'inactive',
    label: 'Inactive'
  }
}

export const Warning: Story = {
  args: {
    variant: 'warning',
    label: 'Warning'
  }
}
