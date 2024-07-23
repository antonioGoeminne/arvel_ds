import { numberWithCommas } from '../../utils/numberWithCommas'
import { Avatar } from '../avatar/Avatar'
import { Tag } from '../tag/Tag'
import * as Styled from './TableCell.styled'
import { Props, VariantProps } from './TableCell.types'

const DefaultTableCell: React.FC<Props> = ({ variant, children }) => {
  return <Styled.TableCell variant={variant}>{children}</Styled.TableCell>
}

const TableTagCell: React.FC<Props> = ({ label, variant, tagVariant }) => {
  if (!label) return null
  return (
    <Styled.TableCell
      data-testid="tagCell"
      variant={variant}
    >
      <Tag
        data-testid="tag"
        label={label}
        variant={tagVariant}
      />
    </Styled.TableCell>
  )
}

const TableAvatarCell: React.FC<Props> = ({
  label,
  variant,
  src,
  alt,
  size = 'sm'
}) => {
  if (!src || !alt) return null

  return (
    <Styled.TableCell
      data-testid="avatarCell"
      variant={variant}
    >
      <Styled.Flex data-testid="avatar">
        <Avatar
          size={size}
          src={src}
          alt={alt}
        />
        <Styled.Label>{label}</Styled.Label>
      </Styled.Flex>
    </Styled.TableCell>
  )
}

const TablePriceCell: React.FC<Props> = ({ label, variant }) => {
  return (
    <Styled.TableCell variant={variant}>
      <Styled.Label sx={{ color: '#188037', fontWeight: 'bold' }}>
        ${numberWithCommas(Number(label))}
      </Styled.Label>
    </Styled.TableCell>
  )
}

const TableDataTypes: Record<VariantProps, React.FC<Props>> = {
  default: DefaultTableCell,
  tag: TableTagCell,
  avatar: TableAvatarCell,
  price: TablePriceCell
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
