import { describe, expect, it } from 'vitest'

import { calcPosition } from './calcPosition'

const defaultValues = {
  pointerPosition: 'top-right',
  elStyle: {
    x: 1,
    y: 1,
    height: 1,
    padding: 1,
    width: 1
  },
  elStyleMessage: {
    x: 1,
    y: 1,
    height: 1,
    width: 1,
    padding: 1
  }
}

describe('calcPosition', () => {
  it('should return default values', () => {
    // @ts-expect-error test purposes
    expect(calcPosition({ ...defaultValues })).toEqual({
      left: 11,
      top: 12
    })
  })

  it('should return left: and top: ', () => {
    defaultValues.elStyle.x = 2
    defaultValues.elStyle.y = 2

    defaultValues.elStyleMessage.y = 2
    defaultValues.elStyleMessage.y = 2
    // @ts-expect-error test purposes
    expect(calcPosition({ ...defaultValues })).toEqual({
      left: 12,
      top: 13
    })
  })
})
