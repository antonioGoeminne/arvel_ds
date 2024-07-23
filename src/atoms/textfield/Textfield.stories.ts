import type { Meta, StoryObj } from '@storybook/react'

import { Textfield } from './Textfield'

const meta: Meta<typeof Textfield> = {
  title: 'Atoms/Textfield',
  component: Textfield,
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    variant: {
      options: ['default', 'error'],
      description: 'The visual style of Textfield',
      control: { type: 'radio' }
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'radio' }
    }
  }
}

export default meta

type Story = StoryObj<typeof meta>
export const Default: Story = {
  args: {
    variant: 'default',
    label: 'Label',
    placeholder: 'label...'
  }
}

export const WithError: Story = {
  args: {
    variant: 'default',
    label: 'Label',
    placeholder: 'label...',
    error: 'Error'
  }
}

export const Loading: Story = {
  args: {
    variant: 'default',
    label: 'Cargando',
    placeholder: 'label...',
    isLoading: true
  }
}
