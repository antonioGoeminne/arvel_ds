import * as React from 'react'

interface UserRefPosition {
  y: number
  height: number
  width: number
  x: number
  padding: number
}

export const useRefPosition = (
  ref: React.RefObject<HTMLElement>
): UserRefPosition => {
  const [style, setStyle] = React.useState({
    y: 0,
    height: 0,
    x: 0,
    width: 0,
    padding: 0
  })

  React.useEffect(() => {
    if (!ref?.current) return

    const childrenPos = ref?.current?.getBoundingClientRect()
    const paddingFull = window
      ? window.getComputedStyle(ref.current).getPropertyValue('padding')
      : '0px'

    const padding = paddingFull.substring(0, paddingFull.length - 2)

    if (childrenPos) {
      setStyle({
        y: childrenPos.y,
        x: childrenPos.x,
        height: childrenPos.height,
        width: childrenPos.width,
        padding: +padding
      })
    }
  }, [ref?.current])

  return style
}
