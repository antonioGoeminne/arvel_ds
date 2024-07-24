import { render, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it } from 'vitest'

import { Logo } from './Logo'
import { Props } from './Logo.types'

describe('Logo', () => {
  let defaultProps: Props

  beforeEach(() => {
    defaultProps = {
      size: 'default'
    }
  })

  it('should render the Logo', () => {
    render(<Logo {...defaultProps} />)
    const logo = screen.getByAltText('arvel')
    expect(logo).toBeDefined()
  })
})
