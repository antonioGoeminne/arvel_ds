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
      <Styled.Label data-testid="inputLabel">{label}</Styled.Label>
      <div style={{ position: 'relative' }}>
        <Styled.Input
          size={size}
          placeholder={placeholder}
        ></Styled.Input>
        {isLoading && (
          <Styled.Spinner
            data-testid="spinner"
            size={size}
          />
        )}
      </div>
      {!!error?.length && (
        <Styled.Error
          data-testid="error"
          size={size}
        >
          {error}
        </Styled.Error>
      )}
    </Styled.Box>
  )
}
