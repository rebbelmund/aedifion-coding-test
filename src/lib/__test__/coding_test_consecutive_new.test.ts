import { describe, it, expect } from 'vitest'
import { removeConsecutiveDuplicates } from '../coding_test_consecutive_new'

describe('removeConsecutiveDuplicates', () => {
  it('should keep values of none consecutive duplicates', () => {
    const result = removeConsecutiveDuplicates({ a: [1, 2, 3] })
    expect(result.a[0]).toBe(1)
    expect(result.a[1]).toBe(2)
    expect(result.a[2]).toBe(3)
  })

  it('should remove consecutive duplicates', () => {
    const result = removeConsecutiveDuplicates({ a: [1, 1, 1] })
    expect(result.a.length).toBe(1)
  })

  it('should not remove non consecutive duplicates', () => {
    const result = removeConsecutiveDuplicates({ a: [1, 2, 1] })
    expect(result.a.length).toBe(3)
  })

  it('should handle values from multiple keys', () => {
    const result = removeConsecutiveDuplicates({ a: [1, 1], b: [1, 1] })
    expect(result.b.length).toBe(1)
  })

  it('should hanlde type any', () => {
    const result = removeConsecutiveDuplicates({
      a: [
        1,
        1,
        true,
        true,
        'active',
        'active',
        [1],
        [1],
        { a: 'a' },
        { a: 'a' },
        null,
        null,
        undefined,
        undefined
      ]
    })
    expect(result.a.length).toBe(7)
  })

  it('should compare without type coercion', () => {
    const result = removeConsecutiveDuplicates({ a: [1, true] })
    expect(result.a.length).toBe(2)
  })

  it('should handle nestes objects', () => {
    const result = removeConsecutiveDuplicates({
      a: [{ a: { a: 0 } }, { a: { a: 0 } }, { a: { a: 1 } }]
    })
    expect(result.a.length).toBe(2)
  })

  it('should ignore order of object keys', () => {
    const result = removeConsecutiveDuplicates({
      a: [
        { a: 0, b: 1 },
        { b: 1, a: 0 }
      ]
    })
    expect(result.a.length).toBe(1)
  })

  it('should not remove nested consecutive duplicates', () => {
    const result = removeConsecutiveDuplicates({
      a: [[1, 1]]
    })
    expect(result.a[0].length).toBe(2)
  })
})
