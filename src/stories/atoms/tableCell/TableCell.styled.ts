import styled from 'styled-components'

import { VariantProps } from './TableCell.types'

interface TableCellProps {
  variant?: VariantProps
}

export const TableCell = styled.td<TableCellProps>`
  padding: 0.25rem 0.45rem;
  border: 2px solid rgba(0, 0, 0, 0.1);
`
