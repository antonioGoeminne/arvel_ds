import styled from 'styled-components'

interface ContainerProps {
  state: boolean
}

export const Container = styled.button<ContainerProps>`
  width: 100%;
  border: none;
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  background-color: ${(props) => (props.state ? '#f6edf5' : 'transparent')};
  color: ${(props) => (props.state ? '#90467f' : 'black')};
  &:hover {
    background-color: #f6edf5;
  }
  &:active {
    color: #90467f;
    background-color: #f6edf5;
  }
  &:focus {
    color: #90467f;
    background-color: #f6edf5;
  }
  padding: 0.3rem 0.6rem;
  border-radius: 0.5rem;
  transition: all ease-in-out 0.15s;
`

export const Label = styled.span`
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  font-size: 0.8rem;
  height: 14px;
`
