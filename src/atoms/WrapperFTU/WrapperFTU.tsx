import * as React from 'react'

import { useRefPosition } from '../../hooks/useRefPosition'
import { Button } from '../button/Button'
import { calcPosition } from './utils/calcPosition'
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

  const { top, left } = calcPosition({
    pointerPosition,
    elStyle: style,
    elStyleMessage: styleRef
  })

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
        top={top}
        left={left}
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
