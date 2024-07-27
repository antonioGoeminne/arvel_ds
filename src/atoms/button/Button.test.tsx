import { fireEvent, render, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it, vi } from 'vitest'

import { Button } from './Button'
import type { Props } from './Button.types'
describe('Button', () => {
  let defaultProps: Props

  beforeEach(() => {
    defaultProps = {
      label: 'Hello world',
      onClick: vi.fn()
    }
  })
  it('Should render base Button', () => {
    render(<Button {...defaultProps} />)
    const btn = screen.getByRole('button', { name: 'Hello world' })
    expect(btn).toBeDefined()
    expect(btn.getAttribute('variant')).toBe('primary')
  })
  it('Should render the base button with secondary variant', () => {
    defaultProps.variant = 'secondary'
    render(<Button {...defaultProps} />)

    const btn = screen.getByRole('button', { name: 'Hello world' })
    expect(btn).toBeDefined()
    expect(btn.getAttribute('variant')).toBe('secondary')
  })
  it('Should render the base button with outlined variant', () => {
    defaultProps.variant = 'outlined'
    render(<Button {...defaultProps} />)

    const btn = screen.getByRole('button', { name: 'Hello world' })
    expect(btn).toBeDefined()
    expect(btn.getAttribute('variant')).toBe('outlined')
  })
  it('should call the onClick callback', () => {
    render(<Button {...defaultProps} />)
    const btn = screen.getByRole('button', { name: 'Hello world' })
    fireEvent.click(btn)
    expect(defaultProps.onClick).toHaveBeenCalledOnce()
  })
})
