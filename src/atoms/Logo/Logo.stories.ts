import type { Meta, StoryObj } from '@storybook/react'

import { Logo } from './'

const meta: Meta<typeof Logo> = {
  title: 'Atoms/Logo',
  component: Logo,
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    size: {
      options: ['default', 'small'],
      description: 'The visual style of logo',
      control: { type: 'radio' }
    }
  }
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
