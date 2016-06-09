import expect from 'expect'
import listByDay from '../../src/js/reducers/listByDay'
import deepFreeze from 'deep-freeze'
import * as types from '../../src/js/constants/ActionTypes'

const startState = {
    "2016-06-06": {
      ids: [123],
      isFetching: false,
      errorMessage: false
    },
    "2016-06-08": {
      ids: [456],
      isFetching: false,
      errorMessage: false
    }
}

const endState = {
    "2016-06-06": {
      ids: [123],
      isFetching: false,
      errorMessage: false
    },
    "2016-06-08": {
      ids: [456],
      isFetching: false,
      errorMessage: false
    },
    "2016-07-08": {
      ids: [789],
      isFetching: false,
      errorMessage: false
    }
}

const submission = {
  id: 789,
  start: '2016-07-08'
}

describe('listByDay reducer', () => {
  it('should handle the initial state', () => {
    expect(
      listByDay(undefined, {})
    ).toEqual({})
  })

  it('should handle ADD_ENTRY_SUCCESS action', () => {
    expect(
      listByDay(startState, {
        type: types.ADD_ENTRY_SUCCESS,
        submission
      })
    ).toEqual(endState)
  })
})
