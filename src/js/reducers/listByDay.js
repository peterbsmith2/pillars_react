import * as types from '../constants/ActionTypes'
import { combineReducers } from 'redux'
import moment from 'moment'

const ids = (state = [], action) => {
  switch(action.type) {
    case types.FETCH_ENTRIES_SUCCESS:
      return action.response.result
    case types.ADD_ENTRY_SUCCESS:
      return [
        ...state,
        action.response.result
      ]
    case types.REMOVE_ENTRY_SUCCESS:
      return state.filter(id => id !== action.response.result)
    default:
      return state
  }
}

const isFetching = (state = false, action) => {
  switch(action.type) {
    case types.FETCH_ENTRIES_REQUEST:
      return true
    case types.FETCH_ENTRIES_SUCCESS:
    case types.FETCH_ENTRIES_FAILURE:
      return false
    default:
      return state
  }
}

const errorMessage = (state = null, action) => {
  switch(action.type) {
    case types.FETCH_ENTRIES_REQUEST:
    case types.FETCH_ENTRIES_SUCCESS:
      return null
    case types.FETCH_ENTRIES_FAILURE:
    case types.REMOVE_ENTRY_FAILURE:
    case types.ADD_ENTRY_FAILURE:
      return action.message
    default:
      return state
  }
}

const listByDay = (state = {} , action) => {
  switch (action.type) {
    case types.FETCH_ENTRIES_REQUEST:
    case types.FETCH_ENTRIES_SUCCESS:
    case types.FETCH_ENTRIES_FAILURE:
    case types.ADD_ENTRY_REQUEST:
    case types.ADD_ENTRY_SUCCESS:
    case types.ADD_ENTRY_FAILURE:
    case types.REMOVE_ENTRY_REQUEST:
    case types.REMOVE_ENTRY_SUCCESS:
    case types.REMOVE_ENTRY_FAILURE:
      if (!action.day) {
        return state
      }
      let updatedState = {
        ...state
      }
      if (!state[action.day]) {
        updatedState = {
          ...state,
          [action.day]: {}
        }
      }
      return {
        ...updatedState,
        [action.day]: {
          ids: ids(updatedState[action.day].ids, action),
          isFetching: isFetching(updatedState[action.day].isFetching, action),
          errorMessage: errorMessage(updatedState[action.day].errorMessage, action)
        }
      }
    default:
      return state
  }

}

export default listByDay

export const getIds = (state, day) =>
    !state[day] ? [] : state[day].ids

export const getIsFetching = (state, day) =>
    !state[day] ? false : state[day].isFetching

export const getErrorMessage = (state, day) =>
    !state[day] ? false : state[day].errorMessage
