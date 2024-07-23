import styled, { keyframes } from 'styled-components'

import { Sizes } from '../avatar/Avatar.types'

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

interface InputProps {
  size: Sizes
}

const calcSize = (
  size?: Sizes
): { height: string; width: string; fontSize: string; spinner: string } => {
  if (!size)
    return {
      height: '24px',
      width: '24px',
      fontSize: '0.8rem',
      spinner: '12px'
    }

  switch (size) {
    case 'sm':
      return {
        height: '24px',
        width: '24px',
        fontSize: '0.8rem',
        spinner: '14px'
      }
    case 'md':
      return {
        height: '32px',
        width: '32px',
        fontSize: '1rem',
        spinner: '20px'
      }
    case 'lg':
      return {
        height: '40px',
        width: '40px',
        fontSize: '1.1rem',
        spinner: '24px'
      }
    default:
      return {
        height: '24px',
        width: '24px',
        fontSize: '0.8rem',
        spinner: '12px'
      }
  }
}

export const Input = styled.input<InputProps>`
  padding: 0.2rem 0.3rem;
  border-radius: 4px;
  height: ${(props) => calcSize(props.size).height};
  font-size: ${(props) => calcSize(props.size).fontSize};
  box-shadow: 0 0 0 0.8px rgba(0, 0, 0, 0.6);
  border: none;
  outline: none;
`

export const Box = styled.div`
  display: flex;
  position: relative;
  gap: 3px;
  flex-direction: column;
`
export const Label = styled.span`
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  font-size: 0.8rem;
`
export const Error = styled.span<InputProps>`
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  color: red;
  padding-left: 2px;
  font-size: ${(props) => calcSize(props.size).fontSize};
`
export const Spinner = styled.span<InputProps>`
  position: absolute;
  right: 2px;
  top: 2px;
  display: inline-block;
  width: ${(props) => calcSize(props.size).spinner};
  height: ${(props) => calcSize(props.size).spinner};
  border: 2px solid #f3f3f3; /* Ajusta el color según tus necesidades */
  border-top: 2px solid #3498db; /* Ajusta el color según tus necesidades */
  border-radius: 50%;
  animation: ${spin} 0.8s linear infinite;
`
