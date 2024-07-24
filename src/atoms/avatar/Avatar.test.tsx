import { render, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it } from 'vitest'

import { Avatar } from './Avatar'
import { Props } from './Avatar.types'

describe('Avatar test', () => {
  let defaultProps: Props

  beforeEach(() => {
    defaultProps = {
      src: 'some-src',
      alt: 'some-alt'
    }
  })
  it('Should render avatar', () => {
    render(<Avatar {...defaultProps} />)
    const element = screen.getByAltText('some-alt')
    expect(element).toBeDefined()
    expect(element.getAttribute('src')).toBe('some-src')
  })
})
