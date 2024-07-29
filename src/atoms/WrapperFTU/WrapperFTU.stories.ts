import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '../button/Button'
import { WrapperFTU } from './'

const meta: Meta<typeof WrapperFTU> = {
  title: 'Atoms/WrapperFTU',
  component: WrapperFTU,
  parameters: {
    layout: 'centered'
  },
  argTypes: {},
  args: {}
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: Button({ label: 'Default' }),
    open: true,
    title: 'Anotá lo que te falta y encontralo más rapido',
    description:
      'Escribí los productos que necesitás y buscalos cuando quieras.',
    actionLabel: 'Entendido'
  }
}
