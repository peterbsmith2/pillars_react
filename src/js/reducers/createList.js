import { combineReducers } from 'redux'
import * as types from '../constants/ActionTypes'

const createList = (day) => {
  const ids = (state = [], action) => {
    switch (action.type) {
      case types.FETCH_ENTRIES_SUCCESS:
        // NOTE: Do I really need to check that the action.day equals day. When
        // will it be different?
        return day === action.day ?
          action.response.map(entry => entry.id) :
          state
      case types.ADD_ENTRY_SUCCESS:
        // TODO: HANDLE ADD_ENTRY_SUCCESS
      default:
        return state
    }
  }

  const isFetching = (state = false, action) => {
    if (action.day !== day) {
      return state
    }
    switch (action.type) {
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
    if (day !== action.day) {
      return state
    }
    switch (action.type) {
      case types.FETCH_ENTRIES_FAILURE:
        return action.message
      case types.FETCH_ENTRIES_SUCCESS:
      case types.FETCH_ENTRIES_REQUEST:
        return null
      default:
        return state
    }
  }

  return combineReducers({
    ids,
    isFetching,
    errorMessage
  })
}

export default createList

export const getIds = (state) => state.ids
export const getIsFetching = (state) => state.isFetching
export const getErrorMessage = (state) => state.errorMessage
