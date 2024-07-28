import { render, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it, vi } from 'vitest'

import { Button } from '../button/Button'
import { WrapperFTU } from './WrapperFTU'
import { Props } from './WrapperFTU.types'

describe('FTU component', () => {
  let defaultProps: Props
  beforeEach(() => {
    defaultProps = {
      children: Button({ label: 'Default' }),
      open: true,
      title: 'Anotá lo que te falta y encontralo más rapido',
      description:
        'Escribí los productos que necesitás y buscalos cuando quieras.',
      actionLabel: 'Entendido',
      onActionClick: vi.fn()
    }
  })
  it('should render component', () => {
    render(<WrapperFTU {...defaultProps} />)

    const wrapperFTU = screen.getByTestId('wrapperFTU')
    const overlay = screen.getByTestId('overlay')

    expect(wrapperFTU).toBeDefined()
    expect(overlay).toBeDefined()
  })

  it('should render children', () => {
    render(<WrapperFTU {...defaultProps} />)

    const wrapperFTU = screen.getByTestId('wrapperFTU')
    expect(wrapperFTU).toBeDefined()

    const btn = screen.getAllByRole('button')
    expect(btn[1]).toBeDefined()
  })
})
