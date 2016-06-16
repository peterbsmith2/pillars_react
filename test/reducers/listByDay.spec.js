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

  describe('ADD_ENTRY_* actions', () => {

    it('should handle ADD_ENTRY_REQUEST action', () => {

      const action = {
        type: types.ADD_ENTRY_REQUEST,
        day: '2016-06-06',
      }

      const startState = {
        '2016-06-06': {
          ids: ['this-is-an-id-with-numb3r'],
          isFetching: false,
          errorMessage: null
        }
      }

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

      const startState = {
        '2016-06-06': {
          ids: [],
          isFetching: false,
          errorMessage: null
        }
      }


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

    it('should handle ADD_ENTRY_FAILURE action', () => {

      const error = {
        message: 'error'
      }

      const action = {
        type: types.ADD_ENTRY_FAILURE,
        day: '2016-06-06',
        message: error.message
      }

      const startState = {
        '2016-06-06': {
          ids: ['this-is-an-id-with-numb3r'],
          isFetching: false,
          errorMessage: null
        }
      }

      const endState = {
        '2016-06-06': {
          ids: ['this-is-an-id-with-numb3r'],
          isFetching: false,
          errorMessage: 'error'
        }
      }


      deepFreeze(startState)

      expect(
        listByDay(startState, action)
      ).toEqual(endState)

    })

  })

  describe('FETCH_ENTRIES_* actions', () => {


    it('should handle FETCH_ENTRIES_REQUEST action', () => {

      const action = {
        type: types.FETCH_ENTRIES_REQUEST,
        day: '2016-06-06',
      }

      const startState = {
        '2016-06-06': {
          ids: ['this-is-an-id-with-numb3r'],
          isFetching: false,
          errorMessage: null
        }
      }

      const endState = {
        '2016-06-06': {
          ids: ['this-is-an-id-with-numb3r'],
          isFetching: true,
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

    it('should handle FETCH_ENTRIES_FAILURE action', () => {

      const error = {
        message: 'error'
      }

      const action = {
        type: types.FETCH_ENTRIES_FAILURE,
        day: '2016-06-06',
        message: error.message
      }

      const startState = {
        '2016-06-06': {
          ids: ['this-is-an-id-with-numb3r'],
          isFetching: true,
          errorMessage: null
        }
      }

      const endState = {
        '2016-06-06': {
          ids: ['this-is-an-id-with-numb3r'],
          isFetching: false,
          errorMessage: 'error'
        }
      }


      deepFreeze(startState)

      expect(
        listByDay(startState, action)
      ).toEqual(endState)
    })
  })

  describe('REMOVE_ENTRY_* actions', () => {

    it('should handle REMOVE_ENTRY_REQUEST action', () => {

      const action = {
        type: types.REMOVE_ENTRY_REQUEST,
        day: '2016-06-06',
      }

      const startState = {
        '2016-06-06': {
          ids: ['this-is-an-id-with-numb3r'],
          isFetching: false,
          errorMessage: null
        }
      }

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

    it('should handle REMOVE_ENTRY_SUCCESS action', () => {

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
        response,
      }

      const startState = {
        '2016-06-06': {
          ids: ['this-is-an-id-with-numb3r'],
          isFetching: false,
          errorMessage: null
        }
      }

      const endState = {
        '2016-06-06': {
          ids: [],
          isFetching: false,
          errorMessage: null
        }
      }


      deepFreeze(startState)

      expect(
        listByDay(startState, action)
      ).toEqual(endState)

    })

    it('should handle REMOVE_ENTRY_FAILURE action', () => {

      const error = {
        message: 'error'
      }

      const action = {
        type: types.REMOVE_ENTRY_FAILURE,
        day: '2016-06-06',
        message: error.message
      }

      const startState = {
        '2016-06-06': {
          ids: ['this-is-an-id-with-numb3r'],
          isFetching: false,
          errorMessage: null
        }
      }

      const endState = {
        '2016-06-06': {
          ids: ['this-is-an-id-with-numb3r'],
          isFetching: false,
          errorMessage: 'error'
        }
      }


      deepFreeze(startState)

      expect(
        listByDay(startState, action)
      ).toEqual(endState)
    })

  })

})
