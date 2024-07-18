import type { Meta, StoryObj } from '@storybook/react'

import { Avatar } from './Avatar'

const meta: Meta<typeof Avatar> = {
  title: 'Atoms/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', 'xl'],
      description: 'The size of avatar',
      control: { type: 'radio' }
    }
  }
}

export default meta

const defaultSrc =
  'https://cdn.pixabay.com/photo/2017/03/27/14/48/tea-2179175_1280.jpg'

type Story = StoryObj<typeof meta>
export const Default: Story = {
  args: {
    src: defaultSrc
  }
}
