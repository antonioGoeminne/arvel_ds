import { render, screen } from '@testing-library/react'
import { HomeIcon, TicketPercent } from 'lucide-react'
import { beforeEach, describe, expect, it } from 'vitest'

import { Tag } from '../../atoms'
import { Sidebar } from './Sidebar'
import { Props } from './Sidebar.types'

const defaultOptions = [
  { label: 'Home', state: false, Icon: HomeIcon },
  {
    label: 'Cupones',
    state: false,
    Icon: TicketPercent,
    WithTag: Tag({ label: 'Nuevo', variant: 'active' })
  }
]

describe('Sidebar', () => {
  let defaultProps: Props

  beforeEach(() => {
    defaultProps = {
      options: defaultOptions
    }
  })
  it('should render the component', () => {
    render(<Sidebar {...defaultProps} />)
    const sidebar = screen.getByTestId('sidebar')
    expect(sidebar).toBeDefined()
  })

  it('should render the component without options', () => {
    defaultProps.options = []
    render(<Sidebar {...defaultProps} />)
    const sidebar = screen.getByTestId('sidebar')
    expect(sidebar).toBeDefined()
  })
})
