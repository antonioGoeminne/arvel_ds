import { describe, expect, it } from 'vitest'

import { numberWithCommas } from '../numberWithCommas'

describe('numberWithCommas', () => {
  it('should return number with a comma', () => {
    expect(numberWithCommas(200)).toEqual('200,00')
  })

  it('should add a dot and commas', () => {
    expect(numberWithCommas(20000)).toEqual('20.000,00')
  })

  it('should return 0', () => {
    // @ts-expect-error test purposes
    expect(numberWithCommas(null)).toEqual('0,00')

    // @ts-expect-error test purposes
    expect(numberWithCommas()).toEqual('0,00')

    // @ts-expect-error test purposes
    expect(numberWithCommas('abc')).toEqual('0,00')
  })
})
