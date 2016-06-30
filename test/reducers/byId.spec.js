import expect from 'expect'
import byId from '../../src/js/reducers/byId'
import deepFreeze from 'deep-freeze'
import * as types from '../../src/js/constants/ActionTypes'

describe('byId reducer', () => {
  it('should handle the initial state', () => {
    expect(
      byId(undefined, {})
    ).toEqual({})
  })

  it('should handle ADD_ENTRY_SUCCESS', () => {

    const response = {
      result: "this-is-an-id-with-numb3r",
      entities: {
        entries: {
          "this-is-an-id-with-numb3r": {
            id: 'this-is-an-id-with-numb3r',
            pillar: 'ZAZEN',
            duration: '00:45',
            event_date: "2016-06-06 22:00:00",
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
      "this-is-an-id-with-numb3r": {
        id: 'this-is-an-id-with-numb3r',
        pillar: 'ZAZEN',
        duration: '00:45',
        start: 1465264800000,
        quality: 'YAY',
        notes: 'full lotus',
      }
    }

    deepFreeze(startState)

    expect(
      byId(startState, action)
    ).toEqual(endState)

  })

  it('should handle FETCH_ENTRIES_SUCCESS', () => {

    const response = {
      result: "this-is-an-id-with-numb3r",
      entities: {
        entries: {
          "this-is-an-id-with-numb3r": {
            id: 'this-is-an-id-with-numb3r',
            pillar: 'ZAZEN',
            duration: '00:45',
            event_date: "2016-06-06 22:00:00",
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
      "this-is-an-id-with-numb3r": {
        id: 'this-is-an-id-with-numb3r',
        pillar: 'ZAZEN',
        duration: '00:45',
        start: 1465264800000,
        quality: 'YAY',
        notes: 'full lotus',
      }
    }

    deepFreeze(startState)

    expect(
      byId(startState, action)
    ).toEqual(endState)

  })

  it('should handle REMOVE_ENTRY_SUCCESS', () => {

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
      type: types.REMOVE_ENTRY_SUCCESS,
      day: '2016-06-06',
      response
    }

    const startState = {
      "this-is-an-id-with-numb3r": {
        id: 'this-is-an-id-with-numb3r',
        pillar: 'ZAZEN',
        duration: '00:45',
        start: 1465264800000,
        quality: 'YAY',
        notes: 'full lotus',
      }
    }

    const endState = {}

    deepFreeze(startState)

    expect(
      byId(startState, action)
    ).toEqual(endState)

  })

})
