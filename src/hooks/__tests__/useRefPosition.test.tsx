import { renderHook } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { useRefPosition } from '../useRefPosition'

describe('useRefPosition', () => {
  const ref = null

  it('style should have default data', () => {
    // @ts-expect-error test purposes
    const { result } = renderHook(() => useRefPosition(ref))
    expect(result.current).toEqual({ y: 0, height: 0, x: 0 })
  })

  it('style should be setted with ref data', () => {
    const ref = {
      current: {
        getBoundingClientRect: () => {
          return {
            x: 2,
            y: 2,
            height: 2
          }
        }
      }
    }
    // @ts-expect-error test purposes
    const { result } = renderHook(() => useRefPosition(ref))
    expect(result.current).toEqual({
      x: 2,
      y: 2,
      height: 2
    })
  })
})
