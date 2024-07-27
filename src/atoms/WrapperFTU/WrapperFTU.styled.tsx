import { ChevronUp } from 'lucide-react'
import styled from 'styled-components'

interface ContainerMessageProps {
  y: number | null
  x: number | null
}

export const Container = styled.div`
  display: inline-block;
  position: relative;
`

export const ChildrenContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin: 20px;
`

export const ContainerMessage = styled.div<ContainerMessageProps>`
  position: fixed;
  top: ${(props) => props.y}px;
  right: ${(props) => props.x}px;
  background: #fff;
  max-width: 143px;
  border-radius: 2px;
  padding: 0.8rem;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.1);
`

export const Title = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 10px;
  font-weight: bold;
  line-height: 1.2;
`

export const Description = styled.div`
  margin-top: 0.3rem;
  font-family: 'Roboto', sans-serif;
  font-size: 8.5px;
  color: rgba(0, 0, 0, 0.7);
  line-height: 1.5;
`
export const Icon = styled(ChevronUp)`
  position: absolute;
  top: -13px;
  color: #fff;
  height: 30px;
  width: 30px;
  right: 0;
`

export const Overlay = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
`
