import expect from 'expect'
import byId from '../../src/js/reducers/byId'

describe('byId reducer', () => {
  it('should handle the initial state', () => {
    expect(
      byId(undefined, {})
    ).toEqual({})
  })
})
