import styled from 'styled-components'

import { VariantProps } from './Button.types'

interface LabelProps {
  textColor: React.CSSProperties['color']
}

interface ButtonProps {
  variant: VariantProps
}

const getButtonBg = (variant: VariantProps): string => {
  switch (variant) {
    case 'primary':
      return '#08c7d1'

    case 'secondary':
      return '#bf95b9'

    case 'outlined':
      return 'transparent'

    default:
      return '#1a303d'
  }
}

const getButtonColor = (variant: VariantProps): string => {
  switch (variant) {
    case 'primary':
      return '#fff'

    case 'secondary':
      return '#fff'

    case 'outlined':
      return '#00000'

    default:
      return '#1a303d'
  }
}

export const Label = styled.span<LabelProps>`
  color: ${(props) => (props.textColor !== null ? props.textColor : 'white')};
`

export const Button = styled.button<ButtonProps>`
  display: inline-block;
  font-weight: 500;
  cursor: pointer;
  text-align: center;
  background-color: ${(props) => getButtonBg(props.variant)};
  vertical-align: middle;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  padding: 0.4rem 0.8rem;
  color: ${(props) => getButtonColor(props.variant)};
  text-decoration: ${(props) =>
    props.variant === 'outlined' ? 'underline' : 'none'};
`
