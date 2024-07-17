import { Tag } from '../tag/Tag'
import * as Styled from './TableCell.styled'
import { Props, VariantProps } from './TableCell.types'

const DefaultTableCell: React.FC<Props> = ({ variant, children }) => {
  return <Styled.TableCell variant={variant}>{children}</Styled.TableCell>
}

const TableTagCell: React.FC<Props> = ({ label, variant, tagVariant }) => {
  if (!label) return null

  return (
    <Styled.TableCell variant={variant}>
      <Tag
        label={label}
        variant={tagVariant}
      />
    </Styled.TableCell>
  )
}

const TableDataTypes: Record<VariantProps, React.FC<Props>> = {
  tag: TableTagCell,
  default: DefaultTableCell
}

export const TableCell: React.FC<Props> = ({
  variant = 'default',
  children,
  ...props
}) => {
  const TableData = TableDataTypes[variant]

  return (
    <TableData
      variant={variant}
      {...props}
    >
      {children}
    </TableData>
  )
}
