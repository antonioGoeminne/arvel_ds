import styled from 'styled-components'

import { VariantProps } from './Table.types'

interface TableCellProps {
  variant?: VariantProps
}

export const Table = styled.table<TableCellProps>`
  padding: 0.25rem 0;
  font-family: 'Roboto', sans-serif;
`
export const Th = styled.th`
  padding: 0.45rem;
  text-align: left;
  background-color: #f5f7fa;
  font-size: 0.8rem;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1);
`
