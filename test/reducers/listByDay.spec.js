import expect from 'expect'
import listByDay from '../../src/js/reducers/listByDay'
import deepFreeze from 'deep-freeze'
import * as types from '../../src/js/constants/ActionTypes'

describe('listByDay reducer', () => {

  it('should handle the initial state', () => {

    expect(
      listByDay(undefined, {})
    ).toEqual({})

  })

  it('should handle ADD_ENTRY_SUCCESS action', () => {

    const response = {
      result: "this-is-an-id-with-numb3r",
      entities: {
        entries: {
          "this-is-an-id-with-numb3r": {
            id: 'this-is-an-id-with-numb3r',
            pillar: 'ZAZEN',
            duration: '00:45',
            start: 1465264800000,
            quality: 'YAY',
            notes: 'full lotus',
          }
        }
      }
    }

    const action = {
      type: types.ADD_ENTRY_SUCCESS,
      day: '2016-06-06',
      response
    }

    const startState = {}


    const endState = {
      '2016-06-06': {
        ids: ['this-is-an-id-with-numb3r'],
        isFetching: false,
        errorMessage: null
      }
    }


    deepFreeze(startState)

    expect(
      listByDay(startState, action)
    ).toEqual(endState)

  })

  it('should handle FETCH_ENTRIES_SUCCESS action', () => {

    const response = {
      result: ["this-is-an-id-with-numb3r"],
      entities: {
        entries: {
          "this-is-an-id-with-numb3r": {
            id: 'this-is-an-id-with-numb3r',
            pillar: 'ZAZEN',
            duration: '00:45',
            start: 1465264800000,
            quality: 'YAY',
            notes: 'full lotus',
          }
        }
      }
    }

    const action = {
      type: types.FETCH_ENTRIES_SUCCESS,
      day: '2016-06-06',
      response
    }

    const startState = {}


    const endState = {
      '2016-06-06': {
        ids: ['this-is-an-id-with-numb3r'],
        isFetching: false,
        errorMessage: null
      }
    }


    deepFreeze(startState)

    expect(
      listByDay(startState, action)
    ).toEqual(endState)

  })
})
