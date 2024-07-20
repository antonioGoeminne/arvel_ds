import * as Styled from './Textfield.styled'
import { Props } from './Textfield.types'

export const Textfield: React.FC<Props> = ({
  label,
  placeholder,
  error,
  isLoading,
  size = 'sm'
}) => {
  return (
    <Styled.Box>
      <Styled.Label>{label}</Styled.Label>
      <div style={{ position: 'relative' }}>
        <Styled.Input
          size={size}
          placeholder={placeholder}
        ></Styled.Input>
        {isLoading && <Styled.Spinner size={size} />}
      </div>
      {!!error?.length && <Styled.Error size={size}>{error}</Styled.Error>}
    </Styled.Box>
  )
}
