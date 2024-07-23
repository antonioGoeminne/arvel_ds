import { render, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it } from 'vitest'

import { Table, TableProps } from './Table'

describe('Table', () => {
  let defaultProps: TableProps<{ name: string }>

  beforeEach(() => {
    defaultProps = {
      columns: [],
      items: [],
      getKey: (item) => item?.name || ''
    }
  })
  it('should render the table', () => {
    // @ts-expect-error is for testing purposes
    render(<Table {...defaultProps} />)

    const table = screen.getByRole('table')
    expect(table).toBeDefined()
  })

  it('should not break if there no is columns or items', () => {
    // @ts-expect-error is for testing purposes
    defaultProps.columns = null

    // @ts-expect-error is for testing purposes
    defaultProps.items = null
    // @ts-expect-error is for testing purposes
    render(<Table {...defaultProps} />)

    const table = screen.getByRole('table')
    expect(table).toBeDefined()
  })

  it('should not break if there is some item null', () => {
    defaultProps.columns = [{ label: 'name', key: 'name' }]

    // @ts-expect-error is for testing purposes
    defaultProps.items = [null]
    // @ts-expect-error is for testing purposes
    render(<Table {...defaultProps} />)

    const table = screen.getByRole('table')
    expect(table).toBeDefined()
  })
})
