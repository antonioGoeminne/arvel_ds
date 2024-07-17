import React from 'react'

import { TableCell } from '../tableCell/TableCell'
import { VariantProps as TagVariants } from '../tag/Tag.types'
import * as Styled from './Table.styled'
import { VariantProps } from './Table.types'

interface colKeys {
  key: string
  label: string
  variant?: string
  format?: (v: unknown) => string
}

interface TableProps<T> {
  items: T[]
  columns: colKeys[]
  getKey: (item: T) => string | number
}

interface DefaultProps {
  tagVariant?: TagVariants
  id: string
}

export const Table = <T extends DefaultProps>({
  items,
  columns,
  getKey
}: TableProps<T>): React.ReactElement => {
  return (
    <Styled.Table>
      <thead>
        <tr>
          {columns.map((c) => (
            <Styled.Th key={c.label}>{c.label}</Styled.Th>
          ))}
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={getKey(item)}>
            {columns.map((c) => (
              <TableCell
                key={item.id}
                tagVariant={item.tagVariant}
                label={
                  c.format ? c.format(item) : (item[c.key as keyof T] as string)
                }
                variant={(c.variant as VariantProps) || 'default'}
              >
                {c.format ? c.format(item) : (item[c.key as keyof T] as string)}
              </TableCell>
            ))}
          </tr>
        ))}
      </tbody>
    </Styled.Table>
  )
}
