import * as React from 'react'

interface UserRefPosition {
  y: number | null
  height: number | null
  x: number | null
}

export const useRefPosition = (
  ref: React.RefObject<HTMLElement>
): UserRefPosition => {
  const [style, setStyle] = React.useState({
    y: 0,
    height: 0,
    x: 0
  })

  React.useEffect(() => {
    if (!ref?.current) return

    const childrenPos = ref?.current?.getBoundingClientRect()

    if (childrenPos) {
      setStyle({
        y: childrenPos.y,
        x: childrenPos.x,
        height: childrenPos.height
      })
    }
  }, [ref?.current])

  return style
}
