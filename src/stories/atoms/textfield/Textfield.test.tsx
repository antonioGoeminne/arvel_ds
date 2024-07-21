import { render, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it } from 'vitest'

import { Textfield } from './Textfield'
import { Props } from './Textfield.types'

describe('Textfield', () => {
  let defaultProps: Props

  beforeEach(() => {
    // @ts-expect-error is for testing purposes
    defaultProps = {
      label: 'Hello world'
    }
  })
  it('Should render label', () => {
    render(<Textfield {...defaultProps} />)
    const label = screen.getByTestId('inputLabel')
    expect(label).toBeDefined()
  })

  it('Should render an error', () => {
    defaultProps.error = 'Some Error'
    render(<Textfield {...defaultProps} />)
    const err = screen.getByTestId('error')
    expect(err).toBeDefined()
  })

  it('Should render a circular progress when is loading', () => {
    defaultProps.isLoading = true
    render(<Textfield {...defaultProps} />)
    const spinner = screen.getByTestId('spinner')
    expect(spinner).toBeDefined()
  })
})
