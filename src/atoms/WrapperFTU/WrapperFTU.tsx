import * as React from 'react'

import { useRefPosition } from '../../hooks/useRefPosition'
import { Button } from '../button/Button'
import * as Styled from './WrapperFTU.styled'
import { Props } from './WrapperFTU.types'

export const WrapperFTU: React.FC<Props> = ({
  open,
  title,
  description,
  actionLabel,
  onActionClick,
  hasOverlay = true,
  pointerPosition = 'top-right',
  children
}) => {
  const ref = React.useRef<HTMLDivElement>(null)
  const messageRef = React.useRef<HTMLDivElement>(null)
  const style = useRefPosition(ref)
  const styleRef = useRefPosition(messageRef)

  const calcPosition = (): { top: string | number; left: string | number } => {
    if (!pointerPosition) {
      return {
        left: style.x,
        top: (style.y || 0) + (style.height || 0) + 10
      }
    }

    switch (pointerPosition) {
      case 'top-left':
        return {
          left: style.x,
          top: (style.y || 0) + (style.height || 0) + 10
        }
      case 'bottom-left':
        return {
          left: style.x,
          top: (style.y || 0) - (styleRef.height || 0) - 10
        }
      case 'bottom-right':
        return {
          left: style.x - style.width - (10 + styleRef.padding),
          top: (style.y || 0) - (styleRef.height || 0) - 10
        }
      case 'left-top':
        return {
          left: style.x + style.width + 10,
          top: style.y
        }
      default:
        return {
          left: style.x - styleRef.width + (10 + styleRef.padding),
          top: (style.y || 0) + (style.height || 0) + 10
        }
    }
  }

  React.useEffect(() => {
    window.document.body.style.overflow = 'hidden'
  }, [])

  if (!open) return <>{children}</>

  return (
    <Styled.Container data-testid="wrapperFTU">
      {hasOverlay && <Styled.Overlay data-testid="overlay" />}
      <Styled.ChildrenContainer ref={ref}>{children}</Styled.ChildrenContainer>
      <Styled.ContainerMessage
        ref={messageRef}
        top={calcPosition().top}
        left={calcPosition().left}
      >
        <Styled.Icon pointerPosition={pointerPosition} />
        <Styled.Title>{title}</Styled.Title>
        <Styled.Description>{description}</Styled.Description>
        <Styled.ButtonContainer>
          <Button
            onClick={onActionClick}
            variant="outlined"
            label={actionLabel}
          />
        </Styled.ButtonContainer>
      </Styled.ContainerMessage>
    </Styled.Container>
  )
}
