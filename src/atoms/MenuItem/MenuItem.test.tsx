import { render, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it } from 'vitest'

import { MenuItem } from './MenuItem'
import { Props } from './MenuItem.types'

describe('MenuItem', () => {
  let defaultProps: Props
  beforeEach(() => {
    defaultProps = {
      label: 'menu',
      state: false
    }
  })

  it('should render menuItem', () => {
    render(<MenuItem {...defaultProps} />)
    const menu = screen.getByRole('button')
    expect(menu).toBeDefined()
  })
})
