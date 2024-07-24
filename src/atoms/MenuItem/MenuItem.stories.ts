import type { Meta, StoryObj } from '@storybook/react'
import { Home } from 'lucide-react'

import { MenuItem } from './'

const meta: Meta<typeof MenuItem> = {
  title: 'Atoms/MenuItem',
  component: MenuItem,
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    state: {
      options: [true, false],
      control: 'radio'
    }
  }
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Home',
    Icon: Home
  }
}
