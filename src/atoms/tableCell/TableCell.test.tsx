import { render, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it } from 'vitest'

import { TableCell } from './TableCell'
import { Props } from './TableCell.types'

describe('TableCell', () => {
  let defaultProps: Props

  beforeEach(() => {
    defaultProps = {}
  })
  it('Should render base tableCell', () => {
    render(<TableCell {...defaultProps} />)
    const cell = screen.getByRole('cell')
    expect(cell).toBeDefined()
    expect(cell.getAttribute('variant')).toBe('default')
  })

  it('Should render tag cell', () => {
    defaultProps.variant = 'tag'
    defaultProps.label = 'tag'
    render(<TableCell {...defaultProps} />)
    const cell = screen.getByTestId('tagCell')
    expect(cell).toBeDefined()
    expect(cell.getAttribute('variant')).toBe('tag')

    const tag = screen.getByTestId('tag')
    expect(tag).toBeDefined()
  })

  it('Should render avatar cell', () => {
    defaultProps.variant = 'avatar'
    defaultProps.src = 'some-src'
    defaultProps.alt = 'some-alt'

    render(<TableCell {...defaultProps} />)
    const cell = screen.getByTestId('avatarCell')
    expect(cell).toBeDefined()
    expect(cell.getAttribute('variant')).toBe('avatar')

    const avt = screen.getByTestId('avatar')
    expect(avt).toBeDefined()
  })

  it('Should render price cell', () => {
    defaultProps.variant = 'price'

    render(<TableCell {...defaultProps} />)
    const cell = screen.getByRole('cell')
    expect(cell).toBeDefined()
    expect(cell.getAttribute('variant')).toBe('price')
  })
})
