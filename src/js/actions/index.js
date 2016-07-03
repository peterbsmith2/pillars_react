import * as types from '../constants/ActionTypes'
import { getIsFetching } from '../reducers'
import { normalize } from 'normalizr'
import * as schema from './schema'

export const fetchEntries = (day) => (dispatch, getState, api) => {

  if(getIsFetching(getState(), day)) {
    return Promise.resolve()
  }


  dispatch({
    type: types.FETCH_ENTRIES_REQUEST,
    day
  })

  return api.fetchEntries(day).then(
    response => {
      dispatch({
        type: types.FETCH_ENTRIES_SUCCESS,
        day,
        response: normalize(response.entries, schema.arrayOfEntries)
      })
    },
    error => {
      dispatch({
        type: types.FETCH_ENTRIES_FAILURE,
        day,
        message: error.message || 'Something failed to work properly.'
      })
    })
}

export const addEntry = (submission) => (dispatch, getState, api) => {

  dispatch({
    type: types.ADD_ENTRY_REQUEST,
    day: submission.day
  })

  return api.addEntry(submission).then(
    response => {
      dispatch({
        type: types.ADD_ENTRY_SUCCESS,
        response: normalize(response.entries, schema.entry),
        day: submission.day
      })
    },
    error => {
      dispatch({
        type: types.ADD_ENTRY_FAILURE,
        message: error.message || 'Something failed to work properly.'
      })
    })
}


export const removeEntry = (submission) => (dispatch, getState, api) => {
  dispatch({
    type: types.REMOVE_ENTRY_REQUEST,
    day: submission.params.day,
    id: submission.id
  })

  return api.removeEntry(submission).then(
    response => {
      // NOTE: May need to modify the dispatch, depending on what the response
      // is defined as
      dispatch({
        type: types.REMOVE_ENTRY_SUCCESS,
        response: { result: submission.id },
        day: submission.params.day
      })
    },
    error => {
      dispatch({
        type: types.REMOVE_ENTRY_FAILURE,
        message: error.message || 'Something failed to work properly.',
        day: submission.params.day
    })
  })
}
