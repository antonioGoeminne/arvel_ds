import { Settings } from 'lucide-react'
import * as React from 'react'

import { Logo } from '../../atoms'
import { MenuItem } from '../../atoms/MenuItem'
import * as Styled from './Sidebar.styled'
import { Props } from './Sidebar.types'

export const Sidebar: React.FC<Props> = ({ open = true, options }) => {
  return (
    <Styled.Container
      open={open}
      data-testid="sidebar"
    >
      <Logo />
      <Styled.Separator>
        <Styled.ListContainer>
          {(options || [])?.map((opt) => (
            <MenuItem
              key={opt.label}
              {...opt}
            />
          ))}
        </Styled.ListContainer>
        <MenuItem
          Icon={Settings}
          state={false}
          label="Configuración"
        />
      </Styled.Separator>
    </Styled.Container>
  )
}
