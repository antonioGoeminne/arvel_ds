import styled from 'styled-components'

import { VariantProps } from './TableCell.types'

interface TableCellProps {
  variant?: VariantProps
}

export const TableCell = styled.td<TableCellProps>`
  font-family: 'Roboto', sans-serif;
  padding: 0.35rem 0.45rem;
  font-size: 0.8rem;
  box-shadow: 0 0 0 0.8px rgba(0, 0, 0, 0.1);
`
