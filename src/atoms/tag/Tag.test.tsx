import { render, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it } from 'vitest'

import { Tag } from './Tag'
import { Props } from './Tag.types'

describe('Tag', () => {
  let defaultProps: Props

  beforeEach(() => {
    defaultProps = {
      label: 'Hello world'
    }
  })
  it('Should render Tag', () => {
    render(<Tag {...defaultProps} />)
    const tag = screen.getByTestId('tag')

    expect(tag).toBeDefined()
    expect(tag.getAttribute('variant')).toBe('default')
  })

  it('Should render the Tag with inactive variant', () => {
    defaultProps.variant = 'inactive'
    render(<Tag {...defaultProps} />)

    const tag = screen.getByTestId('tag')
    expect(tag).toBeDefined()
    expect(tag.getAttribute('variant')).toBe('inactive')
  })
})
