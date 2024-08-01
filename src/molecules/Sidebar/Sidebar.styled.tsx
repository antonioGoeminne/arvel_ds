import styled from 'styled-components'

interface ContainerProps {
  open?: boolean
}

export const Container = styled.div<ContainerProps>`
  position: fixed;
  top: 0;
  left: ${(props) => (props.open ? '0' : '-300px')};
  height: 100vh;
  width: 270px;
  user-select: none;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  transition: all ease-in-out 0.35s;
`
export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`

export const Separator = styled.div`
  height: 90%;
  padding-left: 0.5rem;
  padding-right: 0.2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
