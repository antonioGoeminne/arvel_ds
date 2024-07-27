import * as React from 'react'

import { useRefPosition } from '../../hooks/useRefPosition'
import * as Styled from './WrapperFTU.styled'
import { Props } from './WrapperFTU.types'

export const WrapperFTU: React.FC<Props> = ({
  open,
  title,
  description,
  children
}) => {
  const ref = React.useRef<HTMLDivElement>(null)
  const style = useRefPosition(ref)

  if (!open) return <>{children}</>

  return (
    <Styled.Container data-testid="wrapperFTU">
      <Styled.Overlay data-testid="overlay" />
      <Styled.ChildrenContainer ref={ref}>{children}</Styled.ChildrenContainer>
      <Styled.ContainerMessage
        y={(style.y || 0) + (style.height || 0) + 10}
        x={style.x}
      >
        <Styled.Icon />
        <Styled.Title>{title}</Styled.Title>
        <Styled.Description>{description}</Styled.Description>
      </Styled.ContainerMessage>
    </Styled.Container>
  )
}
