import { describe, expect, it } from 'vitest'

import { convertSx } from '../convertSx'

describe('convert sx', () => {
  it('should convert an object an string', () => {
    expect(convertSx({ color: 'abc' })).toEqual('color: "abc";')
  })

  it('should return empty string', () => {
    // @ts-expect-error test purposes
    expect(convertSx({ color: null })).toEqual('color: "";')

    expect(convertSx({})).toEqual('')

    // @ts-expect-error test purposes
    expect(convertSx()).toEqual('')

    // @ts-expect-error test purposes
    expect(convertSx(null)).toEqual('')
  })
})
