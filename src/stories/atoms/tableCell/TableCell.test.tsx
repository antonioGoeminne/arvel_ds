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

  it('Should render base tableCell', () => {
    render(<TableCell {...defaultProps} />)
    const cell = screen.getByRole('cell')
    expect(cell).toBeDefined()
    expect(cell.getAttribute('variant')).toBe('default')
  })
})
