import styled from 'styled-components'

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 270px;
  user-select: none;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
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
