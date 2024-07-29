import { UserRefPosition } from '../../../hooks/useRefPosition'
import { Pointer } from '../WrapperFTU.types'

interface CalcPositionProps {
  pointerPosition: Pointer
  elStyle: UserRefPosition
  elStyleMessage: UserRefPosition
}

interface CalcPosition {
  top: string | number
  left: string | number
}

export const calcPosition = ({
  pointerPosition,
  elStyle,
  elStyleMessage
}: CalcPositionProps): CalcPosition => {
  if (!pointerPosition) {
    return {
      left: elStyle.x,
      top: (elStyle.y || 0) + (elStyle.height || 0) + 10
    }
  }

  switch (pointerPosition) {
    case 'top-left':
      return {
        left: elStyle.x,
        top: (elStyle.y || 0) + (elStyle.height || 0) + 10
      }
    case 'bottom-left':
      return {
        left: elStyle.x,
        top: (elStyle.y || 0) - (elStyleMessage.height || 0) - 10
      }
    case 'bottom-right':
      return {
        left: elStyle.x - elStyle.width - (10 + elStyleMessage.padding),
        top: (elStyle.y || 0) - (elStyleMessage.height || 0) - 10
      }
    case 'left-top':
      return {
        left: elStyle.x + elStyle.width + 10,
        top: elStyle.y
      }
    default:
      return {
        left: elStyle.x - elStyleMessage.width + (10 + elStyleMessage.padding),
        top: (elStyle.y || 0) + (elStyle.height || 0) + 10
      }
  }
}
