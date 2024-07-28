import { ChevronUp } from 'lucide-react'
import styled from 'styled-components'

import { Pointer } from './WrapperFTU.types'

interface ContainerMessageProps {
  top: string | number
  left: string | number
  pointerPosition?: Pointer
}

interface IconProps {
  pointerPosition?: Pointer
}

const calcPointerPosition = (
  position?: Pointer
): {
  top?: string | number
  right?: string | number
  bottom?: string
  left?: string | number
  rotate?: string
} => {
  if (!position) return { top: '-13px', right: 0 }

  switch (position) {
    case 'top-right':
      return { top: '-13px', right: 0 }

    case 'top-left':
      return { top: '-13px', left: 0 }

    case 'bottom-left':
      return { bottom: '-13px', left: 0, rotate: 'rotate(180deg)' }

    case 'bottom-right':
      return { bottom: '-13px', right: 0, rotate: 'rotate(180deg)' }

    case 'left-top':
      return { top: 0, left: '-13px', rotate: 'rotate(-90deg)' }

    default:
      return { top: '-13px', right: 0 }
  }
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
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;
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
export const Icon = styled(ChevronUp)<IconProps>`
  position: absolute;
  top: ${(props) => calcPointerPosition(props.pointerPosition).top};
  right: ${(props) => calcPointerPosition(props.pointerPosition).right};
  left: ${(props) => calcPointerPosition(props.pointerPosition).left};
  bottom: ${(props) => calcPointerPosition(props.pointerPosition).bottom};
  transform: ${(props) => calcPointerPosition(props.pointerPosition).rotate};
  color: #fff;
  height: 30px;
  width: 30px;
`

export const Overlay = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
`
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-top: 0.5rem;
`
